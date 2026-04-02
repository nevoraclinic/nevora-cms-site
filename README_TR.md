# Nevora CMS Ready Package

Bu sürümde şunlar çalışır:
- Ana sayfa hero metinleri `content/site-settings.json` içinden okunur.
- İletişim bilgileri `content/site-settings.json` içinden okunur.
- Blog kartları ve blog detay içerikleri `content/blogs.json` içinden okunur.
- `/admin` altında Decap CMS hazırdır.

## Netlify'da yapılacaklar
1. Siteyi GitHub repo'ya bağla.
2. Netlify > Site configuration > Identity bölümünden Identity'yi aç.
3. Registration preference'ı Invite only yap.
4. Services kısmından Git Gateway'i aç.
5. Identity içinden kendi e-posta adresine davet gönder.
6. Site yayınlandıktan sonra `/admin` adresinden giriş yap.

## Not
Bu sürümde site içeriğinin önemli bölümleri artık JSON dosyalarından yükleniyor. Böylece panelde yaptığın değişiklikler siteye yansır.
