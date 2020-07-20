---
id: loop
title: Loop
sidebar_label: Loop
---

## Pola Perulangan

Secara sederhana, pola perulangan digunakan untuk mengulangi blok program tertentu berdasarkan susunan yang dibuat oleh pemrogram. Dalam Python, pola perulangan ini dapat dikendalikan oleh dua tipe susunan, yaitu urutan data (dengan <code>for</code>) dan kondisi (dengan <code>while</code>).

### Pola Perulangan <code>for</code>

Pada materi Tipe Data, kita telah mengetahui bahwa String merupakan untaian dari karakter-karakter. Dalam Python, karakteristik ini membuat String terkategorikan di bawah suatu kelompok tipe data yang bernama tipe urutan (*sequence types*) yang juga mencakup List dan Tuple. Kelompok tipe data urutan ini memiliki karakteristik di mana setiap data pembangunannya disusun secara terurut dan memiliki nomor indeksnya masing-masing untuk proses pemanggilan. Karakteristik ini dapat dimanfaatkan untuk membangun suatu pola perulangan.

Misalnya, kamu punya daftar teman seangkatan yang sudah kamu ajak kenalan seperti berikut ini:

~~~python
teman_kenalan = ["Azis", "Dzikra", "Dyto", "Okto", "Alghi", "Rara", "Nadia", "Cinoy"]
~~~

Lalu, kamu ingin mencetak masing-masing dari nama tersebut satu per satu sehingga menghasilkan suatu daftar yang terlihat lebih "manusiawi" seperti berikut ini:

~~~python
Azis
Dzikra
Dyto
Okto
Alghi
Rara
Nadia
Cinoy
~~~

Untuk mencapai hasil tersebut, kamu perlu menjalankan fungsi <code>print()</code> **untuk setiap** nama-nama yang telah kamu masukkan ke dalam variabel <code>teman_kenalan</code> tadi. Memang, kamu bisa saja melakukan hal seperti ini:

~~~python
print(teman_kenalan[0])
print(teman_kenalan[1])
print(teman_kenalan[2])
...dst.
~~~

Melelahkan, bukan? Hal seperti ini tidak *scalable* dan akan menjadi buruk dengan jumlah data besar (450 orang misalnya). Di sinilah, pola perulangan akan membantu kalian. Kita sudah mengetahui bahwa fungsi <code>print()</code> harus dijalankan untuk setiap nama-nama yang ada tadi. Dalam Python, karakteristik "untuk setiap" ini diimplementasikan dalam bentuk ekspresi <code>for</code>. Secara umum, ekspresi <code>for</code> berbentuk seperti berikut ini:

~~~
for suatu_variabel in koleksi_data:
	Blok yang akan dijalankan secara berulang
~~~

Penjelasan:

1. Setiap data pembangun yang ada pada <code>koleksi_data</code> akan diberikan ke <code>suatu_variabel</code> secara berurutan.
2. Pada setiap pemberian data tersebut, blok program yang berada di bawah <code>for</code> akan dijalankan. Berarti, blok program tersebut akan dijalankan sebanyak kejadian pemberian data tadi.
3. Blok <code>for</code> akan selesai apabila koleksi data telah habis atau ada perintah tersurat untuk berhenti.

Proses pencetakan nama-nama teman kenalan tadi dapat diimplementasikan seperti ini:

~~~python
for nama in teman_kenalan:
	print(nama)
~~~

![](assets/Diagram_for.png)

Sebagaimana dapat diamati dari grafik di atas, setiap iterasi mengubah konten dari variabel <code>nama</code> sesuai dengan posisi dari urutan yang ditempuh. Pada perjalanan iterasi pertama, variabel <code>nama</code> akan menggunakan data pada indeks paling awal (0); pada perjalanan iterasi kedua, variabel <code>nama</code> akan menggunakan data pada indeks setelahnya (1); dan seterusnya.

Cobalah untuk mencari hasil dari program-program di bawah ini:

~~~python
daftar_pemberhentian = ["Gambir", "Cirebon", "Tegal", "Pekalongan", "Semarang Tawang"]
for stasiun in daftar_pemberhentian[::-1]:
	print("Berhenti di Stasiun", stasiun)
~~~

~~~python
angka_satuan = [0,1,2,3,4,5,6,7,8,9]
for angka in angka_satuan:
    if angka%3 == 0:
        print("Wow")
    else:
        print(angka)
~~~

#### Fungsi <code>range()</code>

> Notasi fungsi:
>
> ~~~python
> range(start=0,stop,step=1)
> ~~~
>
> Daftar argumen:
>
> 1. <code>start</code> (Positional): Angka pertama dari deret angka yang diinginkan (*default*-nya 0)
> 2. <code>stop</code> (Positional): Batas dari deret angka yang diinginkan (bersifat eksklusif dan harus ada)
> 3. <code>step</code> (Positional): Longkapan yang ingin dilakukan pada setiap angka (*default*-nya 1, tidak melongkap).

Pola perulangan <code>for</code> dapat digunakan untuk sekelompok data dengan tipe data apapun, termasuk angka. Ada beberapa kasus di mana kita ingin melakukan perulangan dengan angka seperti untuk:

1. Mengulangi suatu blok program sebanyak x kali (2 kali, 8 kali, 10 kali, 12 kali, dst.)
2. Mencetak angka-angka ganjil atau genap
3. Dan lain-lain

Untuk kasus-kasus ini, kamu tidak perlu membuat urutan angka sendiri dalam bentuk List. Kamu dapat menggunakan fungsi <code>range()</code> untuk membuatkan urutannya untukmu. Sederhananya, fungsi ini mirip dengan *slicing* di mana kita melakukan pemotongan terhadap suatu deret angka yang tak berhingga. Umumnya, fungsi ini ditempelkan langsung ke <code>for</code> seperti berikut ini:

~~~python
for i in range(4):
	print("We are in Iteration",i+1)
~~~

Hasilnya adalah:

~~~
We are in Iteration 1
We are in Iteration 2
We are in Iteration 3
We are in Iteration 4
~~~

Penjelasan:

1. Fungsi <code>range()</code> akan membuat urutan sesuai dengan permintaan, yakni 0, 1, 2, dan 3.
2. Terjadi perubahan nilai variabel <code>i</code> sebanyak 4 kali di mana pada setiap perubahan tersebut, nilai <code>i+1</code> dicetak bersama dengan String "We are in Iteration".

Perlu diketahui bahwa fungsi ini menghasilkan urutan dengan tipe data tersendiri dengan nama yang sama. Apabila kamu ingin menggunakannya di tempat selain <code>for</code>, disarankan menggunakan *casting* ke List atau Tuple.

Cobalah untuk mencari hasil dari program-program berikut ini:

~~~python
for i in range(10):
    print(i%3)
~~~

~~~python
for i in range(1, 13):
	if i+1 == 6:
		print("Menuju 6")
	else:
		print(i)
~~~

~~~python
for i in range(10):
	print("Lol\nLol")
~~~

~~~python
for i in range(2,10,3):
	print(i)
~~~

~~~python
for i in range(0):
	print("Foo")
~~~



### Pola Perulangan <code>while</code>

Kali ini, tinjauan akan kita alihkan menuju Boolean dan operasi-operasi yang dapat dilakukan olehnya. Pada materi Struktur Kendali I, kamu telah mengetahui bahwa kondisi yang didefinisikan pada <code>if</code> akan menentukan apakah program akan masuk ke dalam blok tersebut atau tidak. Sebagai pengingat, coba amati program berikut ini:

~~~python
angka = 1
if angka <= 10:
	print(angka)
~~~

Karena variabel <code>angka</code> berisi nilai Integer 1 dan kondisi yang didefinisikan adalah <code>angka</code> kurang dari/sama dengan 10, maka angka tersebut akan dicetak ke layar. Berarti, kondisi True yang dihasilkan oleh operasi pembanding yang kita lakukan akan menjalankan kondisi yang didefinisikan. Lalu, bagaimana jika kita ingin mencetak **semua** angka yang kurang dari/sama dengan 10 seperti berikut ini?

~~~
1
2
3
4
5
6
7
8
9
10
~~~

Sebelumnya, kamu telah memiliki variabel <code>angka</code> yang berisi nilai Integer 1. Untuk melakukan pencetakan terhadap nilai seperti diminta, berarti kamu dapat mencetak isi dari variabel tersebut kemudian menambahkannya **selama** isi dari variabel tersebut masih kurang dari/sama dengan 10. Dalam Python, pola perulangan seperti ini diimplementasikan dalam bentuk perulangan <code>while</code> yang memiliki bentuk:

~~~python
while sebuah_kondisi:
	Blok yang dijalankan selama kondisi terpenuhi (True)
~~~

Untuk masalah pencetakan angka tadi, program Python yang dapat menyelesaikannya adalah sebagai berikut:

~~~python
angka = 1
while angka <= 10:
	print(angka)
    angka += 1
~~~

Penjelasan:

1. Pada kondisi awal, variabel <code>angka</code> berisi nilai Integer 1. Kondisi ini memenuhi persyaratan awal untuk masuk ke dalam blok <code>while</code>.
2. Blok <code>while</code> akan dijalankan dengan nilai variabel <code>angka</code> 1 yang akan mencetak nilai tersebut kemudian memodifikasi variabelnya untuk menampung <code>angka</code>+1 (2).
3. Python akan kembali mengecek kondisi tadi secara terus menerus dan akan menjalankannya apabila masih memenuhi.
4. Ketika kondisi tersebut sudah dilanggar, maka blok <code>while</code> selesai dijalankan.

#### Pola Perulangan Tak Berhingga

> Pola seperti ini kadang berguna untuk beberapa kasus. Namun, tetap perlu ada batasan terhadap jumlah perulangan yang dilakukan blok tersebut.

Karena blok program yang ada di bawah <code>while</code> akan dijalankan **selama** kondisi yang diberikan bernilai True, kamu harus menyusun cara agar kondisi yang diberikan tersebut dapat diubah menjadi False sehingga blok dapat dihentikan. Apabila kondisi tersebut tidak dapat berubah menjadi False pada waktu tertentu, akan tercipta pola perulangan tak berhingga. Amatilah program berikut ini:

~~~python
angka = 1
while angka <= 10:
	print(angka)
~~~

Program ini mirip dengan yang sebelumnya. Bedanya, pada setiap perulangan yang dilakukan, variabel <code>angka</code> tidak mengalami perubahan. Amatilah hasil program di atas di Python-mu!

> Untuk menghentikan program Python yang sedang berjalan secara paksa, gunakan <code>Ctrl</code> + <code>C</code>.

Pada proses pemrograman, blok program <code>while</code> harus disusun bersamaan dengan asuransi bahwa program tersebut akan berhenti normal pada waktu tertentu.

Cobalah untuk mencari hasil dari program-program di bawah ini:

~~~python
num = 0
while (num <= 5):
   print(num, end=" ")
   num += 1
~~~

~~~python
menit = 0
sinyal = "Merah"
while sinyal == "Merah":
	if menit == 5:
		sinyal = "Hijau"
		print("Diizinkan berangkat")
	else:
		print("Berhenti")
		menit += 1
~~~

~~~python
daftar_daya = [100, 150, 300, 120, 210, 800, 140, 1500, 240, 850, 160]
pemakaian = 0
indeks = 0
while pemakaian + daftar_daya[indeks] <= 3500:
	pemakaian += daftar_daya[indeks]
	indeks += 1
	print("Pemakaian saat ini: ", pemakaian)
~~~



### Penggunaan <code>else</code> dalam Pola Perulangan

Pola perulangan juga dapat diikuti oleh pernyataan <code>else</code> yang memiliki blok program di bawahnya. Program akan memasuki blok <code>else</code> apabila pola perulangan berjalan secara normal (tidak diberhentikan secara paksa). Kondisi yang menyebabkan masuknya <code>else</code> adalah:

1. Untuk <code>for</code>, urutan datanya sudah habis terpakai.
2. Untuk <code>while</code>, kondisinya sudah tidak memenuhi syarat.

Struktur pola perulangan yang mengandung <code>else</code> adalah sebagai berikut:

~~~python
for i in koleksi_data:
    # Blok program untuk setiap iterasi
else:
    # Blok program yang jalan ketika for selesai tanpa pemberhentian paksa
~~~

~~~python
while suatu_kondisi:
    # Blok program untuk setiap iterasi
else:
    # Blok program yang jalan ketika while selesai tanpa pemberhentian paksa
~~~

Contoh:

~~~python
def cari_dyto(list_nama):
    for nama in list_nama:
        if nama == "Dyto":
            return True
    else:
        return False
daftar = ["Azis", "Dzikra", "Yoga", "Cinoy", "Ray", "Ali", "Meldi"]
print(cari_dyto(daftar))
~~~

Hasil:

~~~
False
~~~

Penjelasan:

1. Pemanggilan fungsi <code>cari_dyto</code> akan menjalankan sebuah iterasi yang mengecek satu per satu elemen dari List apakah sama dengan Dyto atau tidak.
2. Karena tidak ada yang sama dengan Dyto, maka kata kunci <code>return</code> tidak akan dijalankan sehingga <code>for</code> berhenti sempurna dengan habisnya koleksi data.
3. Karena <code>for</code> berhenti sempurna, blok <code>else</code> dijalankan dengan mengembalikan False ke pemanggilnya.



### Pola Perulangan Bersarang

Dalam membuat pola perulangan, mungkin saja bahwa pola perulangan tersebut menjalankan suatu pola perulangan lain di dalamnya. Pola perulangan seperti ini disebut pola perulangan bersarang (*nested loop*). Sebagai contoh, mari kita ambil contoh program yang memeragakan cara kerja jam.

> **00:00:00**

Kita mengetahui bahwa bagian detik dari jam tersebut akan berubah 1x setiap detiknya. Kemudian, saat detik tersebut selesai melakukan iterasi (dari 59 kembali ke 00), bagian menitnya turut bertambah 1. Begitu pula dengan bagian jamnya, di mana saat bagian menitnya selesai melakukan iterasi (dari 59 kembali ke 00), bagian jamnya turut bertambah 1. Apabila masing-masing dari bagian jam, menit, dan detik tersebut dijadikan sebuah variabel, maka perubahan yang terjadi adalah sebagai berikut:

| Jam   | 00   |      |      |      |      |      |      |      |      |      |      |      | 01   |
| ----- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Menit | 00   |      |      |      |      | 01   |      |      |      |      | ...  | ...  | 00   |
| Detik | 00   | 01   | ...  | 58   | 59   | 00   | 01   | ...  | 58   | 59   | ...  | ...  | 00   |

Dalam Python, struktur seperti ini dapat diimplementasikan dengan tiga tingkatan pola perulangan <code>for</code> sebagai berikut:

~~~python
for jam in range(24):
	for menit in range(60):
		for detik in range(60):
			print(jam,":",menit,":",detik,":")
~~~

Penjelasan:

1. Anggaplah setiap blok <code>for</code> yang ada sebagai blok program tersendiri. Sehingga, ada blok jam, menit, dan detik.
2. Dengan <code>range</code> 24, berarti blok jam akan dijalankan sebanyak 24 kali yang masing-masing akan memanggil blok menit.
3. Dengan <code>range</code> 60, berarti blok menit akan dijalankan sebanyak 60 kali yang masing-masing akan memanggil blok detik.
4. Dengan <code>range</code> 60, berarti blok detik akan dijalankan sebanyak 60 kali yang masing-masing akan memanggil fungsi <code>print</code>.
5. Suatu pola perulangan baru bisa melanjutkan perulangannya setelah blok di dalamnya selesai dilakukan. Berarti, blok menit baru akan melanjutkan ke perulangan selanjutnya setelah blok detik telah berjalan sebanyak 60 kali. Begitupun dengan jam.

Hasil:

~~~
0 : 0 : 0
.....
0 : 0 : 59
0 : 1 : 0
0 : 1 : 1
.....
0 : 59 : 59
1 : 0 : 0
1 : 0 : 1
.....
23 : 59 : 59
~~~

Kamu juga dapat mengamati proses pola perulangan bersarang pada sistem *rotor* yang merupakan salah satu metode enkripsi dalam sistem Enigma yang pernah digunakan di Perang Dunia ke-2. Situs peraga [ini](http://enigmaco.de/enigma/enigma.html) dapat membantumu dalam mengamatinya. Pada sistem tersebut, setiap kali tombol *keyboard* ditekan, *rotor* paling kanan akan melangkah sejauh 1 langkah. Ketika *rotor* paling kanan tersebut telah berputar kembali ke awal, pergantian kembali ke awal juga akan menarik *rotor* di sebelah kirinya untuk melangkah sejauh 1 langkah. Cara kerja ini mirip dengan jam tadi.