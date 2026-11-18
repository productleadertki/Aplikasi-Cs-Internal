# Closepay CS Internal

Prototipe dashboard, inbox agent, simulasi chat pelanggan, dan laporan layanan omnichannel.

## Jalankan lokal

Buka `index.html` di browser. Data percakapan dan lampiran tersimpan di penyimpanan browser lokal.

## Fitur omnichannel

- **Pengaturan Inbox:** jam operasional per hari dan zona waktu, rentang hari libur, tiga jenis balasan otomatis, metode routing Manual/Round Robin/Least Active, kapasitas agen, target FRT dan resolusi.
- **Inbox:** antrean FIFO saat jam kerja, re-open ke agen lama jika tersedia, jeda SLA saat Pending, survei otomatis atau manual setelah Resolve. Pilih peran simulasi Admin/Supervisor/Agent di kanan atas.
- **Survei:** CSAT 1–5, CES 1–7, NPS 0–10 per kanal. Survei tidak dijawab berstatus expired setelah batas waktu; hanya respons terisi masuk skor. Report menampilkan response rate, CSAT, CES, NPS, komentar, dan rincian skor.
- **General Report:** filter tanggal, zona waktu, kanal, divisi, agen; SLA, status percakapan, durasi agen, MAU bulanan unik, tag, volume per jam/hari, tabel audit, ekspor CSV dan XLSX.

Aturan routing, SLA, survei, dan ekspor XLSX ada di `engine.js` serta `xlsx.js`. Uji dengan `node tests/engine.test.js` dan `node tests/xlsx.test.js`.

Ini simulasi lokal. Agar pesan lintas perangkat, survei otomatis terjadwal, autentikasi peran, dan audit terpusat berjalan di produksi, diperlukan backend, database, dan integrasi kanal. Pemilihan peran di UI hanya untuk demonstrasi.

## Versi live

[Buka versi live](https://closepay-cs-internal-2026.nur-wahyudi939657.chatgpt.site) (akses pemilik).

## Isi repository

- `index.html`, `app.js`, `engine.js`, `xlsx.js`, `style.css`: sumber aplikasi.
- `hosting/`: salinan sumber dan manifest versi live.
- `closepay-live.tar.gz`: arsip deployment versi live.
- `todo.md`, `log.md`: checklist dan riwayat pekerjaan.

Folder `tasks/` tidak di-commit sesuai aturan proyek.
