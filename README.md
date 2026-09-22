# Grace's little garden

Website ulang tahun untuk Grace Natalie dari kakak. Versi mandiri dari konsep `Final`, dengan tema putih, hijau sage, dan kuning daisy. Tidak ada PIN atau bagian “A Letter For You”.

## Preview

Jalankan dari folder `Gegeh`:

```powershell
python -m http.server 3000 --bind 127.0.0.1
```

Buka http://localhost:3000. Preview lokal tidak perlu install dependency atau build.

## Isi

- Memory game 12 kartu / 6 pasangan, hitungan langkah, acak ulang. Tombol lewati muncul setelah 30 detik dan opsional. Mengacak kartu tidak mengulang waktu tunggu; “Main kartu lagi” memulai sesi baru.
- Animasi buka hadiah, hero ulang tahun, bouquet dengan 5 doa interaktif.
- Galeri 6 polaroid, perjalanan tumbuh dengan foto untuk setiap milestone, musik latar, dan 4 surat dari Ayah, Mama, Kakak, serta Eki dengan tempat foto.
- “Make a little wish” membuka ucapan, lalu popup tiket konser setelah 3 detik. Tombol berikutnya memberi petunjuk hadiah kedua di dalam lemari kamar Gegeh. Menutup ucapan sebelum 3 detik membatalkan popup berikutnya.
- Tampilan responsif, navigasi keyboard, dialog dengan Escape, dan reduced motion.

## Personalisasi

Edit `CONFIG` di `script.js`:

- `photos`: taruh foto Grace di `assets`, lalu isi `src`, misalnya `assets/grace-1.jpg`. Saat ini memakai ilustrasi sementara, bukan foto orang lain.
- `journey`: isi `photo` untuk setiap milestone, lalu sesuaikan judul dan deskripsi. Petunjuk nama file ada di `assets/journey/README.md`. Teks awal bersifat umum, tanpa menebak sekolah/tanggal lahir.
- `wishes`: empat draft surat. Ganti `text` dengan ucapan asli setiap pengirim; teks awal adalah contoh yang dibuat untuk preview.
- `flowers`: doa di setiap bunga.
- `tracks`: melodi instrumental sebelumnya tetap tersedia di konfigurasi. Melodi pertama menjadi musik latar saat kado dibuka. Tombol musik pojok kanan bawah untuk jeda/putar; bagian playlist di halaman sudah dihapus.

## Foto surat Ayah, Mama, Kakak, Eki

1. Simpan foto di folder `assets/letters/` dengan nama `ayah.jpg`, `mama.jpg`, `kakak.jpg`, dan `eki.jpg`.
2. Di `script.js` → `CONFIG.wishes`, isi `photo` yang sesuai, misalnya `photo: 'assets/letters/ayah.jpg'`. Contoh path juga sudah ada di komentar setiap surat. Format PNG/WebP juga boleh; sesuaikan ekstensi di `photo`.
3. Refresh browser. Foto tampil di atas isi surat. Selama `photo` kosong, tampil bingkai ilustrasi. Gambar yang gagal dimuat juga kembali ke bingkai ini.

## Gambar tiket konser

Simpan gambar tiket asli sebagai **`assets/gifts/candlelight-ticket.png`**. Popup akan memakainya otomatis saat dibuka, lengkap dengan tautan ukuran penuh. Jika nama/format berbeda, ubah `CONFIG.surprise.ticketImage` di `script.js`.

Popup hanya menampilkan gambar tiket asli. Desain tiket pengganti sudah dihapus. Saat gambar belum ada atau gagal dimuat, muncul pesan singkat; build produksi membutuhkan file tiket asli.

## Foto milestone

Simpan foto di `assets/journey/`: `01-kecil.jpg`, `02-cerita.jpg`, `03-tumbuh.jpg`, `04-sekarang.jpg`, `05-petualangan.jpg`. Isi `photo` pada item yang sesuai di `CONFIG.journey`, misalnya `photo: 'assets/journey/01-kecil.jpg'`. Format PNG/WebP juga bisa, cocokkan nama/ekstensinya. Setiap foto dapat diklik untuk diperbesar.

## GitHub dan Vercel

- Repository: https://github.com/Asricky/grace-bday
- Project Vercel sudah dibuat: https://vercel.com/asrickys-projects/sweet-17th-grace
- Domain `sweet-17th-grace.vercel.app` sudah terpasang dan terverifikasi di project. Belum ada deployment produksi.
- Root Directory `.`, Framework Preset **Other**. `vercel.json` mengatur Build Command `npm run build` dan Output Directory `dist`.
- `npm run build` hanya menyalin HTML, CSS, JavaScript, dan aset situs ke `dist`. Log, profil browser, screenshot tes, dan dokumentasi tidak dipublikasikan.
- Build akan memberi pesan yang jelas jika gambar tiket asli belum tersedia. Setelah file lengkap dan project terhubung, push ke `main` bisa digunakan untuk deployment otomatis.
- Koneksi GitHub saat ini memerlukan pemasangan Vercel GitHub App untuk akun Asricky: https://github.com/apps/vercel. Beri akses ke repository `grace-bday`, lalu hubungkan di pengaturan Git project Vercel.

Ilustrasi SVG disimpan lokal di `assets`; `generate-assets.py` adalah sumber pembuatannya. Font dari Google Fonts memiliki fallback lokal jika offline. Konten dan fitur lain tidak memerlukan layanan eksternal. Folder ini bisa di-host sebagai static site.
