# Sahibinden Boya Durumu Uzantısı

Bu Chrome uzantısı, sahibinden.com'daki araba arama sonuçları sayfalarında gezinirken, her bir ilana tıklamanıza gerek kalmadan araçların boya ve değişen parça durumunu hızlıca görmenizi sağlar.

## Özellikler

-   **Hızlı Önizleme:** Arama sonuçları listesindeki bir ilanın üzerine fareyle geldiğinizde, aracın hasar ve boya durumunu gösteren bir pencere açılır.
-   **Verimlilik:** İlgilenmediğiniz ilanlara tıklayarak zaman kaybetmenizi önler.
-   **Akıllı Konumlandırma:** Önizleme penceresi, imlecinizin konumuna göre en uygun yerde görüntülenir.

## Kurulum

Bu uzantıyı yüklemek için iki farklı yöntem bulunmaktadır:

### Yöntem 1: Paketlenmemiş Uzantı Olarak Yükleme (Önerilen)

Bu yöntem, özellikle geliştirme ve test aşamasında daha sorunsuz çalışır ve Chrome'un `.crx` dosyalarına uyguladığı kısıtlamaları aşar.

1.  Bu GitHub deposunun [Releases](https://github.com/cotunjr/sahibinden-boya-degisen/releases) sayfasına gidin.
2.  En son sürümdeki `sahibinden.zip` dosyasını bilgisayarınıza indirin ve içeriğini bir klasöre çıkarın (örneğin, `sahibinden-uzanti`).
3.  Chrome tarayıcınızı açın ve adres çubuğuna `chrome://extensions` yazarak Uzantılar sayfasına gidin.
4.  Sağ üst köşedeki **Geliştirici modu** anahtarını etkinleştirin.
5.  Sayfanın sol üst köşesindeki **"Paketlenmemiş öğe yükle"** (veya "Load unpacked") düğmesine tıklayın.
6.  Açılan pencerede, `.zip` dosyasından çıkardığınız klasörü (örneğin, `sahibinden-uzanti`) seçin ve "Klasör Seç" düğmesine tıklayın.

Uzantı doğrudan kaynak kodundan yüklenecek ve etkin hale gelecektir.

### Yöntem 2: CRX Dosyası ile Yükleme (Bazı Tarayıcılarda Sorun Çıkarabilir)

`.crx` dosyaları, Chrome'un güvenlik politikaları nedeniyle doğrudan yüklenirken veya sürükle-bırak yöntemiyle bile bazen sorun çıkarabilir.

1.  Bu GitHub deposunun [Releases](https://github.com/cotunjr/sahibinden-boya-degisen/releases) sayfasına gidin.
2.  En son sürümdeki `.crx` dosyasının bağlantısına **sağ tıklayın** ve "Bağlantıyı farklı kaydet..." seçeneğini seçerek bilgisayarınıza indirin.
3.  Chrome tarayıcınızı açın ve adres çubuğuna `chrome://extensions` yazarak Uzantılar sayfasına gidin.
4.  Sağ üst köşedeki **Geliştirici modu** anahtarını etkinleştirin.
5.  İndirdiğiniz `.crx` dosyasını bu sayfaya sürükleyip bırakın.
6.  Gelen uyarıda "Uzantıyı ekle" seçeneğine tıklayın.

## Nasıl Kullanılır?

1.  Kurulum tamamlandıktan sonra, sahibinden.com'da bir araba arama sonuçları sayfasına gidin.
2.  Farenizi listedeki herhangi bir ilanın üzerine getirin.
3.  Birkaç saniye içinde, o araca ait boya ve değişen parça bilgilerini gösteren bir pencere belirecektir.

---

## Sorumluluk Reddi

**Uyarı:** Bu eklenti tamamen Google'ın Gemini yapay zeka modeli kullanılarak yazılmıştır. Eklentinin düzgün çalıştığı doğrulanmış olsa da, kullanımından doğabilecek herhangi bir sorun veya aksaklıkta sorumluluk kabul edilmemektedir.
