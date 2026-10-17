#  NutriGuide - Web Admin & Management Panel

[![React](https://img.shields.io/badge/React-18.x-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

**NutriGuide Admin Panel**, NutriGuide ekosisteminin web tabanlı merkezi yönetim portalıdır. Bu panel, içerik yöneticilerine ve diyetisyenlere platformdaki tarif kataloğunu dinamik olarak yönetme, besin değerlerini (kalori/fiyat) güncelleme ve yeni sağlıklı menü ögeleri tanımlama imkanı sunar. Modern web standartları, modüler bileşen mimarisi ve yüksek performanslı araçlar kullanılarak inşa edilmiştir.

---

##  İçindekiler
- [Proje Özet & Amaç](#-proje-özet--amaç)
- [Öne Çıkan Özellikler](#-öne-çıkan-özellikler)
- [Arayüz & Görsel Vitrin](#-arayüz--görsel-vitrin)
- [Teknoloji Stack'i](#-teknoloji-stacki)
- [Proje Mimari ve Klasör Yapısı](#-proje-mimari-ve-klasör-yapısı)
- [Kurulum ve Çalıştırma (Getting Started)](#-kurulum-ve-çalıştırma-getting-started)
- [Bileşen ve Arayüz Yapısı](#-bileşen-ve-arayüz-yapısı)
- [Gelecek Yol Haritası (Roadmap)](#-gelecek-yol-haritası-roadmap)
- [Lisans ve İletişim](#-lisans-ve-iletişim)

---

##  Proje Özet & Amaç

NutriGuide ekosisteminde mobil uygulama son kullanıcılara hizmet verirken, **NutriGuide Admin Panel** işletme/yönetim tarafının veri girişini gerçekleştirdiği kontrol merkezidir. 

**Temel Hedefler:**
* **Dinamik İçerik Yönetimi:** Veritabanına bağlı besin ve yemek tarifi verilerinin tek bir ekrandan yönetilmesi.
* **Hızlı Veri Girişi:** Kalori (kcal), kategori (Bowl, Salata, Smoothie vb.) ve fiyat (TL) bilgilerinin form arayüzü üzerinden hızlıca sisteme aktarılması.
* **Modern & Responsive Deneyim:** Tailwind CSS ile oluşturulan esnek düzen sayesinde hem masaüstü hem de tablet cihazlarda akıcı kullanım.

---

##  Öne Çıkan Özellikler

*  **Yeni Tarif Ekleme Modülü:** Form doğrulama (validation) destekli yeni yemek, kategori, kalori, fiyat ve görsel URL ekleme alanı.
*  **Kategori Tabanlı Sınıflandırma:** İçerikleri Bowl, Salata, Smoothie & Detoks gibi sağlıklı beslenme kategorilerine ayırma.
*  **Anlık Özet Sayacı:** Sistemde kayıtlı aktif tarif sayısını ve menü durumunu canlı takip etme.
*  **NutriGuide Design System Uyumlu:** Mobil uygulama ve Figma tasarım sistemiyle %100 renk ve tipografi uyumu (Soft Nude `#ffd1c0`, Primary Green `#10B981`).
*  **Lightning Fast Build:** Vite bundling altyapısı sayesinde 1 saniyenin altında hot-reload ve geliştirme sunucusu hızı.

---

##  Arayüz & Görsel Vitrin

Yönetim paneli ekran arayüzü ve geliştirme ortamı görselleri:

| Canlı Yönetim Paneli (Netlify Production / Local) |
| :---: |
| ![NutriGuide Admin Panel](screenshots/dashboard_preview.png) |

---

##  Teknoloji Stack'i

| Katman | Teknoloji / Kütüphane | Kullanım Amacı |
| :--- | :--- | :--- |
| **Frontend Framework** | React.js (v18+) | Modüler kullanıcı arayüzü ve durum yönetimi |
| **Build & Tooling** | Vite (v5+) | Hızlı geliştirme sunucusu ve optimize üretim derlemesi |
| **Styling & UI** | Tailwind CSS (v3+) | Utility-first CSS mimarisi ve responsive düzen |
| **State & Lifecycle** | React Hooks (`useState`, `useEffect`) | Form state yönetimi ve veri akışı |
| **Deployment** | Netlify / Vercel | Jamstack statik web yayınlama ortamı |

---

##  Proje Mimari ve Klasör Yapısı

Proje, okunabilirlik ve sürdürülebilirlik ilkelerine uygun modüler bir bileşen mimarisine sahiptir:

```text
nutriguide-panel/
├── public/                 # Statik varlıklar (favicon, global ikonlar)
│   ├── favicon.svg
│   └── icons.svg
├── src/                    # Uygulama kaynak kodları
│   ├── assets/             # Logo, maskot ve doğrudan içe aktarılan görseller
│   │   └── hero.png
│   ├── Components/         # Yeniden kullanılabilir UI bileşenleri
│   │   └── MealCard.jsx    # Yemek kartı liste bileşeni
│   ├── Interfaces/         # Veri yapıları ve JS modülleri
│   │   └── Meal.js         # Tarif veri modeli şablonu
│   ├── Pages/              # Ana sayfa düzenleri
│   │   └── Dashboard.jsx   # Yönetici kontrol paneli ve form ekranı
│   ├── App.jsx             # Kök uygulama bileşeni
│   ├── App.css             # Özel UI stilleri
│   ├── index.css           # Tailwind CSS direktifleri
│   └── main.jsx            # React giriş noktası (DOM Rendering)
├── screenshots/            # Proje dökümantasyon görselleri
│   └── dashboard_preview.png
├── tailwind.config.js      # Tailwind renk, font ve tema yapılandırması
├── vite.config.js          # Vite modül derleyici ayarları
├── package.json            # Proje bağımlılıkları ve npm betikleri
├── .gitignore              # Sürüme dahil edilmeyecek dosyalar (node_modules vb.)
└── README.md               # Detaylı proje dökümantasyonu


 Kurulum ve Çalıştırma (Getting Started)
Projeyi yerel geliştirme ortamınızda (localhost) çalıştırmak için aşağıdaki adımları sırasıyla uygulayın:

Gereksinimler
Node.js: v18.0.0 veya üzeri

npm: v9.0.0 veya üzeri (veya yarn / pnpm)

1. Depoyu Klonlayın
Bash
git clone [https://github.com/Kardelen0/nutriguide-panel.git](https://github.com/Kardelen0/nutriguide-panel.git)
cd nutriguide-panel
2. Bağımlılıkları Yükleyin
Bash
npm install
3. Geliştirici Sunucusunu Başlatın
Bash
npm run dev
Sunucu başarıyla başlatıldığında tarayıcınızda otomatik olarak http://localhost:5173/ adresi açılacaktır.

4. Production (Üretim) Derlemesi Alma
Bash
npm run build
Derlenen optimize dosyalar dist/ klasörü içerisine aktarılacaktır.

 Bileşen ve Arayüz Yapısı
Dashboard.jsx (Ana Kontrol Ekranı):

Sol tarafta Yeni Tarif Ekle form modülünü barındırır.

Sağ tarafta Sağlıklı Tarif Listesi ve anlık tarif sayacını (0 Tarif) görüntüler.

MealCard.jsx (Listeleme Kartı):

Eklenen tariflerin görselini, adını, kalorisini ve fiyatını grid yapısında sergiler.

tailwind.config.js (Tasarım Sistemi):

NutriGuide özel renk paleti (#ffd1c0, #10B981, #2C2C2C) Tailwind temasına entegre edilmiştir.

 Gelecek Yol Haritası (Roadmap)
[ ] REST API / Firebase / Supabase veritabanı entegrasyonu (CRUD işlemleri).

[ ] Yönetici girişi için Kimlik Doğrulama (JWT / Auth0) ekranı.

[ ] Mevcut tarifleri düzenleme ve silme (Delete/Update) fonksiyonları.

[ ] Dışa aktarma (CSV / PDF) menü raporlama özelliği.

Geliştirici:
Selinay Kardelen Bölge
