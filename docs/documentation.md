---
id: documentation
title: Documentation
sidebar_label: Documentation
---

Salah satu hal baik yang dapat membantu perancang program dalam membuat program yang baik adalah memberikan dokumentasi yang memadai terhadap program yang dirancang. Dokumentasi ini diimplementasi dalam bentuk catatan/komentar yang diberikan di antara program yang dapat membantu penjelasan dari program tersebut. Lalu, apa manfaat dari dokumentasi program yang memadai?

1. Berperan sebagai catatan bagi diri kamu sebagai perancang program jika sewaktu-waktu kembali ke program tersebut untuk digunakan kembali atau dikembangkan.
2. Berperan sebagai sinkronisasi ilmu dengan sesama perancang program yang dapat membantu ketika masing-masing perancang bertanggung jawab atas satu aspek dari program dan perancang lainnya membutuhkan aspek tersebut.

Ada tiga cara untuk menyusun sebuah komentar:

1. *Inline*: Komentar dapat ditempatkan di seluruh penjuru kode kecuali di kiri (di kanan, di atas, maupun di bawah). Cara menggunakannya adalah menambahkan tanda pagar (<code>#</code>) sebelum menuliskan komentar.

   ~~~python
   fav_course = [] # Implemented as 2-D List
   ~~~

   ~~~python
   # Variable must contain Integer only
   counter = 0
   ~~~

2. *Block*: Komentar ini hanya dapat ditempatkan di atas atau di bawah suatu baris kode. Namun, komentar ini dapat dibuat dengan baris rangkap. Cara menggunakannya adalah menambahkan tiga tanda petik (<code>"""</code>) di awal dan di akhir blok komentar.

   ~~~python
   """
   Author: Rafi Muhammad Daffa
   Date: 8 August 2019
   Version: 0.1alpha1
   """
   startprogram()
   ~~~

3. *Docstring*: Komentar ini merupakan pengembangan khusus dari *block* yang ditempatkan di bawah definisi fungsi. Komentar ini adalah satu-satunya komentar yang akan dianggap oleh Python dan dijadikan sebagai bentuk dokumentasi dari fungsi yang didefinisikan tersebut.

   ~~~python
   def print_if_even(number):
       """
       This program prints a number only if it is even
       """
       if number%2 == 0:
           print(number)
   ~~~

   Karakteristik spesial lain yang dimiliki oleh komentar seperti ini adalah komentar tersebut dapat diakses saat program berjalan dengan menggunakan fungsi <code>help(nama_fungsi)</code>. Contohnya, anggaplah ada sebuah fungsi <code>hitungTHB</code>.

   ~~~python
   help(hitungTHB)
   ~~~

   Hasil yang dicetak adalah:

   ~~~
   Help on function hitungTHB in module __main__:
   
   hitungTHB(berangkat, datang)
       Hitung Harga THB untuk stasiun yang menerima THB
   ~~~

>Penyusunan *docstring* dalam Python diatur dalam *Python Enhancement Proposals* (PEP) 257 yang dapat kamu akses [di sini](https://www.python.org/dev/peps/pep-0257/).

Dalam menyusun sebuah program, idealnya komentar berperan penting dalam menjelaskan sebuah program. Misalnya, ada sebuah konsep yang mendasari pembuatan blok kode yang kemungkinan akan menimbulkan kebingungan di kemudian hari. Kamu dapat "mencatat" hal tersebut dalam bentuk komentar untuk mencegah lupa saat program kamu akan dipakai atau dikembangkan oleh dirimu sendiri dan orang lain.