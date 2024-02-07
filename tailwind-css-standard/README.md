# tailwind-css-standard

Folder ini berisi implementasi dasar pada Tailwind CSS. Berikut adalah daftar contoh yang telah dibuat.

| **Nama File**     | **Deskripsi**                                   |
| ----------------- | ----------------------------------------------- |
| `index.html`      | Contoh penggunaan spacing, typography dan warna |
| `form.html`       | Contoh penggunaan pseudo class                  |
| `dark.html`       | Contoh penggunaan fitur dark mode               |
| `directive.html`  | Contoh penggunaan directive                     |
| `responsive.html` | Contoh penggunaan responsive design             |

## Cara Penggunaan

1. Install dependensi.

```sh
npm install
```

2. Jalankan command berikut untuk melakukan build CSS.

```sh
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

3. Kemudian buka aplikasi dengan menggunakan [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

4. Untuk memilih halaman, tulis dengan format berikut. (jika menggunakan Live Server).

```
http://127.0.0.1:5500/src/nama_halaman
```

Contoh untuk mengakses halaman `dark.html`.

```
http://127.0.0.1:5500/src/dark.html
```
