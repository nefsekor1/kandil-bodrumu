# KANDİL BODRUMU 🏮

> **"Gece yarısı çaldı."**  
> Roguelite mekaniklerine sahip, modern efektli, akıcı bir tuğla kırma (brick breaker) oyunu.

![Kandil Bodrumu](electron-build/icon.ico)

---

## 🎮 İndirme ve Oynama Seçenekleri

| Platform | İndirme / Bağlantı | Açıklama |
|---|---|---|
| **🌐 Tarayıcı (Web)** | [Doğrudan Oyna (index.html)](index.html) | İndirmeden anında tarayıcınızda oynayın |
| **🖥️ Windows (Kurulum)** | [Releases Sayfasından İndir](https://github.com/nefsekor1/kandil-bodrumu/releases/latest) | Masaüstü kısayoluyla tek tıkla kurulan Setup.exe |
| **📱 Android (APK)** | [KANDIL_BODRUMU.apk](KANDIL_BODRUMU.apk) | Android telefon ve tabletler için doğrudan yüklenebilir paket |

---

## ✨ Özellikler

- **Prosedürel Seviyeler:** Her seviyede farklı desenler (Piramit, Elmas, Dalga, İstila, Artı ve Çerçeve).
- **Yadigâr (Relic) Kart Seçimi:** Her seviye geçişinde roguelite yükseltme kartları (Geniş Raket, Ağır Bilye, İkiz Bilye, Lazer Çekirdeği, Zaman Bükücü vb.).
- **Çeşitli Tuğla Tipleri:** Normal tuğlalar, zincirleme patlayan Bomba tuğlalar ve Çelik tuğlalar.
- **Güçlendirme Kapsülleri:** Lazer, Ateş topu, x3 Bilye, Yavaşlatma, Ekstra Can ve Genişleme.
- **Dahili Ses Sentezleyici:** Harici ses dosyası gerektirmeyen Web Audio API tabanlı retro synthesizer ve fon müziği.
- **Çoklu Platform:** Web, Windows (Electron) ve Android (Capacitor) tam uyumluluk.

---

## 🕹️ Kontroller

* **Fare / Parmak:** Raketi sağa-sola hareket ettirir.
* **A - D veya Yön Tuşları:** Klavyeyle hassas kontrol sağlar.
* **Tıklama veya Boşluk (Space):** Bilyeyi fırlatır.
* **1 - 3 Tuşları:** Seviye sonu yadigâr kartlarını seçer.
* **P veya ESC:** Oyunu duraklatır / devam ettirir.
* **M:** Sesi açar / kapatır.
* **F11 (Windows):** Tam ekran modu.

---

## 🛠️ Geliştirici & Derleme Bilgileri

Proje 3 ana yapı üzerine kurulmuştur:
1. `index.html`: Bağımsız Canvas 2D motoru ve oyun mantığı.
2. `electron-build/`: Windows masaüstü uygulaması yapılandırması.
3. `capacitor-build/`: Android ve iOS mobil platform yapılandırması.

---
Lisans: MIT
