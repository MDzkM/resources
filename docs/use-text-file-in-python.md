---
id: use-text-file-in-python
title: Use Text File in Python
sidebar_label: Use Text File in Python
---

Sama seperti program pada umumnya, kamu perlu membuka suatu berkas agar dapat digunakan atau dimodifikasi lebih lanjut. Pembukaan berkas ini dilakukan dengan metode <code>open()</code> yang akan menghasilkan suatu objek berkas yang merujuk ke berkas yang diminta. Objek inilah yang akan menjadi jembatan antara program dengan berkas tersebut.

Cara menggunakan metode <code>open()</code> adalah sebagai berikut:

~~~python
open("direktori","mode")
~~~

1. Direktori diisi oleh alamat yang merujuk kepada berkas yang dituju. Alamat yang digunakan dapat berupa direktori relatif atau mutlak (disesuaikan dengan kebutuhan). Contoh:

   ~~~python
   # Direktori mutlak
   "C:/Users/Programmer/Documents/pmbasik.txt"
   
   # Direktori relatif (di folder yang sama dengan berkas program)
   "pmbasik.txt"
   
   # Direktori relatif (di child folder dari tempat berkas program)
   "Documents\pmbasik.txt"
   ~~~

2. Mode diisi oleh perlakuan yang ingin kita kenakan pada berkas tersebut. Setiap perlakuan memiliki kode, implementasi, dan konsekuensinya masing-masing. Jika Mode diabaikan, maka perilaku *default*-nya adalah *Read*. Mode-mode yang bisa digunakan adalah sebagai berikut:

   | Mode | Perlakuan                     | Keterangan                                                   |
   | ---- | ----------------------------- | ------------------------------------------------------------ |
   | "r"  | *Read*                        | Berkas hanya dapat dibaca. Gagal jika berkas tidak ditemukan. |
   | "w"  | *Write*                       | Berkas hanya dapat ditulis dan apapun yang sudah ada di berkas tersebut akan dihapus. Jika berkas tidak ditemukan, maka Python akan membuatkan berkasnya. |
   | "x"  | *Exclusive Creation*          | Berkas akan dibuatkan oleh Python dan hanya dapat ditulis. Gagal jika berkas sudah ada. |
   | "a"  | *Append*                      | Berkas hanya dapat ditulis di ujung belakang berkas (tidak mengubah yang sudah ada). Berkas tidak dapat dibaca. |
   | "r+" | *Read with Write Capability*  | Mirip dengan "r" namun kontennya bisa dimodifikasi. Gagal jika berkas tidak ditemukan. |
   | "w+" | *Write with Read Capability*  | Mirip dengan "w" namun apapun yang sudah ditulis bisa dibaca kembali. |
   | "a+" | *Append with Read Capability* | Mirip dengan "a" namun berkas dapat dibaca pula.             |

   Mode-mode di atas mengasumsikan bahwa berkas yang dibuka adalah berkas teks. Maka, Python akan melakukan *decoding* yang sesuai dengan berkas teks (umumnya dengan Unicode). Jika berkas akan dibuka secara mentah, maka tambahkan setiap mode di atas dengan <code>b</code>, misalnya <code>"rb"</code> atau <code>"w+b"</code>.

Perlu dicatat bahwa untuk menggunakan berkas teks tersebut, hasil dari <code>open()</code> ini perlu diberikan ke suatu variabel. Contoh penggunaannya adalah sebagai berikut:

~~~python
list_nilai = open("list_nilai.txt")
daftar_kenalan = open("daftar_kenalan.txt", "r+")
jadwal_kuliah = open("IRS/fixbanget.txt")
lagu_favorit = open("C:/Users/Programmer/Musics/daftar.txt","a+")
~~~

Berkas yang sudah dibuka juga sebaiknya ditutup kembali untuk mencegah adanya modifikasi yang tidak masuk ke berkas atau pemborosan sumber daya sistem. Biasanya, Python akan secara otomatis menutup berkas yang kamu buka. Namun, karena penutupan otomatis ini dapat terjadi di waktu-waktu berbeda, sebaiknya kamu melakukan penutupan secara manual setelah berkas selesai digunakan. Penutupan dapat dilakukan dengan cara:

~~~python
list_nilai = open("list_nilai.txt")
list_nilai.close()
~~~

## Membaca Berkas Teks

> Hanya berlaku untuk mode **"r", "r+", "w+", dan "a+"**.

Untuk berkas teks, Python menyediakan beberapa cara mudah untuk membacanya. Semua hasil dari cara-cara pembacaan ini akan menghasilkan data dengan tipe String yang dapat digunakan lebih lanjut. Namun, data yang dihasilkan oleh cara ini nantinya tidak memiliki kaitan dengan berkas aslinya dan modifikasi apapun baik terhadap berkas maupun String-nya tidak akan mengubah konten lawannya.

1. <code>read(jumlah_karakter)</code>

   Membaca sejumlah karakter yang dispesifikasikan di <code>jumlah_karakter</code> (*default*-nya adalah semua karakter) dari berkas. Pembacaan akan berhenti jika jumlah karakter sudah terpenuhi atau bertemu dengan **EOF (*end-of-file*)**.

   Contoh berkas (<code>lorem_ipsum.txt</code>):

   ~~~
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
   Morbi vel mauris vitae sapien pulvinar cursus. 
   Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
   ~~~

   Contoh penggunaan:

   ~~~python
   sample_file = open("lorem_ipsum.txt")
   sample_text = sample_file.read()
   sample_file.close()
   print(sample_text)
   ~~~

   Hasil:

   ~~~
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
   Morbi vel mauris vitae sapien pulvinar cursus. 
   Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
   ~~~

   Latihan:

   Cobalah untuk mengambil keseluruhan, 10 karakter pertama, dan 25 karakter pertama dari sebuah teks pilihan kamu.

2. <code>readline(jumlah_karakter)</code>

   Membaca sejumlah karakter yang dispesifikasikan di <code>jumlah_karakter</code> (*default*-nya adalah semua karakter **dalam suatu baris**) dari berkas. Pembacaan akan berhenti jika jumlah karakter sudah terpenuhi atau bertemu dengan **EOL (*end-of-line*)** atau **EOF (*end-of-file*)**. Perlu dicatat bahwa karakter EOL-nya juga akan masuk ke String yang dihasilkan (akan dibahas selanjutnya) sehingga apabila dicetak akan muncul Enter. 

   Contoh berkas (<code>lorem_ipsum.txt</code>):

   ```
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
   Morbi vel mauris vitae sapien pulvinar cursus. 
   Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
   ```

   Contoh penggunaan:

   ```python
   sample_file = open("lorem_ipsum.txt")
   sample_text = sample_file.readline()
   sample_file.close()
   print(sample_text)
   ```

   Hasil:

   ```
   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   
   ```

3. <code>readlines(hint_jumlah)</code>

   Berbeda dengan <code>read()</code> dan <code>readline()</code> yang mengembalikan hasilnya dalam bentuk String, <code>readlines()</code> mengembalikan hasilnya dalam bentuk List yang berelemen String. Masing-masing elemen tersebut adalah baris yang dibaca. <code>hint_jumlah</code> (*default*-nya adalah semua karakter) digunakan untuk memberi petunjuk ke Python di mana pembacaan harus dihentikan. Python tidak akan mengambil baris baru jika jumlah karakter yang sudah terkumpul sudah mencapai atau melebihi <code>hint_jumlah</code>. Jika tidak diberikan petunjuk, Python akan membaca teks sampai **EOF**.

   Contoh berkas (<code>lorem_ipsum_lite.txt</code>):

   ```
   Lorem
   ipsum
   dolor
   sit
   amet.
   ```

   Contoh penggunaan:

   ```python
   sample_file = open("lorem_ipsum_lite.txt")
   sample_text = sample_file.readlines()
   sample_file.close()
   print(sample_text)
   ```

   Hasil:

   ~~~
   ["Lorem\n","ipsum\n","dolor\n","sit\n","amet."]
   ~~~

Setiap kamu melakukan pembacaan, akan ada kursor yang bertindak sebagai penanda posisi saat ini pada berkas. Misalnya, jika kamu melakukan pembacaan sebanyak 10 karakter, berarti kursor tersebut akan bergerak sejauh 10 karakter pula. Ketika kamu melakukan pembacaan kembali, pembacaan akan dimulai dari posisi terakhir kursor tersebut, bukan dari posisi awal. 

Contoh berkas (<code>lorem_ipsum.txt</code>)::

~~~
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Morbi vel mauris vitae sapien pulvinar cursus. 
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
~~~

Contoh penggunaan:

```python
sample_file = open("lorem_ipsum.txt")
print(sample_file.read(5),sample_file.read(5),sep="\n")
sample_file.close()
```

Hasil:

~~~
Lorem
 ipsu
~~~

## EOL (*End-of-Line*)

Ketika kamu menekan Enter untuk membuat baris baru, komputer sebenarnya akan menyisipkan suatu karakter kontrol yang dinamakan EOL (*end-of-line*) untuk menandakan perpindahan baris tersebut. Meskipun karakter tersebut tidak terlihat pada penggunaan biasa dan ketika String yang mengandung karakter tersebut dicetak, terkadang kamu akan bertemu dengan <code>\n</code>, misalnya ketika kamu mencetak List dari String yang mengandung karakter EOL. <code>\n</code> ini merupakan salah satu implementasi dari karakter EOL ini.

Di antara tiga keluarga sistem operasi yang digunakan pada modul ini (Windows, macOS, dan Linux), ada dua jenis implementasi dari EOL. Keduanya merupakan turunan dari prinsip-prinsip yang diterapkan pada mesin ketik (*typewriter*) ketika akan membuat baris baru pada teks:

1. ***Carriage Return + Line Feed* (CRLF)**: Implementasi ini digunakan oleh keluarga sistem operasi Windows dan menganut prinsip bahwa ketika baris baru dibuat, maka posisi pengetik harus dikembalikan ke posisi kiri untuk teks *left-to-right* atau kanan untuk teks *right-to-left* (*carriage return*) kemudian kertas digeser ke bawah untuk baris selanjutnya (*line feed*). Karakter EOL yang digunakan adalah <code>\r\n</code>.
2. ***Line Feed* (LF)**: Implementasi ini digunakan oleh keluarga sistem operasi Unix-based (termasuk macOS dan Linux) yang hanya menggunakan prinsip bahwa kertas digeser ke bawah untuk baris selanjutnya (*line feed*). Karakter EOL yang digunakan adalah <code>\n</code>.

Pada Python 3.x, berkas teks yang masuk ke program tidak perlu menyesuaikan dengan sistem operasi yang menjalankannya. Hal ini dimungkinan dengan fitur *Universal Newline* yang digunakan secara otomatis oleh Python 3.x. Dengan fitur ini, berkas yang mengandung EOL CRLF akan diterjemahkan menjadi LF secara internal (berkas asli tidak berubah). Beberapa aplikasi pembantu kolaborasi dan komunikasi di bidang pemrograman juga menyediakan fitur untuk mengakomodasi perbedaan implementasi EOL ini. Misalnya, Git dapat dikonfigurasi sehingga berkas yang diunggah akan secara otomatis diterjemahkan menjadi LF meskipun berkas lokalnya tetap menggunakan CRLF.

## Manipulasi Kursor Pembaca

Selain menggunakan metode-metode pembacaan, kamu dapat memanipulasi posisi dari kursor tersebut tanpa harus membaca. Sederhananya, kursor ini dapat diperintahkan untuk maju atau mundur dalam berkas teks tersebut. Manipulasi posisi kursor ini dapat dicapai dengan menggunakan metode <code>seek()</code> seperti berikut ini:

~~~
file.seek(offset)
~~~

Pada penggunaan fungsi di atas, argumen <code>offset</code> merupakan jarak yang kita hendaki untuk ditempuh oleh kursor tersebut. Secara *default*, <code>offset</code> ini diukur relatif terhadap awal dari teks. Sehingga, meskipun kamu sekarang ada posisi paling belakang, *seek* dengan *offset* 5, misalnya, akan tetap memindahkan kursor menuju karakter kelima dari teks tersebut.

Apabila kamu ingin mengetahui posisi terkini dari kursor pembaca teks, Python menyediakan metode <code>tell()</code> yang akan mengembalikan posisi dari kursor tersebut relatif terhadap awal dari teks. Metode tersebut dapat digunakan seperti berikut ini:

~~~
file.tell()
~~~

## Menulis ke Berkas Teks

> Hanya berlaku untuk mode **"w", "a", "r+", "w+", dan "a+"**.