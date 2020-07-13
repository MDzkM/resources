---
id: installation
title: Instalasi
sidebar_label: Instalasi
---

## Instalasi Python

Pada dasarnya, pemrograman dengan menggunakan Python membutuhkan setidaknya 2 komponen utama:

1. Kode sumber (*source code*) Python beserta *shell* dan *interpreter* yang berfungsi sebagai "tulang belakang" dari Python itu sendiri.
2. *Integrated Development Environment* (IDE) yang berfungsi sebagai tempat program yang dibuat dengan Python dibuat dan dikembangkan.

Instalasi dasar Python yang dapat diunduh dari situs resminya sudah terpaketkan dengan kode sumber Python, *shell*, *interpreter*, beserta IDE yang diberi nama "*Integrated Development and Learning Environment*" (IDLE) yang dirancangkan sebagai IDE yang ramah terhadap pembelajaran.

:::important
Perlu diketahui bahwa saat ini terdapat dua cabang utama versi Python yakni:

1. **Python 2.x** yang merupakan versi *legacy* dari Python dan saat ini dikelola sebagai perpanjangan masa guna program yang dirancang sebelum Python 3.x dirilis akibat adanya perbedaan mendasar antara Python 2.x dan 3.x.
2. **Python 3.x** yang merupakan versi terkini dari Python dan versi yang direkomendasikan untuk program yang dirancang saat ini. Akibat adanya perbedaan mendasar di antara kedua versi, Python 3.x kemungkinan besar tidak dapat menjalankan program Python 2.x dan sebaliknya dengan baik.

Untuk keperluan standar, versi Python di atas 3.5 sudah memenuhi syarat dalam mengikuti pembelajaran pemrograman yang ada saat ini (termasuk perkuliahan di Fasilkom UI). Namun, sebagai tindak pencegahan, usahakan untuk menggunakan versi Python terbaru (melihat lingkungan pemrograman yang ditempati).
:::

### Instalasi Python untuk Windows

1. Cek terlebih dahulu *bit* dari *processor* dan sistem operasi yang digunakan (32-bit atau 64-bit).

2. Pada [laman pengunduhan Python ini](https://www.python.org/downloads/release/python-374/), *scroll* hingga bagian **Files** lalu pilih **Windows executable installer** yang sesuai dengan sistem yang digunakan (x86 untuk 32-bit atau x86-64 untuk 64-bit).

3. Jalankan instalasi Python yang sudah diunduh sebelumnya.

4. Centang opsi "Add Python 3.7 to PATH" agar Python nantinya dapat dijalankan dengan mudah melalui Command Prompt/PowerShell dan dapat digunakan bersama IDE lain yang akan datang.

5. Pilih "Install Now" untuk memulai instalasi untuk satu pengguna.

6. Saat instalasi selesai, pilihlah untuk "Disable Path Length Limit" sebagai tindak pencegahan. Langkah ini akan membantu Python dalam menggunakan direktori yang lebih panjang dari batasan yang dimiliki oleh Windows.

7. Pastikan bahwa IDLE (Python 3.7 xx-bit) sudah muncul di daftar program dan kata kunci <code>python</code> dapat memanggil versi Python yang dipasang sebelumnya melalui Command Prompt atau PowerShell.

### Instalasi Python untuk macOS

:::note
Beberapa program yang dirancang untuk macOS bergantung pada versi Python 2.x sehingga macOS membawa versi Python 2.x secara *default*. Akibatnya, kata kunci <code>python</code> pada Bash atau terminal lainnya akan memanggil Python 2.x tersebut. Untuk memanggil Python 3.x, kata kunci <code>python3</code> dapat digunakan.
:::

1. Pada [laman pengunduhan Python ini](https://www.python.org/downloads/release/python-374/), pilih tulisan "macOS 64-bit/32-bit installer" pada bagian Files.
2. Jalankan instalasi Python yang sudah diunduh sebelumnya. 
3. Tekan tombol "Continue" atau "Lanjutkan" pada laman Introduction, Read Me, License, dan Destination Select (tekan "Agree" bila ada).
4. Tekan tombol "Install" untuk melakukan instalasi standar (masukkan password pengguna macOS apabila diminta). Tanda centang dengan latar hijau menandakan selesainya instalasi Python.
5. Untuk alasan keamanan, tekan tombol "Install Certificates" bila diminta.
6. Pastikan IDLE dan Python Launcher sudah muncul pada Launchpad (tekan F4 untuk mengakses Launchpad) dan kata kunci <code>python3</code> dapat memanggil Python 3.x pada Bash atau terminal lainnya.

### Instalasi Python untuk Linux

Bahasa pemrograman dasar yang digunakan oleh Linux adalah Python dan umumnya distribusi Linux sudah membawa versi Python 3.x secara *default*. Hal ini dapat dicek dengan kata kunci <code>python</code> pada Bash atau terminal lainnya. Apabila versi yang ditunjukkan bukan 3.x, silakan gunakan *package manager* bawaan distribusi masing-masing untuk memasang <code>python3</code>. Apabila IDLE belum terpasang, gunakan langkah yang sama untuk memasang <code>idle3</code>.

## Mengenal IDLE dan Shell

Ketika IDLE dijalankan atau ketika Python dijalankan melalui CMD/PowerShell/Terminal, kamu akan disambut dengan Python 3.x Shell. Shell ini berfungsi sebagai antarmuka antara pengguna dengan program. Di sini, kamu dapat menulis satu blok program yang akan dijalankan langsung oleh Python. Hal ini dapat digunakan untuk mempelajari cara kerja Python dan mencoba-coba beberapa ekspresi dalam Python.

**Your first program!**

Pernah mendengar kata-kata "Hello World" sebelumnya? Yuk, coba untuk mencetak kalimat tersebut sebagai program pertama kamu di Python dengan mengetikkan ekspresi berikut di Shell (di samping tanda ">>>"):

~~~python
print("Hello World!")
~~~

Python akan "mencetak" kalimat Hello World! tanpa tanda kutip setelah kamu menekan <code>Enter</code>.

:::note
Saat menggunakan Shell, kamu hanya dapat menjalankan ekspresi program satu per satu. Sehingga, kamu akan kesulitan untuk membuat suatu program dengan rangkaian ekspresi yang panjang di Shell. (Cara untuk merangkai ekspresi panjang menjadi sebuah program akan dipelajari di materi Struktur Kendali). Namun, dampak dari ekspresi yang kamu jalankan sebelumnya masih dapat kamu rasakan sampai kamu menutup Shell.
:::

Cobalah untuk melakukan ekspresi berikut untuk memberikan nilai terhadap suatu variabel:

~~~python
euler_number = 2.718
~~~

Kemudian, panggil variabel tersebut:

~~~python
euler_number
~~~

Python akan menunjukkan bahwa nilai <code>euler_number</code> adalah 2.718.