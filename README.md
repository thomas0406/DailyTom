# 📔 Diary Web - Aplikasi Diary Mobile-Friendly

Aplikasi diary web yang indah dengan gaya neon dan dukungan audio penuh. Tulis pikiran Anda, simpan secara lokal di browser, dan akses dari device mana saja!

![HTML5](https://img.shields.io/badge/HTML5-E34C26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Mobile](https://img.shields.io/badge/Mobile-Responsive-blue)

## ✨ Fitur Utama

- 📝 **Edit Lengkap** - Judul, tanggal, dan konten terperinci
- 🎵 **Audio Support** - Upload file atau embed URL audio
- 📱 **Fully Responsive** - Desktop, tablet, dan mobile optimized
- 💾 **Auto-Save** - Data tersimpan di localStorage browser
- 🎨 **Neon Design** - Dark mode dengan animasi partikel
- 🔒 **Privacy First** - Semua data di browser, tanpa server
- ⚡ **Offline Ready** - Bekerja tanpa internet setelah load

## 🚀 Quick Start

### Opsi 1: Buka File Direct (Paling Mudah)
```bash
1. Download file: diary-standalone.html
2. Double-click untuk buka di browser
3. Langsung bisa dipakai!
```

### Opsi 2: Buka di GitHub
```
https://USERNAME.github.io/diary-web/diary-standalone.html
```

### Opsi 3: Setup Lokal
```bash
git clone https://github.com/USERNAME/diary-web.git
cd diary-web
# Buka index.html atau diary-standalone.html di browser
```

## 📖 Cara Pakai

1. **Buat Entry Baru** - Klik "+ Halaman Baru"
2. **Isi Data** - Judul, tanggal, cerita
3. **Tambah Audio** - Upload file atau paste URL
4. **Simpan** - Klik "Simpan" untuk menyimpan
5. **Delete** - Klik "Hapus Halaman" untuk hapus

## 📁 File Structure

```
diary-web/
├── diary-standalone.html    ← Rekomendasi (all-in-one)
├── index.html              ← Alternatif with external files
├── css/styles.css
├── js/app.js
├── README.md               ← File ini
├── PANDUAN.md              ← Panduan Bahasa Indonesia
├── MOBILE_GUIDE.md         ← Mobile optimization tips
└── GITHUB_HOSTING.md       ← Cara host di GitHub Pages
```

## 💻 Browser Support

| Browser | Status |
|---------|--------|
| Chrome  | ✅ |
| Firefox | ✅ |
| Safari  | ✅ |
| Edge    | ✅ |
| Opera   | ✅ |

## 📱 Mobile Features

✅ Touch-friendly buttons (44x44px minimum)  
✅ Auto-responsive layout  
✅ Hamburger menu di mobile  
✅ Optimized textarea height  
✅ Mobile-safe audio player  

**Add to Home Screen:**
- Android Chrome: Share > "Add to Home Screen"
- iOS Safari: Share > "Add to Home Screen"

## 💾 Data Storage

- **localStorage** - Simpan hingga 5-10MB per domain
- **Persistent** - Data tetap setelah browser ditutup
- **Automatic** - Setiap klik "Simpan" auto-save
- **Private** - Hanya di browser Anda, no cloud sync

## 🔐 Privacy & Security

✅ No account required  
✅ No data sent to server  
✅ No tracking or analytics  
✅ All processing local  
✅ Works offline  

## 🎵 Audio Support

### Cara 1: Upload File
1. Klik tombol upload (📁)
2. Pilih file audio dari device
3. Audio akan auto-load sebagai data URL

### Cara 2: Paste URL
1. Masukkan URL audio di input field
2. URL dapat berupa: MP3, WAV, OGG
3. Contoh: link dari Spotify, YouTube, dll

## 🚀 Hosting di GitHub Pages

**Lihat file `GITHUB_HOSTING.md` untuk panduan lengkap!**

Quick steps:
```bash
1. Create GitHub repo
2. git add .
3. git commit -m "Initial commit"
4. git push
5. Enable GitHub Pages di Settings
6. Akses di: USERNAME.github.io/diary-web/
```

## 🎨 Customization

Edit file untuk customize:

```html
<!-- Ubah judul di antarmuka -->
<h1 class="neon-title">HAI KAMU...</h1>

<!-- Ubah warna tema di CSS -->
:root{
  --accent: #00e5ff;
  --accent2: #ff00d0;
}
```

## 🆘 Troubleshooting

**Data tidak tersimpan?**
→ Check if localStorage enabled  
→ Try different browser  
→ Clear cache and reload  

**Audio tidak play?**
→ Check file format (MP3/WAV/OGG)  
→ Verify URL adalah public  
→ Try different audio file  

**Mobile layout pecah?**
→ Zoom to 100%  
→ Refresh browser (Ctrl+R)  
→ Update browser to latest version  

## 📚 Documentation

- **README.md** - File ini (overview)
- **PANDUAN.md** - Panduan lengkap Bahasa Indonesia
- **MOBILE_GUIDE.md** - Tips mobile optimization
- **GITHUB_HOSTING.md** - Cara host di GitHub Pages

## 🎯 Technical Details

**Frontend:** HTML5, CSS3, JavaScript (Vanilla)  
**Storage:** Browser localStorage  
**Animation:** Canvas particle system  
**Size:** ~50KB single file  
**Performance:** Lightweight, no dependencies  

## 📝 Catatan Teknis

- Data disimpan di key `diaryEntries_v1` di localStorage
- Audio file di-convert ke data URL saat upload
- Maximum storage ~5MB per browser/domain
- Untuk audio besar, gunakan external URL

## 🤝 Contributing

Feel free untuk:
- 🐛 Report bugs
- 💡 Suggest features
- 🔀 Submit pull requests
- 📝 Improve documentation

## 🚀 Future Features

Planned enhancements:
- [ ] Export entries as PDF
- [ ] Search functionality
- [ ] Tags & Categories
- [ ] Cloud sync option
- [ ] Dark theme selector
- [ ] Image support

## 📄 License

Free to use, modify, and distribute!

## 💡 Tips & Tricks

**Backup Data:**
- Screenshot important entries
- Use browser's export feature
- Keep multiple copies

**Better Experience:**
- Bookmark aplikasi di home screen
- Keep browser updated
- Clear cache monthly

**Audio Tips:**
- Use MP3 format untuk compatibility
- Test URL accessibility dulu
- Embed public audio links saja

## 📞 Support

Having issues?
1. Check console (F12) untuk error
2. Lihat troubleshooting section
3. Check browser compatibility
4. Try different browser

## 🎉 Quick Menu

- 🚀 **Start Now**: Buka `diary-standalone.html`
- 📱 **Mobile Setup**: Lihat `MOBILE_GUIDE.md`
- 🌐 **GitHub Hosting**: Lihat `GITHUB_HOSTING.md`
- 📖 **Full Panduan**: Lihat `PANDUAN.md`

---

**Made with ❤️ for personal journaling**

**Version:** 2.0.0  
**Last Updated:** February 2026  
**Status:** Active & Maintained ✅

Happy writing! 📔✨
