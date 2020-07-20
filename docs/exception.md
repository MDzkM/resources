---
id: exception
title: Exception
sidebar_label: Exception
---

## Kesalahan Umum dalam Pemrograman

Dalam membuat sebuah program, kenyataan pahit yang terjadi adalah tidak ada program yang sempurna. Bahkan, program yang sudah didesain sedemikian rupa oleh tim yang besar masih mungkin mengalami kesalahan. Kesalahan tersebut dapat terjadi karena berbagai macam hal, misalnya:

1. Kalkulasi aritmatis yang meleset (presedensi, asosiasi, dan lain-lain).
2. Masukan pengguna yang tidak sesuai dengan rancangan program.
3. *Typing error (Typo)*.
4. Dan-lain-lain.

Oleh karena itu, kita sebagai perancang program harus mampu mengidentifikasi kesalahan-kesalahan umum dalam pemrograman dan solusi yang dapat ditempuh untuk mencegah kesalahan tersebut terjadi.

Secara umum, ada tiga macam kesalahan dalam pemrograman, yaitu *syntax error*, *runtime error*, dan *logic error*.

### *Syntax Error*

Kesalahan sintaks mencakup segala kesalahan yang berkaitan dengan "kesastraan" Python. Kesalahan ini dapat mencakup namun tidak terbatas pada penggunaan tanda baca, indentasi, dan kesalahan ketik. Kesalahan ini merupakan kesalahan yang paling pertama ditangkap oleh Python dan akan mencegah program tersebut untuk dijalankan sama sekali. Contohnya:

~~~python
dev fungsi(arg1,arg2):
    print(arg1)

def fungsi2(arg3,arg4)
	print(arg3)
    
def fungsi3(arg5,arg6):
print(arg5)
~~~

Salah satu komponen dari *interpreter* Python yang dinamakan *parser* akan mengecek program yang dibuat dari atas sampai bawah. Jika ditemukan kesalahan sintaks, Python akan secara otomatis menangkapnya dan akan dipresentasikan di IDLE dengan arsiran merah atau akan dicetak di Console untuk yang lainnya.

### *Runtime Error*

Kesalahan yang masuk dalam kategori ini adalah kesalahan yang terjadi pada saat programnya berjalan. Apabila kesalahan dalam kategori ini terjadi, program akan diberhentikan secara otomatis. Namun, hal ini tidak akan mencegah Python untuk menjalankan program tersebut pada awalnya. Mayoritas *runtime error* memiliki nama pengecualian khusus yang dapat digunakan untuk melakukan analisis kesalahan. Kesalahan yang lazim muncul adalah sebagai berikut:

1. <code>NameError</code>: Umumnya terjadi karena suatu variabel yang belum dideklarasikan digunakan untuk sesuatu.

   ~~~python
   print(a)
   ~~~

2. <code>TypeError</code>: Umumnya terjadi karena terdapat ketidakcocokan antara suatu tipe data dengan operasi yang dikenakan padanya atau ada tabrakan antar-tipe data.

   ~~~python
   "A" ** "3"
   ~~~

3. <code>ZeroDivisionError</code>: Kesalahan aritmatika khusus yang melibatkan pembagian suatu angka dengan nol.

   ~~~python
   1/0
   ~~~

4. <code>OverflowError</code>: Umumnya terjadi karena tipe-tipe data yang memiliki batas kapasitas telah melampaui batasnya.

   ~~~python
   310235.60481380235**121
   ~~~

5. <code>IndexError</code>: Umumnya terjadi ketika indeks suatu data yang dipanggil tidak ada.

   ~~~python
   my_lst = ["Type","Me"]
   my_lst[10000]
   ~~~

6. <code>ValueError</code>: Umumnya terjadi ketika melakukan *type casting* dengan data yang salah.

   ~~~python
   int("4.5")
   int("Z")
   ~~~

Setiap kesalahan dalam tipe ini terjadi, Python akan memberhentikan program tersebut dan akan memberikan laporan terhadap baris kode terakhir yang dijalankan sebelum kesalahan terjadi dan deskripsi singkat dari kesalahan yang terjadi. Laporan ini disebut *traceback* dan disusun seperti ini:

~~~
Traceback (most recent call last):
  File "<pyshell#2>", line 1, in <module>
    310235.60481380235**121
OverflowError: (34, 'Result too large')
~~~

Laporan tersebut terdiri atas beberapa informasi sebagai berikut:

1. <code>File pyshell#2</code>: Berkas Python di mana kesalahan tersebut terjadi. Jika kesalahan terjadi di komando yang ditulis di Shell, maka File akan menunjukkan <code>pyshell</code>.

2. <code>line 1</code>: Baris program di mana kesalahan tersebut terjadi.

3. <code>in module</code>: Jika baris program merupakan bagian dari modul, nama modulnya akan disebutkan di sini.

4. <code>310235.60481380235**121</code>: Blok program yang mengalami kesalahan.

5. <code>OverflowError</code>: Nama dari kesalahan yang terjadi.

6. <code>(34, 'Result too large')</code>: Keterangan dari kesalahan yang terjadi.

> ##### <code>KeyboardInterrupt</code>
>
> Jika kamu melakukan interupsi secara paksa program dengan menekan <code>Ctrl</code> + <code>C</code>, maka sebenarnya akan terjadi *runtime error* dengan jenis yang khusus. Pada dasarnya, interupsi yang kamu lakukan melalui *keyboard* merupakan "kesalahan" yang terjadi saat programnya berjalan. Maka, ketika kamu menginterupsi program secara paksa, *traceback* juga akan muncul.

### *Logic Error*

Kesalahan ini merupakan kesalahan yang paling sulit dicari karena Python tidak akan bisa mengetahui bahwa program tersebut memiliki kesalahan dengan jenis ini. Kesalahan ini bergantung pada pengetahuan perancang program dalam alur program yang diharapkan pada awalnya. Mari kita ambil contoh dalam perhitungan kombinasi:

~~~python
factorial(n)/factorial(r)*factorial(n-r)
~~~

Seharusnya, perhitungan <code>factorial(r)*factorial(n-r)</code> berada di tingkatan yang sama (di bawah pembagian) seperti berikut ini:

![](assets/combi.png)

Karena Python hanya mengetahui bahwa pembagian dan perkalian memiliki presedensi yang sama, maka Python akan mengevaluasi rumus tadi dari kiri kanan sehingga akan dibagi terlebih dahulu kemudian dikali.