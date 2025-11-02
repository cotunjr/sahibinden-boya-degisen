console.log('Content script loaded.');

if (window.location.href.includes('/ilan/')) {
  // Detail page logic
  window.onload = function() {
    console.log('Extracting paint data from HTML.');
    const paintedParts = [];
    const changedParts = [];

    const paintedList = document.querySelector('.car-damage-info-list ul:first-child');
    if (paintedList) {
      const paintedItems = paintedList.querySelectorAll('.selected-damage');
      paintedItems.forEach(item => {
        paintedParts.push(item.textContent.trim());
      });
    }

    const changedList = document.querySelector('.car-damage-info-list ul:last-child');
    if (changedList) {
      const changedItems = changedList.querySelectorAll('.selected-damage');
      changedItems.forEach(item => {
        changedParts.push(item.textContent.trim());
      });
    }

    const data = { painted: paintedParts, changed: changedParts };

    if (data.painted.length > 0 || data.changed.length > 0) {
      console.log('Paint data would have been saved to storage:', data);
    } else {
      console.log('No paint and replacement data found in the HTML.');
    }
  };
} else {
  // Search results page logic
  let currentPopup = null;
  let hoverTimer = null;

  document.addEventListener('mouseover', (event) => {
    const listingRow = event.target.closest('tr.searchResultsItem');
    if (listingRow) {
      // Clear any existing timer and popup
      if (hoverTimer) {
        clearTimeout(hoverTimer);
      }
      if (currentPopup) {
        currentPopup.remove();
        currentPopup = null;
      }

      hoverTimer = setTimeout(() => {
        const listingLink = listingRow.querySelector('a[href*="/ilan/"]'); // Find the link to the detail page
        if (listingLink) {
          const detailUrl = listingLink.href;
          fetch(detailUrl)
            .then(response => response.text())
            .then(html => {
              const parser = new DOMParser();
              const doc = parser.parseFromString(html, 'text/html');
              const damageArea = doc.querySelector('.damage-area');

              const cssPromises = Array.from(doc.querySelectorAll('link[rel="stylesheet"]'))
                .map(link => fetch(link.href).then(res => res.text()));

              Promise.all(cssPromises).then(cssSources => {
                const allCSS = cssSources.join('\n');
                showPopup(event.pageX, event.pageY, damageArea ? damageArea.innerHTML : null, allCSS);
              });
            });
        }
      }, 200);
    }
  });

  document.addEventListener('mouseout', (event) => {
    const listingRow = event.target.closest('tr.searchResultsItem');
    if (listingRow) {
      clearTimeout(hoverTimer);
      if (currentPopup) {
        currentPopup.remove();
        currentPopup = null;
      }
    }
  });

  function showPopup(x, y, damageAreaHTML, css) {
    if (currentPopup) {
      currentPopup.remove();
    }

    currentPopup = document.createElement('div');
    currentPopup.style.position = 'absolute';
    currentPopup.style.backgroundColor = 'white';
    currentPopup.style.border = '1px solid black';
    currentPopup.style.zIndex = '10000';
    currentPopup.style.transform = 'scale(0.7)'; // Scale the entire popup
    currentPopup.style.transformOrigin = 'top left';

    if (damageAreaHTML) {
      const style = document.createElement('style');
      style.textContent = css + ' .damage-area img { max-width: 100%; height: auto; }'; // Add image scaling
      currentPopup.appendChild(style);

      const contentWrapper = document.createElement('div');
      contentWrapper.innerHTML = damageAreaHTML;
      currentPopup.appendChild(contentWrapper);

    } else {
      currentPopup.innerHTML = '<p>Boya ve değişen bilgisi bulunamadı.</p>';
    }

    document.body.appendChild(currentPopup);

    // Smart positioning based on "İlan Başlığı" column
    const titleHeader = Array.from(document.querySelectorAll('th')).find(th => th.textContent.trim() === 'İlan Başlığı');
    let newX;
    if (titleHeader) {
      const titleHeaderRect = titleHeader.getBoundingClientRect();
      const titleHeaderCenter = titleHeaderRect.left + window.scrollX + titleHeaderRect.width / 2;
      const popupWidth = currentPopup.offsetWidth * 0.7; // Account for scaling

      if (x < titleHeaderCenter) {
        newX = x; // Position to the right
      } else {
        newX = x - popupWidth; // Position to the left
      }
    } else {
      newX = x; // Default to right if header not found
    }

    const popupHeight = currentPopup.offsetHeight * 0.7; // Account for scaling
    const windowHeight = window.innerHeight;
    let newY;

    if (y + popupHeight < windowHeight) {
      newY = y; // Position below cursor
    } else {
      newY = y - popupHeight; // Position above cursor
    }

    currentPopup.style.left = `${newX}px`;
    currentPopup.style.top = `${newY}px`;
  }
}
