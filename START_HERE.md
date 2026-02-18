# 🚀 GitHub Hosting - Quick Start (5 Menit)

## ✅ Persyaratan

- Akun GitHub (buat gratis di https://github.com)
- Git installed (buat di https://git-scm.com/download/win)

---

## 🎯 5 Langkah Setup (5 Menit)

### STEP 1: Buat Repository (1 menit)
```bash
1. Buka https://github.com/new
2. Nama repo: "diary-web"
3. Pilih "Public"
4. Klik "Create repository"
```

### STEP 2: Setup Git (2 menit)
```powershell
# Buka PowerShell di folder: d:\DIARY WEB

cd "d:\DIARY WEB"
git init
git add .
git commit -m "Initial commit: Diary Web app"
```

### STEP 3: Push ke GitHub (1 menit)
```powershell
# Ganti USERNAME dengan username GitHub Anda

git remote add origin https://github.com/USERNAME/diary-web.git
git branch -M main
git push -u origin main
```
> Masukkan username & personal access token jika diminta

### STEP 4: Aktifkan GitHub Pages (1 menit)
```
1. Buka: https://github.com/USERNAME/diary-web/settings
2. Klik "Pages" (menu kiri)
3. Branch: main
4. Folder: / (root)
5. Klik "Save"
```

### STEP 5: Akses Website!
```
https://USERNAME.github.io/diary-web/diary-standalone.html
```

✅ **SELESAI! Website Anda live!** 🎉

---

## 📱 Akses dari HP

Buka URL di browser HP:
```
https://USERNAME.github.io/diary-web/diary-standalone.html
```

Atau add to home screen:
- **Chrome:** Share > "Add to Home Screen"
- **Safari:** Share > "Add to Home Screen"

---

## 🔄 Update Website (Kapan Saja)

Setelah edit file:
```powershell
git add .
git commit -m "Update: [deskripsi perubahan]"
git push
```

Auto-update dalam 1-2 menit! ✨

---

## 🆘 Masalah?

### "Cannot find git command"
→ Install Git di https://git-scm.com/download/win

### "fatal: Could not read from remote repository"
→ Gunakan Personal Access Token:
```powershell
# Di GitHub: Settings > Developer settings > Personal access tokens
# Generate token, copy, dan gunakan sebagai password saat git push
```

### "Website menampilkan 404"
→ Pastikan file ada di root folder  
→ Check di Settings > Pages, branch = main, folder = / (root)

### "Website belum live"
→ Tunggu 1-2 menit setelah push  
→ Refresh browser dengan Ctrl+Shift+R (clear cache)

---

## 📚 Need More Details?

Baca **[GITHUB_HOSTING.md](GITHUB_HOSTING.md)** untuk panduan lengkap dengan:
- Explanation lengkap setiap step
- Custom domain setup
- Troubleshooting advanced
- Best practices

---

## 🎉 Share Your Website!

Setelah live, share link:

```
https://USERNAME.github.io/diary-web/diary-standalone.html
```

**Orang lain bisa akses diary web Anda dari browser, desktop, atau mobile!** 📔✨

---

**That's it! You're all set!** 🚀
