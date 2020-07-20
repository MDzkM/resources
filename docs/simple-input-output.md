---
id: simple-input-output
title: Simple Input and Output
sidebar_label: Simple Input and Output
---

Setelah mempelajari bagaimana percabangan dapat memengaruhi alur program, langkah selanjutnya adalah memanfaatkan percabangan tersebut untuk memberikan kendali bagi pengguna untuk memengaruhi alur program. Misalnya, kamu ingin merancang sebuah program yang dapat menyapa pengguna sesuai dengan nama yang ia masukkan ke program. Atau kamu ingin merancang sebuah program yang dapat membantu pengguna dalam menghitung suatu rumus Fisika kompleks. Di sinilah kamu mulai membutuhkan masukan dari pengguna.

## *Onboarding*: Notasi Fungsi dalam Python

Dalam menggunakan fungsi di Python, akan ada situasi di mana sebuah fungsi memiliki sistem parameter yang kompleks sehingga membutuhkan kemampuan khusus untuk membaca notasi fungsi yang diberikan pada dokumentasi yang tersedia. Topik ini akan dibahas lebih dalam pada Pekan 03 dan anak sub-bab ini bersifat sebagai pengenalan untuk menggunakan tiga fungsi yang akan dibahas selanjutnya, yakni <code>input()</code>, <code>print()</code>, dan <code>eval()</code>.

Setiap fungsi, layaknya dalam matematika, memiliki argumen yang memengaruhi perilaku dari fungsi tersebut. Bedanya, suatu fungsi dalam pemrograman boleh tidak memiliki argumen sama sekali. Ada dua cara untuk memberikan argumen dalam Python:

1. **Positional Argument**: Argumen yang dipetakan sesuai dengan urutan penempatannya.

   Contoh notasi:

   ~~~
   power(x,y)
   ~~~

   Contoh penggunaan:

   ~~~
   power(1,2)
   ~~~

   Berarti, pemanggilan fungsi <code>power(1,2)</code> akan memetakan x ke 1, dan y ke 2.

2. **Keyword Argument**: Argumen yang dipetakan sesuai dengan variabel argumen yang diberikan saat fungsi tersebut dirancang.

   Contoh notasi:

   ```
   power(x,y)
   ```

   Contoh penggunaan:

   ```
   power(y=2,x=1)
   ```

   Meskipun secara posisi terbalik, Python akan tetap memetakan x ke 1 dan y ke 2.

Ada beberapa kasus di mana argumen tertentu harus diberikan sebagai *keyword argument*.

Contoh notasi fungsi di mana <code>custom_arg</code> harus diberikan sebagai *keyword argument*:

~~~
my_function(*positional_collection, custom_arg=0)
~~~

Contoh penggunaan:

~~~
my_function(1,2,3,4,5,6,custom_arg=100)
~~~

:::note

Sebuah argumen dapat memiliki sebuah nilai *default* di mana ketika tidak ditemukan nilai untuk dipetakan ke argumen tersebut saat dipanggil, nilai *default* akan dipanggil.

Contoh notasi:

~~~
power(x,y=1)
~~~

Contoh penggunaan dengan nilai tidak lengkap:

~~~
power(2)
~~~

Maka, Python akan secara otomatis menggunakan nilai *default* untuk y.
:::

## <code>input()</code>

> **Notasi Fungsi**
>
> ~~~
> input(prompt=None)
> ~~~
>
> Daftar argumen:
>
> <code>prompt</code> (Positional/Keyword): Permintaan yang akan ditampilkan kepada pengguna saat proses masukan berlangsung (default None / tidak ada permintaan yang ditampilkan).

Fungsi <code>input()</code> digunakan untuk menerima masukan dari pengguna dan mengembalikannya dalam bentuk String kepada siapapun yang memanggilnya. Umumnya, fungsi <code>input()</code> ini digunakan untuk mengisi suatu variabel sehingga umumnya fungsi ini dipanggil oleh variabel. Jika digunakan tanpa variabel, hasil masukan akan tersimpan di blok memori namun tidak dapat dipanggil dan menjadi sampah.

Contoh penggunaan:

~~~python
username = input("Enter your name: ")
height = input("Insert your height: ")
~~~

Pada saat program dijalankan,  program akan rehat sejenak (tidak berhenti) pada pemanggilan fungsi untuk menunggu masukan dari pengguna. Pengguna dapat mengetikkan argumen sepanjang apapun selama tombol <code>Enter</code> belum ditekan. Tombol tersebut merupakan sinyal bagi Python bahwa pengguna telah selesai memberikan masukan dan program dapat dilanjutkan.

Apabila contoh penggunaan dijalankan, tahapan yang ditempuh adalah:

1. Program akan meminta masukan untuk variabel <code>username</code>.

   (Tampilan di Shell)

   ~~~
   Enter your name:
   ~~~

2. Setelah masukan selesai diberikan ke variabel yang berhak, program akan meminta masukan untuk variabel <code>height</code>.

   (Tampilan di Shell)

   ~~~
   Enter your name: Harnin Todi
   Enter your height:
   ~~~

3. Program selesai setelah masukan selesai diberikan ke variabel yang berhak.

   (Tampilan di Shell)

   ~~~
   Enter your name: Harnin Todi
   Enter your height: 170
   >>>
   ~~~

Perlu dicatat bahwa semua masukan yang diberikan oleh pengguna (terlepas dari tipe data yang seharusnya merepresentasikan masukan tersebut) akan diperlakukan sebagai sebuah String. Apabila kamu merasa yakin terhadap tipe dari data yang akan dimasukkan oleh pengguna, kamu dapat membungkus pemanggilan fungsi tersebut dengan *type casting* (dibahas pada subbab 1C) sesuai dengan tipe data yang diinginkan.

Contoh:

~~~python
username = input("Enter your name: ")
height = int(input("Insert your height: "))
~~~

Dalam hal ini, masukan pengguna untuk variabel <code>height</code> akan dikonversi menjadi Integer sebelum dipetakan ke sebuah variabel. Seperti pada *type casting*, struktur ini harus digunakan dengan bijak karena merupakan salah satu *point of failure*.

Coba amati hasil dari program di bawah ini:

~~~python
random_input = bool(input("try press enter"))
print(random_input)
~~~

## <code>print()</code>

> **Notasi fungsi**
>
> ~~~
> print(*value, sep=' ', end='\n', file=sys.stdout, flush=False)
> ~~~
>
> Daftar argumen:
>
> <code>value</code> (Positional, Infinite): Objek yang akan dicetak (bisa berapa pun dan sepanjang apapun). Pemisahan antar-objek dilakukan dengan tanda koma dan akan dicetak dengan pemisah yang didefinisikan oleh <code>sep</code>.
>
> <code>sep</code> (Keyword): String yang memisahkan antar-objek yang dicetak (default <code> </code> - Spasi).
>
> <code>end</code> (Keyword): String yang ditambahkan di akhir proses pencetakan dan digunakan sebagai pemisah antara pencetakan yang dilakukan dengan fungsi tersebut dan fungsi selanjutnya (default <code>\n</code> - Representasi dari Enter/baris baru).
>
> <code>file</code> (Keyword): Tujuan dari hasil pencetakan (default <code>sys.stdout</code> - mengeluarkan ke *interpreter* yang akan dioper ke Shell untuk ditampilkan di Shell).
>
> <code>flush</code> (Keyword): Apakah benda yang akan dicetak harus langsung di-*flush* (dikeluarkan) atau menunggu antrian *buffer* sistem (default <code>False</code> - menunggu antrian *buffer* sistem).

Fungsi <code>print()</code> digunakan untuk mengeluarkan sesuatu dalam bentuk String ke Shell (*default*) maupun ke sebuah berkas teks (memodifikasi argumen <code>file</code>). Fungsi ini dapat mencetak benda apapun yang memiliki representasi String (dapat dicek dengan menggunakan *type casting* String) di mana benda non-String apapun yang dijadikan argumen akan secara implisit di-*cast* ke String dan dicetak.

Contoh penggunaan:

~~~python
print("first second", "third fourth")
print("first second", "third fourth",sep="and")
~~~

Hasil:

~~~
first second third fourth
first secondandthird fourth
~~~

Cobalah untuk mencari hasil dari program berikut ini!

~~~python
print("is this a real life?", "or is this just a fantasy?", sep="\n" , end = "\t")
print("wait, this is not new line")
~~~

~~~python
print(input("insert an input here\t"))
print("next, ", end = " ")
print(input("another one"), sep="\t")
~~~

## <code>eval()</code>

> **Notasi Fungsi**
>
> ~~~
> eval(source, globals=None, locals=None)
> ~~~
>
> Daftar argumen:
>
> <code>source</code> (Positional): Sebuah String yang mengandung ekspresi Python
>
> <code>globals</code> & <code>locals</code> (Positional): Konteks yang digunakan dalam mengevaluasi ekspresi (default <code>None</code> - menggunakan konteks bawaan Python)

Fungsi <code>eval()</code> merupakan fitur spesial Python yang dapat menerima argumen berupa suatu String yang mengandung ekspresi valid Python dan menghasilkan hasil yang sesuai dengan ekspresi tersebut. Apapun isi dari String yang dijadikan sumber akan diperlakukan seperti ketika kamu mengetikannya langsung di Shell tanpa menggunakan tanda kutip.

Untuk membuktikan hasil dari fungsi ini, kamu dapat menggunakan fungsi <code>type(objek)</code> untuk melihat tipe data dari objek yang dimaksud.

Contoh:

~~~python
number = eval('123')
lst = eval('[1,2,3]')
math_op = eval('12+23')
boolean = eval('True')
comparison = eval('1+1!=3')
logic = eval('True and False')
print(type(number),type(lst),type(math_op),type(boolean),type(comparison),type(logic),sep="\n")
~~~

Hasil:

~~~
<class 'int'>	# Tipenya Integer
<class 'list'>	# Tipenya List
<class 'int'>	# Tipenya Integer
<class 'bool'>	# Tipenya Boolean
<class 'bool'>	# Tipenya Boolean
<class 'bool'>	# Tipenya Boolean
~~~

Secara sederhana, fungsi ini akan meminta Python untuk menghilangkan pengapit tanda kutip **terluar** yang merupakan penanda tipe data String sehingga isinya bisa dievaluasi. Maka dari itu, sebuah String yang tidak dapat dievaluasi sebagai ekspresi Python tidak dapat dikembalikan menjadi String dan akan menimbulkan *error*.

Contoh:

~~~python
# Tidak valid
eval("A")

# Valid (kutip satu di dalam dipertahankan dan dievaluasi menjadi String)
eval("'A'")
~~~