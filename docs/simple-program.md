---
id: simple-program
title: Creating a Simple Program
sidebar_label: Creating a Simple Program
---

Pada materi "Mengenal IDLE dan Shell", kamu sudah diperkenalkan dengan Python Shell sebagai salah satu cara untuk mencoba-coba ekspresi Python. Namun, kamu tidak dapat merangkai suatu program panjang tanpa menjalankannya setiap menyelesaikan suatu blok (biasanya hanya satu baris atau beberapa baris dalam kondisi tertentu). Untuk menyusun rangkaian program tersebut, kamu perlu menuliskannya dalam sebuah berkas, menyimpannya, dan memerintahkan Python untuk menjalankan berkas tersebut.

## Berkas Program Python (<code>.py</code>)

Umumnya, berkas yang menaungi untaian ekspresi-ekspresi yang tergabung menjadi suatu program Python memiliki tipe <code>.py</code>. Berkas ini berfungsi baik sebagai berkas teks di mana program Python ditulis maupun sebagai berkas yang dapat dijalankan sebagai program. Hal ini menjadi mungkin karena proses konversi dari program yang disusun secara *high-level* (mendekati bahasa manusia) menuju bahasa mesin dilakukan secara otomatis oleh *interpreter*. Bahasa pemrograman lain seperti Java atau C++ mengharuskan pemrograman untuk melalui proses konversi tersebut (yang dinamakan proses *compiling*) dan menjalankan berkas hasil konversi tersebut.

Dwifungsi berkas ini memungkinkan pemrograman untuk melakukan proses penyusunan kode Python dengan berbagai macam aplikasi penyunting teks, mulai dari penyunting teks sederhana seperti <code>nano</code> atau <code>vi</code>, sampai ke IDE kompleks seperti PyCharm. IDLE yang dibawa oleh instalasi Python berada di tengah spektrum tersebut, di mana program dibuat lebih sederhana dari IDE namun memiliki integrasi langsung dengan Python sehingga program yang sudah disusun dapat dicoba dengan mudah.

## Membuat Program Python dengan IDLE

Apabila IDLE sudah dijalankan dan memunculkan Shell, kamu dapat meminta IDLE untuk menyediakan sebuah berkas kosong untuk tempat menulis program layaknya kamu membuat berkas baru pada aplikasi penyunting teks. Ada setidaknya dua cara untuk membuat berkas baru tersebut:

1. **Cara GUI**: Pada *status bar* yang terletak di atas, pilih <code>File</code> > <code>New File</code>.
2. **Cara Keyboard**: Gunakan kombinasi <code>Ctrl</code> + <code>N</code> (Windows/Linux) atau <code>Command</code> + <code>N</code> (macOS).

Berkas kosong tersebut dapat diisi program Python dengan jumlah baris tidak terbatas dan Python tidak akan menjalankan apapun yang dibuat pada berkas tersebut kecuali diminta secara eksplisit oleh pengguna. Coba salin program ini secara utuh, dari awal sampai akhir, baik ke Shell maupun ke berkas kosong yang sudah kalian buat. Bandingkan umpan balik yang diberikan oleh IDLE!

~~~python
print("Viva")
print("Viva")
print("Fasilkom")
~~~

Pada Shell, pergantian baris yang ada pada program di atas pada baris pertama dan kedua mengakibatkan baris pertama dan kedua dijalankan secara langsung oleh Python (sama seperti ketika kamu menekan Enter secara manual). Pada berkas kosong tadi, program yang disalin tidak dijalankan karena di sana IDLE bertindak sebagai penyunting teks. Untuk menjalankan program yang ada pada berkas tersebut, kamu harus meminta secara eksplisit kepada IDLE untuk menjalankannya dengan cara:

1. (*best practice*) Simpan terlebih dahulu berkas yang sudah kamu buat di tempat yang mudah dijangkau. Secara *default*, Python akan mengusulkan untuk menyimpan di tempat Python terpasang yang merupakan tempat sulit dijangkau.
2. **Cara GUI**: Pada *status bar* yang terletak di atas, pilih <code>Run</code> > <code>Run Module</code>.
3. **Cara Keyboard**: Gunakan <code>F5</code> atau kombinasi <code>Fn</code> + <code>F5</code>.

Terlepas dari kondisi "tersimpan" dari berkas yang dibuat, IDLE akan mengecek hal tersebut saat akan menjalankan program dan akan memberikan peringatan ketika berkas belum disimpan. Namun, *best practice* di atas akan menyelamatkanmu dari hal-hal tidak terduga (*ekhm BSOD).

Ketika dijalankan, Shell akan menjalankan semua baris dari berkas tersebut secara berurutan dari atas ke bawah sesuai dengan ekspresi yang dituliskan pada berkas tersebut. Selama program tersebut berjalan, kamu tidak dapat mengetikkan ekspresi Python seperti sebelumnya. Fungsi Shell akan kembali seperti semula ketika program sudah selesai dijalankan (baik sempurna maupun tidak).

> **Try it!**
>
> Cobalah untuk membuat suatu program Python di mana terdapat 3 variabel (Nama kamu, alasan kenapa masuk Fasilkom UI, dan ekspektasi kamu dalam mengikuti DDP0). Kemudian, buat perintah untuk mencetak ketiga data tersebut dengan format seperti ini:
>
> ~~~python
> Nama: <nama>
> Alasan masuk Fasilkom UI: <alasan>
> Ekspektasi di DDP0: <ekspektasi>
> ~~~
>
> Jangan lupa untuk menyimpan berkas yang sudah dibuat dan coba dijalankan di IDLE.

## Membuat Program Python dengan Aplikasi Non-IDLE

Karena berkas program Python pada dasarnya merupakan suatu berkas teks yang dapat dijalankan, program Python dapat dirancang dengan berbagai macam aplikasi. Beberapa aplikasi tersebut bahkan menawarkan fitur yang sama atau bahkan lebih dari IDLE itu sendiri, seperti Visual Studio Code, Sublime Text, dan PyCharm. Program Python dapat ditulis seperti biasa pada aplikasi masing-masing dan disimpan sebagai berkas <code>.py</code>. Terlepas dari aplikasi yang digunakan, program Python dapat dijalankan melalui cara umum sebagai berikut:

1. Jalankan Command Prompt/Powershell/Bash/Terminal/aplikasi sejenis

2. Lakukan navigasi ke folder tempat berkas disimpan (bila perlu) dengan menggunakan perintah:

   ~~~
   cd "<alamat>"
   ~~~

   Contoh:

   ~~~shell
   cd "C:\Users\Author\Documents\Coding Repositories\DDP0"
   ~~~

3. Gunakan perintah berikut untuk menjalankan berkas Python secara langsung (tanpa melalui IDLE):

   ~~~
   # Apabila hanya Python 3.x yang terpasang
   python <nama file>.py
   
   # Apabila ada Python 2.x yang terpasang
   python3 <nama file>.py
   ~~~

   Contoh:

   ~~~shell
   python WarshallCalculator.py
   python3 WarshallCalculator.py
   ~~~

4. Python akan diaktifkan sementara dan menjalankan program sampai selesai kemudian menutupnya.

Selain melalui cara di atas, apabila tidak ada program lain yang diasosiasikan sebagai program yang menangani berkas <code>.py</code>, kamu dapat menjalankan berkas tersebut dengan *double-click* layaknya membuka berkas biasa.