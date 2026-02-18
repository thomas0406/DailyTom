# 📔 Panduan Penggunaan Aplikasi Diary Web

## 🚀 Cara Membuka Aplikasi

**Pilih salah satu dari opsi berikut:**

### Opsi 1: File Standalone (Recommended ✅)
1. Buka file: **`diary-standalone.html`** di browser
2. Semua fitur sudah tertanam dalam satu file
3. Berfungsi 100% tanpa perlu server

### Opsi 2: File Original  
1. Buka file: **`index.html`** di browser
2. Pastikan folder `css/` dan `js/` berada di lokasi yang sama
3. Aplikasi akan berfungsi normal

### Opsi 3: Dengan Server (Untuk Testing)
Buka Command Prompt/PowerShell di folder ini dan jalankan:
```powershell
node server.js
```
Kemudian buka browser ke: `http://localhost:8000`

---

## 📖 Fitur-Fitur Aplikasi

### ➕ Membuat Halaman Baru
- Klik tombol **"+ Halaman Baru"** di sidebar kiri
- Halaman baru akan langsung dibuat dengan tanggal hari ini
- Halaman otomatis terbuka untuk diedit

### ✍️ Mengedit Halaman
1. **Judul**: Ketik judul halaman di input paling atas
2. **Tanggal**: Ubah tanggal jika perlu menggunakan date picker
3. **Konten**: Tulis cerita/catatan di text area besar
4. **Audio**: (Opsional)
   - Masukkan URL audio eksternal, ATAU
   - Klik tombol upload untuk memilih file audio lokal
   - Gunakan tombol play/pause untuk mendengarkan

### 💾 Menyimpan Halaman
- Setelah mengedit, **klik tombol "Simpan"** (tombol biru)
- Akan muncul notifikasi "✅ Tersimpan!" 
- Data otomatis disimpan ke `localStorage` browser
- **Catatan**: Data bertahan sampai Anda menghapus browser cache

### 🗑️ Menghapus Halaman
- Klik tombol **"Hapus Halaman"** (tombol merah)
- Konfirmasi penghapusan
- Halaman akan dihapus permanen dari penyimpanan

### 📝 Melihat Setiap Halaman
- Klik pada entry di sidebar kiri untuk membukanya
- Entry ditampilkan dengan format: `[Tanggal] — [Judul]`
- Entry terbaru muncul paling atas

---

## 🔧 Troubleshooting

### Tombol tidak merespon?
1. Buka **Developer Console** (tekan `F12`)
2. Lihat tab "Console" untuk error messages
3. Pastikan file `js/app.js` dan `css/styles.css` pada lokasi yang sesuai

### Data tidak tersimpan?
1. Browser mungkin belum mendukung localStorage
2. Coba gunakan file **`diary-standalone.html`** sebagai alternatif
3. Data disimpan dalam memory dan akan hilang jika refresh

### CSS tidak terload?
1. Cek apakah file `css/styles.css` ada di folder yang tepat
2. Atau gunakan `diary-standalone.html` yang sudah embed CSS

---

## 💡 Tips Penggunaan

✅ **Simpan secara berkala** - Jangan lupa klik "Simpan" setelah selesai mengedit  
✅ **Backup data** - Jika penting, salin data dari browser console atau screenshot  
✅ **Gunakan audio** - Rekam suara dan upload untuk entry yang lebih interaktif  
✅ **Organize entries** - Beri judul yang jelas untuk memudahkan pencarian  

---

## 📱 Kompatibilitas Browser

Berfungsi di:
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Edge
- ✅ Safari
- ✅ Opera

---

**Selamat menggunakan Diary Web! 🎉**
