# 🚀 Cara Host Website di GitHub Pages

## ✅ Keuntungan GitHub Pages

- ✅ **Gratis selamanya** - tanpa biaya hosting
- ✅ **Custom domain** - bisa pakai domain sendiri
- ✅ **HTTPS otomatis** - lebih aman
- ✅ **Easy deployment** - tinggal push ke GitHub
- ✅ **Unlimited bandwidth** - akses dari mana saja
- ✅ **Reliable uptime** - di-host oleh GitHub

---

## 📋 Persyaratan

Sebelum mulai, pastikan Anda punya:
- ✅ Akun GitHub (gratis) - [https://github.com/signup](https://github.com/signup)
- ✅ Git terinstall di komputer - [https://git-scm.com/download/win](https://git-scm.com/download/win)
- ✅ File website (sudah Anda punya!) ✨

---

## 🎯 Step-by-Step Tutorial

### **STEP 1: Buat Repository di GitHub**

1. Login ke [github.com](https://github.com)
2. Klik **"+"** (atas kanan) → **"New repository"**
3. Isi informasi:
   - **Repository name**: `diary-web` (atau nama lain)
   - **Description**: "Aplikasi Diary Web Mobile-Friendly" (opsional)
   - **Public** ✓ (pilih ini agar bisa diakses publik)
   - **Add a README.md** (opsional)
4. Klik **"Create repository"**

✅ Repository berhasil dibuat!

---

### **STEP 2: Setup Git di Komputer**

Buka **PowerShell** atau **Command Prompt** di folder project:

```powershell
# Navigate ke folder project
cd "d:\DIARY WEB"

# Inisialisasi git repo lokal
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit: Diary Web app with mobile support"
```

---

### **STEP 3: Hubungkan ke Repository GitHub**

Copy 3 command ini dari halaman repository GitHub, lalu jalankan:

```powershell
# Ganti USERNAME dengan username GitHub Anda
# Ganti REPOSITORY dengan nama repo Anda

git remote add origin https://github.com/USERNAME/diary-web.git
git branch -M main
git push -u origin main
```

**Contoh (jika username: "thomasss" dan repo: "diary-web"):**
```powershell
git remote add origin https://github.com/thomasss/diary-web.git
git branch -M main
git push -u origin main
```

> **Catatan**: Masukkan GitHub username dan personal access token jika diminta

---

### **STEP 4: Aktifkan GitHub Pages**

1. Buka repository di GitHub
2. Klik **"Settings"** (tab atas)
3. Klik **"Pages"** (menu kiri)
4. Di bagian **"Source"**:
   - Branch: pilih **`main`**
   - Folder: pilih **`/ (root)`**
5. Klik **"Save"**

Tunggu 1-2 menit untuk deploy...

✅ Website Anda sekarang live di:
```
https://USERNAME.github.io/diary-web/
```

---

## 📱 Akses Website

Setelah deploy, akses application di:

### **Di Desktop:**
```
https://USERNAME.github.io/diary-web/diary-standalone.html
```

### **Di Mobile:**
1. Buka URL di atas di browser HP
2. Atau add to home screen:
   - Chrome: Share > "Add to Home Screen"
   - Safari: Share > "Add to Home Screen"

---

## 🔄 Update Website (Setiap Kali Ada Perubahan)

Setelah edit file di komputer:

```powershell
# Navigate ke folder project
cd "d:\DIARY WEB"

# Tambahkan file yang berubah
git add .

# Commit dengan pesan
git commit -m "Update: [deskripsi perubahan]"

# Push ke GitHub
git push
```

Contoh:
```powershell
git add .
git commit -m "Fix: Mobile responsiveness pada sidebar"
git push
```

Website akan auto-update dalam 1-2 menit! 🚀

---

## 🎨 Opsional: Custom Domain

Jika mau pakai domain sendiri (misal: `diary.com`):

1. Beli domain di:
   - Namecheap
   - GoDaddy
   - atau provider lain

2. Di GitHub Settings > Pages:
   - Masukkan custom domain Anda
   - GitHub akan generate CNAME file otomatis

3. Di domain provider, setup DNS records:
   - Type: A
   - Name: @
   - Value: Lihat GitHub Pages docs untuk IP terbaru

> **Detail lebih lanjut**: [GitHub Custom Domain Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## ✅ Checklist Setup Selesai

- [ ] Akun GitHub dibuat
- [ ] Repository dibuat
- [ ] Git siap di komputer
- [ ] Files di-push ke GitHub
- [ ] GitHub Pages diaktifkan
- [ ] Website live di `USERNAME.github.io/diary-web/`
- [ ] Bisa diakses dari HP

---

## 🆘 Troubleshooting

### **"fatal: Could not read from remote repository"**
→ Periksa username/password GitHub  
→ Buat Personal Access Token: Settings > Developer settings > Personal access tokens  
→ Gunakan token sebagai password saat diminta

### **"Website diarahkan ke 404"**
→ Pastikan file `diary-standalone.html` ada di root folder  
→ Atau ubah source git branch ke `main` di Settings > Pages

### **Perubahan tidak ter-update di website**
→ Clear browser cache (Ctrl+Shift+Delete)  
→ Tunggu 1-2 menit lebih lama  
→ Cek console (F12) untuk error

### **SSL Certificate error**
→ Tunggu beberapa menit setelah enable HTTPS  
→ GitHub auto-generate HTTPS dalam 1-2 jam

---

## 📊 File Structure di GitHub

Repository Anda akan terlihat seperti ini:

```
diary-web/
├── diary-standalone.html    ← File utama
├── index.html              ← File alternatif
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── server.js               ← Server lokal (optional)
├── README.md               ← Dokumentasi
├── PANDUAN.md              ← Panduan penggunaan
└── MOBILE_GUIDE.md         ← Panduan mobile
```

---

## 🚀 Bonus: Push Pertama (Automated)

Jika belum setup, buat file `.gitignore` untuk skip file tertentu:

```powershell
# Buat file .gitignore
@"
node_modules/
.DS_Store
*.log
> .gitignore
```

---

## 💾 Backup & Version Control

Dengan GitHub, Anda juga punya:
- ✅ **History lengkap** - lihat semua perubahan
- ✅ **Backup otomatis** - data aman di cloud
- ✅ **Collaboration** - bisa invite contributor
- ✅ **Rollback** - kembalikan ke versi lama jika perlu

---

## 📚 Resources Tambahan

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Command Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub Desktop GUI](https://desktop.github.com/) - Alternative to command line

---

## 🎉 Selesai!

Website Anda sekarang:
- ✅ Hosted di GitHub Pages
- ✅ Accessible 24/7 dari mana saja
- ✅ HTTPS protected
- ✅ Mobile friendly
- ✅ Easy to update

**Share link website Anda:**
```
https://USERNAME.github.io/diary-web/diary-standalone.html
```

**Happy hosting! 🚀📔**
