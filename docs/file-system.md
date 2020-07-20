---
id: file-system
title: File System
sidebar_label: File System
---

## Pengelolaan Berkas Teks

Untuk menunjang jalannya suatu program, kamu akan sering menemukan situasi di mana kamu membutuhkan data yang dapat disimpan secara jangka panjang (tidak hilang setelah kamu menutup program tersebut) dan terpisah dari berkas Python itu sendiri. Situasi-situasi tersebut di antaranya:

1. Penyimpanan akun pengguna untuk kemudahan masuk selanjutnya
2. Penyimpanan data yang dihasilkan oleh program
3. Penggunaan data eksternal (Teks, CSV, JSON, dan lain-lain)

Maka dari itu, mayoritas bahasa pemrograman (termasuk Python) menyediakan metode-metode yang bisa kamu gunakan untuk mengolah berkas teks sebagai penunjang dari program yang kamu susun. Modul ini ditujukan agar kamu dapat mengolah secara sederhana berkas teks untuk menunjang program kamu.

## Pengenalan Sistem Berkas

Saat menggunakan komputer, kamu mungkin sudah kenal dengan berbagai macam tipe berkas, mulai dari berkas teks (.txt) hingga *Scalable Vector Graphics* (.svg). Setiap berkas tersebut memiliki sufiks yang menandakan tipe dari berkas tersebut agar dapat diketahui oleh program yang menggunakannya. Mungkin kamu juga pernah iseng mencoba untuk mengutak-atik sufiks tersebut (misal: .mp3 diganti menjadi .wav) dan salah satu dari tiga kemungkinan berikut ini terjadi:

1. Berkas dapat dibuka secara normal dengan tipe berkas barunya
2. Berkas dapat dibuka namun diinferensikan dengan tipe berkas lamanya
3. Berkas tidak dapat dibuka sama sekali (*corrupt*)

Kemungkinan ini terjadi karena suatu tipe berkas tidak hanya disimpulkan dari sufiks berkasnya, melainkan juga berdasarkan struktur dari berkas itu sendiri. Jika struktur suatu tipe berkas dengan yang lainnya mirip atau didesain untuk dapat ditukar satu sama lain, kemungkinan pertama akan terjadi. Lain halnya apabila strukturnya beda sama sekali atau tidak didesain untuk ditukar, kemungkinan ketiga akan terjadi. Struktur tersebut didapat dari bagaimana berkas tersebut diterjemahkan dari data yang diinginkan menjadi bahasa yang dapat dimengerti dan disimpan oleh komputer. Proses ini disebut *encoding* dan proses kebalikannya dinamakan *decoding*.

Setiap berkas memiliki cara tersendiri untuk direpresentasikan dan digunakan. Cara ini biasanya hanya diketahui oleh suatu program spesifik yang menggunakan program tersebut. Misalnya, berkas MP4 yang di-*encode* dengan H.265 HEVC hanya dapat dibuka oleh program yang mengetahui cara penerjemahan tersebut. Jika kamu mencoba membukanya dengan program yang tidak mendukung (misalnya IDLE atau Notepad), kamu kemungkinan hanya menerima karakter acak tidak bermakna atau bahkan kosong sama sekali.

Sistem *encoding* dan *decoding* ini juga diterapkan dalam teks. Pada materi Pekan 01 (Pengenalan, Tipe Data, dan Variabel), kamu telah dikenalkan dengan sistem ASCII dan Unicode di mana setiap karakter teks dapat direpresentasikan dengan suatu angka. Karena suatu data dalam komputer pada dasarnya hanya 0 dan 1 (biner), maka representasi angka tersebut (diubah menjadi biner terlebih dahulu) adalah cara komputer menyimpan karakter yang kita buat. Contohnya:

~~~python
"CS UI"
~~~

Dengan menggunakan sistem UTF-8, maka komputer akan menerima data seperti berikut ini untuk merepresentasikan String di atas:

~~~
0100001101010011001000000101010101001001
~~~

Agar lebih jelas pembagiannya, amati susunan berikut ini:

~~~
01000011 | 01010011 | 00100000 | 01010101 | 01001001
~~~

Penjelasan:

1. <code>01000011</code> dalam biner jika dikonversikan ke desimal (angka berbasis 10) menjadi 67. 67 merupakan representasi angka dari "C".
2. <code>01010011</code> dalam biner jika dikonversikan ke desimal menjadi 83. 83 merupakan representasi angka dari "S".
3. <code>00100000</code> dalam biner jika dikonversikan ke desimal menjadi 32. 32 merupakan representasi angka dari " " (spasi).
4. <code>01010101</code> dalam biner jika dikonversikan ke desimal menjadi 85. 85 merupakan representasi angka dari "U".
5. <code>01001001</code> dalam biner jika dikonversikan ke desimal menjadi 73. 73 merupakan representasi angka dari "I".

Sama seperti pada tipe berkas, sistem *encoding* dan *decoding* teks ini juga akan memiliki implementasi yang berbeda. Untuk memudahkan, mayoritas program menggunakan sistem UTF-8 dan turunannya apabila dibutuhkan, seperti UTF-16 yang mencakup lebih banyak karakter. Dengan menggunakan sistem yang tepat, maka program kamu akan membaca teks yang dibuat bukan hanya sebagai untaian 0 dan 1 namun sebagai suatu kumpulan karakter yang dapat dibaca oleh manusia.

>**Further Learning**
>
>Sistem pemberkasan dalam komputer ini akan menjadi topik pada rantai mata kuliah berikut ini:
>
>*Ilmu Komputer*: Pengantar Sistem Digital **&rarr;** Pengantar Organisasi Komputer **&rarr;** Sistem Operasi
>
>*Sistem Informasi*: Dasar-Dasar Arsitektur Komputer **&rarr;** Sistem Operasi