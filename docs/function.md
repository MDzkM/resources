---
id: function
title: Function
sidebar_label: Function
---

Pada subbab 2A, kamu telah mempelajari cara untuk mengulangi suatu blok program baik melalui iterasi urutan data maupun dengan kondisi Boolean. Namun, perulangan blok program terjadi langsung sesuai dengan definisi yang dibuat. Contohnya:

~~~python
for i in range(5):
	print(i)
~~~

Berarti, pencetakan nilai variabel <code>i</code> akan dilakukan sebanyak 5 kali dengan nilai <code>i</code> berupa Integer 0, 1, 2, 3, dan 4. Pencetakan nilai variabel tersebut akan dilakukan oleh Python secara langsung dan berurutan dari awal sampai akhir. Lalu, apa yang harus dilakukan apabila kita menginginkan program tersebut berulang di beberapa tempat berbeda? Ya, sebenarnya kamu bisa saja menyalin blok tersebut ke tempat yang diinginkan. Namun, kamu sebenarnya bisa menggunakan fungsi.

Dalam pemrograman, fungsi adalah suatu blok program yang memiliki sebuah *signature* (terdiri atas nama fungsi beserta argumen-argumennya) dan dapat dipanggil berulang-ulang oleh program melalui *signature* tersebut. Selama ini, kita sebenarnya sudah menggunakan banyak fungsi, seperti <code>print()</code>, <code>eval()</code>, dan <code>abs()</code>. Fungsi sering digunakan untuk mempermudah pemrograman karena dapat dipakai berulang-ulang di tempat berbeda (*reusable*) dan pengguna fungsi tersebut tidak perlu mengetahui apa yang terjadi di balik fungsi tersebut dan hanya mengetahui *signature* dari program tersebut beserta tujuannya (*encapsulation*). Contohnya, ketika kamu menggunakan fungsi <code>print()</code>, kamu hanya mengetahui cara memanggil fungsi tersebut dan keluaran yang dihasilkan. Kamu tidak perlu mengetahui apa yang dilakukan oleh fungsi tersebut untuk mencetak hasil yang kamu inginkan.

Selain menggunakan fungsi yang disediakan oleh Python, kamu dapat mendefinisikan sendiri fungsi-fungsi yang kamu inginkan dalam program kamu. Secara umum, fungsi dalam Python dapat didefinisikan dengan cara berikut:

~~~python
def nama_fungsi(argumen1, argumen2, ...., argumenN):
	Blok program yang akan jalan ketika fungsi dipanggil
~~~

Dalam matematika, kamu mungkin telah mengenal fungsi-fungsi seperti <code>f(x)</code> dan <code>g(x)</code>. Misalnya, kita mendefinisikan sebuah fungsi <code>f(x)</code> = 2x + 1. Setiap nilai x yang kamu berikan, misalnya 8 atau 10, akan menghasilkan nilai yang berbeda (17 dan 21). Fungsi tersebut dapat kamu definisikan dengan program berikut ini:

~~~python
def f(x):
	print(2*x+1)
~~~

Kamu mungkin menyadari bahwa kata kunci yang digunakan adalah <code>def</code>, singkatan dari "*define*". Artinya, kamu baru melakukan definisi dari fungsi tersebut. Fungsi tersebut tidak akan dijalankan sampai kamu memanggilnya menggunakan *signature* yang dibuat (nama fungsi dan argumennya). Misalnya:

~~~python
f(8)
f(10)
~~~

Hasilnya adalah:

~~~
17
21
~~~

Penjelasan:

1. Ketika kamu memanggil fungsi <code>f(8)</code>, artinya kamu memanggil fungsi <code>f</code> tadi dengan argumen 8. Nilai 8 tersebut akan diberikan ke variabel x sesuai definisi dan dapat digunakan dalam fungsi tersebut.
2. Fungsi <code>print()</code> yang ada di dalam definisi fungsi tadi dijalankan dengan x bernilai 8.
3. Ketika kamu memanggil fungsi <code>f(10)</code>, kamu memanggil fungsi <code>f</code> tadi, kali ini dengan nilai x berupa Integer 10. Fungsi <code>print()</code> akan dijalankan dengan nilai 10 tersebut.

## <code>print()</code> vs <code>return</code>

Cobalah untuk menjalankan program di bawah ini:

~~~python
def f(x):
    print(x**2)

y = f(3) + 2
print(y)
~~~

Apa hasilnya? Apakah sesuai dengan ekspektasi kamu? Kamu akan disambut dengan *error* berikut ini ketika kamu berusaha menghitung hasil dari y:

~~~
TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'
~~~

Loh, kok NoneType? Bukannya seharusnya Integer ya? Nah, di sinilah kamu harus mulai berkenalan dengan kata kunci <code>return</code> dan bedanya dengan fungsi <code>print()</code>. Fungsi <code>print()</code> hanya bertujuan untuk mencetak sesuatu ke layar. Fungsi seperti ini disebut fungsi *void*, yaitu fungsi yang tidak mengembalikan apapun kepada pemanggilnya. Sehingga, ketika kamu memanggil <code>f(3)</code> + 2, Python akan mencetak hasil pemangkatannya ke layar (9) namun operasi penjumlahan tersebut tidak mendapatkan apapun (None). Di sisi lain, kata kunci <code>return</code> akan memerintahkan Python untuk mengembalikan nilai yang diinginkan kepada pemanggilnya. Contohnya:

~~~python
def f(x):
    return x**2

y = f(3) + 2
print(y)
~~~

Kali ini, hasil dari pemangkatannya tidak dimunculkan ke layar. Namun, hasil dari y dapat dicetak ke layar:

~~~
11
~~~

Penjelasan:

1. Operasi matematika <code>f(3)</code> + 2 akan dievaluasi oleh Python di mana Python akan memanggil <code>f(3)</code> dengan harapan mendapatkan suatu nilai untuk dijumlahkan.
2. Fungsi <code>f(3)</code> akan mengembalikan nilai kuadrat dari 3 (9) ke pemanggilnya, yaitu operasi matematika tadi.
3. Operasi matematika tadi akan menghasilkan 11 dan menyimpannya di variabel y.

Perlu diketahui bahwa ketika <code>return</code> dijalankan, semua kode di dalam blok fungsi tersebut yang belum dijalankan (berada di bawah <code>return</code>) tidak akan dijalankan.

## Argumen Fungsi

Dalam pemrograman, sebuah fungsi dapat memiliki argumen atau tidak memiliki argumen. Contohnya:

~~~python
def alarm():
	print("Woy bangun, udah siang!")

alarm()
~~~

Pada program di atas, perilaku dari fungsi <code>alarm</code> tidak mengalami perubahan apapun sehingga semua pemanggilan fungsi <code>alarm()</code> akan menghasilkan keluaran yang sama.

Mari kita ambil sebuah contoh fungsi di bawah ini:

~~~python
def power(x,y):
	return x**y
~~~

Ada dua cara untuk menggunakan argumen dalam sebuah fungsi Python:

1. *Positional Argument*: Pemberian argumen dilakukan berdasarkan posisinya.

   Contoh:

   ~~~
   power(2,3)
   ~~~

   Sehingga, nilai x nanti adalah 2 dan nilai y adalah 3.

2. *Keyword Argument*: Pemberian argumen dilakukan berdasarkan variabel yang didefinisikan.

   Contoh:

   ~~~
   power(y=2,x=3)
   ~~~

   Sehingga, meskipun posisinya terbalik, nilai x tetap 3 dan nilai y tetap 2.

Pada umumnya, kamu dapat menggunakan dua cara ini secara bersamaan. Namun, ada beberapa kasus di mana kamu hanya dapat menggunakan salah satunya. Salah satunya adalah penggunaan *infinite positional argument* seperti berikut ini:

~~~python
def print_grosiran(*item,pemisah="\n"):
    print(item)
	for i in item:
		print(item,end=pemisah)
~~~

Pada fungsi ini, <code>item</code> merupakan *infinite positional argument* yang mengumpulkan **semua** argumen posisional yang diberikan menjadi sebuah Tuple. Karena setelahnya ada argumen <code>pemisah</code>, maka argumen tersebut harus berbentuk *keyword* karena tidak akan ada sisa argumen setelah dikumpulkan oleh *item* tadi.

Untuk membuat sebuah *infinite positional argument*, beberapa hal ini harus diperhatikan:

1. Argumen ditandai dengan karakter ‘*’ sebelum deklarasi nama argumennya.
2. Dalam satu fungsi, hanya satu argumen boleh berbentuk *infinite positional argument*.
3. Tidak boleh ada *positional argument* setelahnya.
4. Tidak boleh menggunakan *keyword argument*.

## Nilai *Default*

Untuk menggunakan *infinite positional argument* dengan argumen lainnya di belakangnya, *keyword argument* tersebut harus memiliki nilai *default* sehingga dapat digunakan apabila argumen tidak tersedia. Hal ini sebenarnya berlaku untuk semua tipe argumen di mana ada sebuah nilai *default* yang dapat digunakan sewaktu-sewaktu tidak diberikan. Contohnya:

~~~python
def power(x,y=1):
	return x**y
~~~

Coba kamu panggil fungsi tersebut seperti berikut ini:

~~~python
print(power(2,4))
print(power(2))
print(power(x=1,y=2))
print(power(x=2))
~~~

Pada pemanggilan kedua dan keempat, meskipun kita hanya memberikan 1 argumen untuk diberikan kepada x, nilai y tetap akan terdefinisi karena memiliki nilai *default* 1.

Coba cari hasil dari program-program di bawah ini:

~~~python
def volume(panjang, lebar = 5, tinggi = 7):
   return panjang * lebar * tinggi
w = volume(10)
x = volume(5, 2)
y = volume(2, 3, 4)
z = volume(panjang = 3, tinggi = 10)
print(w)
print(x)
print(y)
print(z)
~~~

~~~python
def fungsi(satu, *banyak):
   print("Satu:", satu)
   print("Banyak:", banyak)
fungsi(1, 2, 3, 4)
fungsi(5)
fungsi(satu = 6)
fungsi(satu = 7, banyak = (8, 9, 10))
~~~

~~~python
def cetak():
   print("Halo Peserta DDP 0")
   print("Rajinlah belajar agar kamu bertambah pintar")
cetak()
~~~