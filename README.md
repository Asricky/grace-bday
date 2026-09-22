<div align="center">

<img src="assets/bouquet.svg" width="210" alt="Bouquet daisy putih dan kuning untuk Grace" />

# ✿ Grace's Little Garden

### A little play. A little sunshine. A sweet seventeenth.

Hadiah ulang tahun interaktif untuk **Grace Natalie** — dari kakak, dengan bunga, kenangan, dan beberapa kejutan kecil.

**[Buka taman Grace ↗](https://sweet-17th-grace.vercel.app)** · [Preview lokal](#-preview-lokal) · [Isi foto & ucapan](#-bikin-lebih-personal)

![HTML](https://img.shields.io/badge/HTML-vanilla-748267?style=flat-square)
![CSS](https://img.shields.io/badge/CSS-responsive-344e3d?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-no_dependencies-f3d56c?style=flat-square&labelColor=344e3d)
![Made for Grace](https://img.shields.io/badge/made_for-Grace_Natalie-e9eddf?style=flat-square&labelColor=748267)

</div>

---

## 🌼 Ada apa di dalamnya?

Bayangin membuka kado pelan-pelan: main sebentar, lihat bunga, buka kenangan, lalu ketemu kejutan di akhir.

| Bagian | Yang bisa dicoba |
| --- | --- |
| **Little challenge** | Cocokkan 6 pasang flip card. Setelah 30 detik, boleh lewati atau lanjut main. |
| **A gift for you** | Ketuk kotak kado untuk membuka taman dan menyalakan musik latar. |
| **A bouquet of good things** | Pilih bunga untuk membaca lima pesan kecil. |
| **Small moments, big memories** | Enam polaroid yang bisa dibuka lebih besar. |
| **Look at you, growing** | Lima milestone, masing-masing dengan tempat foto. |
| **A pocket full of good wishes** | Empat surat dari Ayah, Mama, Kakak, dan Eki, lengkap dengan foto. |
| **Make a little wish** | Ucapan ulang tahun, lalu kejutan konser setelah 3 detik. Masih ada hadiah kedua! |

Nuansanya **putih hangat, hijau sage, dan kuning daisy**. Dibuat untuk HP maupun desktop, dengan navigasi keyboard, tombol musik, dan dukungan *reduced motion*.

## 🌱 Preview lokal

Tidak perlu install dependency. Dari folder project, jalankan:

```sh
python -m http.server 3000 --bind 127.0.0.1
```

Buka **http://localhost:3000**. Musik mulai setelah kado diklik; tombol `♫` di kanan bawah bisa dipakai untuk jeda atau putar kembali.

> **Ulangi** mengacak kartu tanpa mengulang waktu tunggu 30 detik. **Main kartu lagi** di footer memulai sesi baru.

## 📸 Bikin lebih personal

Semua isi utama ada di **[`CONFIG` pada script.js](script.js)**. Enam foto galeri, lima foto milestone, dan empat foto keluarga sudah terpasang. Teks dan ucapan dapat diperbarui di konfigurasi yang sama.

### Galeri kenangan

Foto galeri saat ini ada di `assets/Gegehh/`. Untuk menggantinya, isi `src` pada `CONFIG.photos`:

```js
{ src: 'assets/grace-1.jpeg', art: 'daisy', caption: 'Hari yang seru banget', color: '#e8ebd9' }
```

### Foto milestone

Bagian milestone memakai koleksi [`assets/journey/`](assets/journey/). Ubah `photo` pada item yang sesuai di `CONFIG.journey` untuk menggantinya.

| Milestone | File foto |
| --- | --- |
| Dulu masih kecil banget | `assets/journey/01-kecil.jpeg` |
| Ada aja ceritanya | `assets/journey/02-cerita.jpeg` |
| Makin gede, makin jadi diri sendiri | `assets/journey/03-tumbuh.jpeg` |
| Take ur time for today! | `assets/journey/04-sekarang.jpeg` |
| Masih banyak serunya nanti | `assets/journey/05-petualangan.jpeg` |

Contoh: `photo: 'assets/journey/01-kecil.jpeg'`. Judul dan ceritanya boleh ikut disesuaikan.

### Foto dan surat keluarga

Simpan foto di [`assets/letters/`](assets/letters/README.md), lalu edit `CONFIG.wishes`:

| Pengirim | File foto |
| --- | --- |
| Ayah | `assets/letters/ayah.jpeg` |
| Mama | `assets/letters/mama.jpeg` |
| Kakak | `assets/letters/kakak.jpeg` |
| Eki | `assets/letters/eki.jpeg` |

```js
{
  sender: 'Ayah',
  photo: 'assets/letters/ayah.jpeg',
  subtitle: 'PESAN KECIL DARI AYAH',
  text: 'Tulis ucapan Ayah di sini…'
}
```

JPG, PNG, dan WebP bisa dipakai. Sesuaikan nama serta ekstensi di konfigurasi. Jika `photo` masih kosong, bingkai ilustrasi tetap tampil rapi.

### Bunga dan musik

- **`CONFIG.flowers`** — pesan di tiap bunga.
- **`CONFIG.tracks`** — melodi instrumental. Melodi pertama dipakai sebagai musik latar, dimainkan lewat Web Audio setelah interaksi pengguna.

<details>
<summary><strong>🎁 Spoiler: pengaturan kejutan terakhir</strong></summary>

Klik **Make a little wish** → popup ucapan → tunggu **3 detik** → gambar tiket konser → tombol menuju petunjuk hadiah kedua di lemari kamar Gegeh.

Gambar publik ada di **`assets/gifts/candlelight-ticket.png`**, sesuai `CONFIG.surprise.ticketImage`. Foto tiket menggunakan versi yang **ID tiket, QR, dan kode QR tertulisnya sudah disensor permanen**. Tautan ukuran penuh juga mengarah ke versi tersensor tersebut.

Jika mengganti tiket, gunakan gambar yang sudah disensor. File tiket tanpa sensor disimpan terpisah dari project dan tidak dipublikasikan.

Menutup popup ucapan sebelum 3 detik membatalkan kejutan otomatis; tombolnya bisa diklik lagi.

</details>

## 🚀 Build & deploy

```sh
npm run check
npm run build
```

Build memakai Node.js dan menyalin file situs ke **`dist/`**. Hanya HTML, CSS, JavaScript, dan aset situs yang dipublikasikan. Profil browser, screenshot pengujian, file environment, serta dokumentasi tidak masuk hasil build.

| Pengaturan | Nilai |
| --- | --- |
| GitHub | [Asricky/grace-bday](https://github.com/Asricky/grace-bday) |
| Production branch | `main` |
| Vercel project | [sweet-17th-grace](https://vercel.com/asrickys-projects/sweet-17th-grace) |
| Domain | [sweet-17th-grace.vercel.app](https://sweet-17th-grace.vercel.app) |
| Framework preset | Other |
| Root directory | `.` |
| Build command | `npm run build` |
| Output directory | `dist` |

Repository sudah terhubung ke Vercel. Push ke `main` memicu deployment otomatis. Konfigurasi ada di [`vercel.json`](vercel.json); build akan berhenti dengan pesan yang jelas jika gambar tiket tidak ditemukan.

## 🗂️ Peta project

```text
.
├── index.html              # Struktur halaman dan popup
├── style.css               # Tampilan taman, kartu, dan responsif
├── script.js               # Konten, game, musik, dan kejutan
├── assets/
│   ├── *.svg               # Ilustrasi bunga lokal
│   ├── Gegehh/             # Enam foto galeri
│   ├── journey/            # Lima foto milestone aktif
│   ├── letters/            # Foto untuk empat surat
│   └── gifts/              # Tiket publik yang sudah disensor
├── build.mjs               # Build static site
├── generate-assets.py      # Sumber ilustrasi SVG
├── verify.mjs              # Pengujian interaksi melalui Chrome DevTools
└── vercel.json             # Konfigurasi deployment
```

Ilustrasi tersimpan lokal. Font dari Google Fonts punya fallback lokal, dan musik tidak membutuhkan file audio eksternal.

---

<div align="center">

**Grow a little. Laugh a lot. Be you, always.**

*Made for Grace, with a big sibling high-five. ✋*

</div>
