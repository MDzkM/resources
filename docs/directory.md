---
id: directory
title: Directory
sidebar_label: Directory
---

Direktori merupakan suatu cara untuk suatu sistem pemberkasan merepresentasikan suatu berkas atau direktori lainnya. Umumnya, sistem direktori ini diimplementasikan dalam bentuk struktur berjenjang dengan konsep *file folder*. Sistem direktori digunakan untuk mengelola kumpulan berkas sehingga tersusun rapih dan mudah direferensikan baik oleh sistem maupun pengguna.

Layaknya sebuah lemari atau rak dokumen di dunia nyata, sistem direktori ini membantu komputer maupun pengguna untuk menyusun dan mencari berkas-berkas yang disimpan. Dengan tersusunnya berkas dalam sebuah lemari, kita akan mengetahui bahwa untuk mencari berkas tersebut, kita harus membuka lemari yang menyimpannya. Begitu pula apabila berkas tersebut tersimpan dalam suatu lemari lain yang ada di dalam lemari tersebut, kita mengetahui lemari mana saja yang harus dibuka. Konsep "lemari dalam lemari" ini dinamakan *subdirectory* dan melahirkan konsep relasi *parent* dan *child*. Misalnya kita ingin membuka suatu *folder* di *hard disk* kita. Maka:

1. *Parent* adalah direktori yang menaungi *folder* tersebut.
2. *Child* adalah berkas atau direktori yang dinaungi oleh *folder* tersebut.

Pada pelaksanaan sistem pemberkasan ini, sistem operasi dapat memanfaatkan sistem direktori ini untuk menyusun sebuah alamat untuk berkas atau direktori yang dimaksud. Alamat tersebut akan terlihat seperti berikut:

## Windows

~~~
C:\Users\ASUS\eclipse\java-2019-03
~~~

Penjelasan:

1. *Folder* <code>java-2019-03</code> merupakan *child* dari *folder* <code>eclipse</code>. Sebaliknya, *folder* <code>eclipse</code> merupakan *parent* dari *folder* <code>java-2019-03</code>.

2. *Folder* <code>eclipse</code> ternyata juga merupakan *child* dari *folder* <code>ASUS</code>. Seterusnya pun seperti itu hingga kita sampai di <code>C:</code>

3. Jika kita ingin membuka <code>java-2019-03</code>, maka kita perlu mengakses:

   <code>C:</code> **&rarr;** <code>Users</code> **&rarr;** <code>ASUS</code> **&rarr;** <code>eclipse</code> **&rarr;** <code>java-2019-03</code>. 

## macOS atau Linux (Sistem operasi berbasis UNIX)

~~~
/mnt/c/Users/ASUS
~~~

> **Catatan**: Direktori di atas merupakan direktori yang digunakan *Windows Subsystem for Linux* (WSL). Cara di atas bukan cara untuk membuka data pengguna untuk sistem operasi Unix-based.

Penjelasan:

1. *Folder* <code>ASUS</code> merupakan *child* dari *folder* <code>Users</code>. Sebaliknya, *folder* <code>Users</code> merupakan *parent* dari *folder* <code>ASUS</code>.

2. *Folder* <code>Users</code> ternyata juga merupakan *child* dari *folder* <code>c</code>. Seterusnya pun seperti itu hingga kita sampai di <code>/</code>.

3. Jika kita ingin membuka <code>ASUS</code>, maka kita perlu mengakses:

   <code>/</code> **&rarr;** <code>mnt</code> **&rarr;** <code>c</code> **&rarr;** <code>Users</code> **&rarr;** <code>ASUS</code>. 



## Root Directory

*Root Directory* merupakan direktori tertinggi dari suatu sistem di mana direktori tersebut tidak memiliki *parent* lain yang lebih tinggi darinya. Ibarat sebuah batang pohon yang memiliki ranting-ranting, *root directory* merupakan *parent* dari seluruh data yang ada di dalamnya. Contohnya:



![](assets/windir.jpg)



Pohon direktori di atas merupakan contoh pohon direktori dalam Windows. Pada Windows, setiap partisi memiliki hurufnya masing-masing dan huruf tersebut merupakan *root directory* dari masing-masing partisi. Windows tidak memiliki *root directory* yang lebih tinggi dari ini. Maka dari itu, untuk sebuah partisi yang diberi huruf <code>C:</code>, *root directory*-nya adalah <code>C:</code> itu sendiri.

Lain halnya dengan sistem operasi berbasis UNIX. Pada sistem operasi tersebut, hanya ada satu *root directory* tunggal untuk sistem secara keseluruhan yakni <code>/</code>. Seluruh direktori, termasuk partisi yang bukan merupakan partisi sistem, mengacu pada direktori ini. Partisi yang bukan partisi sistem umumnya dapat diakses melalui direktori <code>mnt</code> atau <code>media</code> di mana direktori ini hanya berisi referensi ke partisi tersebut.



![](assets/unixdir.jpg)



Pada kasus di atas, WSL melihat partisi <code>C:</code> dan <code>D:</code> sebagai partisi eksternal. Sehingga, penempatannya menurut Linux tetap berada di bawah <code>/</code> walaupun pada kenyataannya, WSL ini disimpan di dalam salah satu partisi tersebut.



## Direktori Relatif, Kerja, dan Mutlak

> **Navigasi sederhana pada Terminal/CMD**
>
> Untuk menuju sebuah direktori di Terminal/CMD, ketikkan komando berikut ini:
>
> ~~~shell
> cd "a directory"
> ~~~
>
> Apabila alamat tidak mengandung spasi, tanda petiknya boleh diabaikan.

Dalam pemanggilan struktur berkas, terdapat variasi terhadap kelengkapan dari alamat yang harus dicantumkan untuk mencapai tujuan yang diinginkan. Kelengkapan ini tergantung dari kebutuhan dari pengguna maupun program. Masing-masing variasi memiliki keunggulan dan kekurangannya tersendiri dan perancang program dituntut untuk memahami kasus-kasus penggunaan masing-masing jenis alamat direktori. Variasi ini terdiri dari direktori relatif, direktori kerja, dan direktori mutlak.

Direktori relatif (*relative directory*) merupakan alamat direktori yang mengasumsikan bahwa posisi saat ini merupakan tolak ukur dari pemanggilannya. Sehingga, alamat yang perlu ditulis hanya dari suatu tolak ukur posisi sampai ke tujuan saja. Maka dari itu, alamat direktori ini umumnya lebih pendek karena tidak perlu melacak *parent* dari posisi yang menjadi tolak ukur sampai ke *root directory*. Contohnya:

~~~python
cd "C:\Users\ASUS"
cd "Documents"
~~~

Meskipun pemanggilan kedua hanya mencantumkan "Documents" sebagai alamatnya, namun alamat yang dituju tetap merupakan *folder* Documents yang ada pada direktori "ASUS" karena posisi pengguna saat memanggil direktori kedua adalah pada direktori "ASUS".

Direktori kerja (*working directory*) merupakan alamat direktori yang dialokasikan dan digunakan oleh suatu aplikasi. Direktori kerja ini akan menjadi alamat standar yang digunakan sebagai wadah data yang digunakan oleh aplikasi tersebut dan seluruh data tersebut dapat direferensikan relatif terhadap direktori tersebut. Pada Python, direktori kerja standarnya adalah tempat di mana Python terpasang. Seluruh modul baik yang sudah bawaan maupun yang dipasang kemudian hari serta tempat penyimpanan standar berkas yang dihasilkan di IDLE akan menggunakan direktori kerja ini. Namun, jika kamu sudah mulai menggunakan berkas yang kamu simpan di *folder* pilihan kamu, direktori kerjanya akan berubah menjadi *folder* tersebut. Kamu dapat mengetahui direktori kerja yang saat ini digunakan oleh Python melalui komando berikut ini:

~~~python
import os
os.getcwd()
~~~

Direktori mutlak (*absolute directory*) merupakan alamat direktori yang mereferensikan relasi antara sebuah lokasi dengan *root directory*-nya secara lengkap. Direktori mutlak ini bersifat eksplisit dan umumnya digunakan untuk situasi di mana penggunaan direktori relatif akan menjadi ambigu, misalnya mengakses berkas di *folder* atau partisi berbeda. Umumnya, jika kamu menggunakan *root directory*, program akan secara otomatis menafsirkan alamat yang kamu masukkan menjadi direktori mutlak. Contohnya:

~~~shell
cd "/mnt/c/Users"
cd "C:\Users"
~~~