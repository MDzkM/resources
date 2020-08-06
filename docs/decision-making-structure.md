---
id: decision-making-structure
title: Decision Making Structure
sidebar_label: Decision Making Structure
---

Dalam hampir semua aspek kehidupan, kita dihadapkan dengan pilihan. Mulai dari aktivitas yang dilakukan untuk mengisi waktu luang hingga cita-cita yang ingin dicapai di masa depan, kita harus mampu untuk mengambil keputusan terhadap pilihan apa yang akan kita pilih. Setiap pilihan yang diambil memiliki rangkaian kejadian masing-masing sebagai konsekuensi dari pengambilan keputusan tersebut.

Pengambilan keputusan dalam pemrograman bekerja dengan prinsip yang serupa. Program dapat disusun sedemikian rupa sehingga alurnya dapat dipengaruhi oleh suatu kondisi baik yang merupakan sifat intrinsik dari program itu sendiri maupun yang merupakan dorongan eksternal (seperti masukan dari pengguna atau sistem). Sistem ini merupakan komponen mendasar dalam alur pemrograman mulai dari program yang kondisi-kondisi pengambilan keputusannya diatur secara eksplisit oleh perancang program hingga *Artificial Intelligence* yang mampu membuat keputusan secara otonom.

Struktur pengambilan keputusan pada pemrograman pada umumnya berbentuk *suite* <code>if</code>-<code>else</code>. Dalam Python, *suite* ini memiliki kata kunci tambahan sehingga menjadi <code>if</code>-<code>elif</code>-<code>else</code> di mana <code>elif</code> merupakan singkatan dari <code>else if</code>. Amati grafik di bawah ini:

![Graph about if-else statement](https://i.ibb.co/yXmzs7T/img-01.png)

Dalam representasi program pengecekan ketersediaan kursi kosong di atas, pertama dilakukan deklarasi variabel <code>kursi_kosong</code> dengan nilai 1. Untuk memberikan hasil yang sesuai kepada pengguna tentang ketersediaan kursi, program harus membuat keputusan tentang hasil yang akan diberikan kepada pengguna berdasarkan isi dari variabel <code>kursi_kosong</code> tersebut. Pada program di atas, terjadi percabangan yang bergantung pada pengambilan keputusan apakah variabel <code>kursi_kosong</code> memiliki nilai lebih dari 0 atau tidak. Apabila kondisi tersebut benar, maka alur program akan menghasilkan "Masih muat". Sebaliknya, apabila kondisi tersebut salah, alur program akan menghasilkan "Penuh". Dalam hal ini, kondisi benar karena 1 > 0, sehingga "Masih muat" akan dihasilkan.

## Pengambilan Keputusan dengan Satu Kondisi

Pengambilan keputusan yang bergantung pada satu kondisi dapat dirancang dengan hanya menggunakan <code>if</code> dan <code>else</code>. Dalam Python, struktur pengambilan keputusan satu kondisi ini adalah sebagai berikut:

~~~
if suatu_kondisi:
	blok yang jalan jika benar
else:
	blok yang jalan jika salah
~~~

> **Perhatikan indentasinya!**

Program pengecekan ketersediaan kursi kosong yang sebelumnya dibahas dapat diimplementasikan sebagai berikut:

~~~python
kursi_kosong = 1
if kursi_kosong > 0:
    print("Masih muat")
else:
    print("Penuh")
print("Selesai")
~~~

Hasil yang dicetak pada layar adalah sebagai berikut:

~~~
Masih muat
Selesai
~~~

Penjelasan:

1. <code>kursi_kosong > 0</code> adalah operasi pembanding (dibahas pada subbab 1C) yang akan membandingkan isi dari variabel <code>kursi_kosong</code> dengan <code>0</code> dan menghasilkan sebuah nilai Boolean sesuai hasil evaluasi operasi tersebut (dalam hal ini True).
2. Kondisi True akan membuat blok yang ada di dalam <code>if</code> untuk berjalan dan yang ada di dalam <code>else</code> untuk tidak berjalan sehingga "Masih muat" tercetak.
3. <code>print("Selesai")</code> tidak termasuk blok manapun sehingga tetap dicetak, apapun kondisinya.

Masing-masing dari <code>if</code> dan <code>else</code> memiliki blok program yang ditandai dengan titik dua dan diikuti oleh indentasi satu tingkat (umumnya ekuivalen dengan 4x spasi). Blok program tersebut mengikuti kondisi sebagai berikut:

1. Blok program yang ada di dalam <code>if</code> akan dijalankan jika dan hanya jika kondisi yang diberikan (operasi pembanding) dievaluasi sebagai True. 
2. Blok program yang ada di dalam <code>else</code> akan dijalankan jika dan hanya jika kondisi yang diberikan (operasi pembanding) pada <code>if</code> dievaluasi sebagai False.

> **Penggunaan Boolean dalam Struktur Percabangan**:
>
> Jika kamu sudah memiliki suatu variabel yang berisi sebuah nilai Boolean, program dapat disusun seperti berikut ini dengan memanfaatkan syarat berjalannya masing-masing blok:
>
> ~~~python
> status = True
> if status:
> 	print("OK")
> else:
> 	print("Not OK")
> ~~~

Cobalah untuk mencari hasil dari masing-masing program berikut ini!

~~~python
ukuran_ram = 16
tab_chrome = 5
if tab_chrome >= 20 and ukuran_ram <= 4:
    print("RIP")
~~~

~~~python
serial_number = "K1 0 01 18 SMC"
if serial_number[:2] == "K1":
    print("Kereta Eksekutif")
else:
    print("Bukan Kereta Eksekutif")
~~~

~~~python
my_var = ""
if my_var:
	print("Hurray")
else:
	print("Yeay")
~~~

## Pengambilan Keputusan dengan Kondisi Majemuk

Terkadang perbedaan dalam kehidupan itu tidak semudah perbedaan hitam dan putih. Dengan gagalnya suatu kondisi untuk diasosiasikan dengan sebuah blok <code>if</code> belum tentu berarti semuanya dapat digeneralisasi menjadi sebuah blok <code>else</code>. Seringkali, ada kondisi lain yang harus diperiksa dan dijadikan pertimbangan dalam mengambil keputusan. Amati grafik berikut ini:

![A graph about multi-way decision structure](https://i.ibb.co/QkXVH49/img-02.png)

Penjelasan:

1. Program membuat sebuah variabel <code>kepadatan_krl</code> dengan nilai 1.2 (dalam konteks ini, 120%).
2. Program menghadapi percabangan pertama di mana jika <code>kepadatan_krl</code> memiliki nilai kurang dari atau sama dengan 1.0 (dalam konteks ini, 100%), maka keluarannya adalah "Santuy".
3. Jika nilai <code>kepadatan_krl</code> lebih dari 1.0 (kondisi dievaluasi sebagai False), program akan menemui percabangan kedua di mana jika <code>kepadatan_krl</code> memiliki nilai kurang dari atau sama dengan 1.5 (dalam konteks ini, 150%), maka keluarannya adalah "Uh oh" (Program akan menempuh jalur ini).
4. Jika seandainya nilai <code>kepadatan_krl</code> masih lebih dari 1.5, program akan menempuh jalur yang menghasilkan keluaran "Pepes tahu".

Rancangan program yang dijelaskan di atas merupakan salah satu contoh struktur percabangan dengan kondisi majemuk. Pada program tersebut, ada dua kondisi yang mengendalikan alur program dan menghasilkan tiga kemungkinan keluaran. Program di atas sebenarnya dapat diimplementasikan dengan menurunkan struktur percabangan dengan satu kondisi seperti di bawah ini:

~~~python
kepadatan_krl = 1.2
if kepadatan_krl <= 1.0:
    print("Santuy")
else:
    if kepadatan_krl <= 1.5:
        print("Uh oh")
    else:
        print("Pepes tahu")
print("Selesai")
~~~

Hasilnya adalah sebagai berikut:

~~~
Uh oh
Selesai
~~~

Namun, struktur percabangan seperti di atas akan menyulitkan penyusunan program, khususnya yang memerlukan kondisi sangat banyak (8, 10, 12, dan lain-lain). Struktur percabangan dapat diibaratkan sebagai ranting di mana pada program di atas, perpecahan terjadi sebanyak dua kali. Pertama, rantingnya terpecah menjadi dua. Kemudian, ranting <code>else</code> hasil pecahan tadi akan terpecah kembali menjadi dua. Untuk memudahkan dalam struktur program seperti ini, Python menyediakan kata kunci <code>elif</code> yang merupakan singkatan dari <code>else if</code> dan dapat digunakan untuk memusatkan pemecahan di awal (secara tertulis) sehingga memudahkan penulisan. Contohnya:

~~~python
kepadatan_krl = 1.2
if kepadatan_krl <= 1.0:
    print("Santuy")
elif kepadatan_krl <= 1.5:
    print("Uh oh")
else:
    print("Pepes tahu")
print("Selesai")
~~~

Program ini dan program sebelumnya memiliki perilaku yang sama. Namun, kali ini kamu hanya perlu memberikan indentasi sebanyak satu kali. Dengan menggunakan <code>elif</code>, percabangan yang dibuat akan menjadi lebih *scalable* jika misalnya sewaktu-waktunya kamu ingin menambahkan kondisi tambahan. Penambahan tersebut hanya perlu dilakukan dengan menambah satu blok <code>elif</code> sebelum <code>else</code> tanpa harus memikirkan jumlah indentasi >1. Secara umum, struktur percabangan seperti ini memiliki rancangan sebagai berikut:

~~~
if kondisi_1:
	Blok jika Kondisi 1 benar
elif kondisi_2:
	Blok jika Kondisi 1 salah dan Kondisi 2 benar
elif kondisi_3:
	Blok jika Kondisi 1&2 salah dan Kondisi 3 benar
....(tambahkan blok elif sesuai kebutuhan)
else:
	Blok jika semua Kondisi salah
Percabangan selesai, program lanjut
~~~

> **Pentingnya indentasi**:
>
> Salin program berikut ini apa adanya ke IDLE dan coba untuk dijalankan. Amati hal yang terjadi!:
>
> ~~~
> sebuah_angka = 70
> if sebuah_angka < 10:
> print("Satuan")
> elif sebuah_angka < 100:
> print("Puluhan")
> elif sebuah_angka < 1000:
> print("Ratusan")
> ~~~
>
> Jika program tersebut dijalankan apa adanya, Python akan memberikan sebuah *error* yang berkaitan dengan format penulisan. Cobalah untuk mengoreksi program di atas sehingga dapat mencetak keluaran yang sesuai.

Carilah hasil dari program berikut ini:

~~~python
sebuah_angka = 10
if sebuah_angka <= 20:
    sebuah_angka += 15
elif sebuah_angka <= 30:
    sebuah_angka += 20
else:
    sebuah_angka += 100
print(sebuah_angka)
~~~