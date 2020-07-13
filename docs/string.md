---
id: string
title: String
sidebar_label: String
---

## Penjelasan Umum (<code>str</code>)

Tipe data String merepresentasikan data berupa teks yang merupakan untaian (*strings*) karakter-karakter.

~~~python
"This is a string"

"123"

"Hello World!"

"Pr0gr4mm1Ng 1s e45y!"

'i\'m just testing some stuff'

"""first line,
second line,
third line"""

'is this the same as above?\nmaybe'

'''
can i do this?\nwhy not?
dunno
'''
~~~

Untuk menandakan bahwa nilai yang diberikan adalah sebuah String, nilai tersebut harus diapit oleh salah satu dari tiga pengapit berikut ini:

1. Tanda petik tunggal (*apostrophe*): <code>'Hello World!'</code>.
2. Tanda petik ganda (*double quote*): <code>"Hello World!"</code>.
3. Tiga buah tanda petik tunggal/ganda: <code>'''Hello World!'''</code> atau <code>"""Hello World!"""</code>.

:::note
Pengapit tiga buah tanda petik tunggal/ganda dapat digunakan untuk menyusun teks yang memiliki lebih dari satu baris.

~~~python
"""
Mereka bilang aku pawang ular piton,
padahal aku barista kopi jawa.
"""
~~~
:::

## *Indexing*

Karena String merupakan untaian karakter-karakter, setiap karakter (terlepas dari apa jenis karakternya) memiliki nomor indeks yang bisa dipanggil. Nomor indeks pada String dimulai dari 0 untuk karakter paling kiri dari String tersebut.

~~~python
"Dek Depe"
~~~

| D    | e    | k    |      | D    | e    | p    | e    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    |

Untuk memanggil suatu karakter dalam untaian teks, kamu dapat memanggil variabel yang menyimpan teks tersebut dan menambahkan [nomor index].

~~~python
my_name = "Dek Depe"
print(my_name[4])
~~~

**Hasil:**
~~~python
D
~~~

Nomor indeks juga dapat bernilai negatif. Nomor indeks negatif merupakan kebalikan dari nomor indeks non-negatif di mana nomor indeks negatif -1 dimulai dari karakter paling kanan dan seterusnya ke arah kiri.

~~~python
"Kak Pewe"
~~~

| K    | a    | k    |      | P    | e    | w    | e    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| -8   | -7   | -6   | -5   | -4   | -3   | -2   | -1   |

:::note
Kedua nomor indeks ini dapat digunakan secara bersama-sama dan nomor indeks pada posisi yang sama akan mengembalikan karakter yang sama, misalnya:

~~~python
my_faculty = "Fasilkom"
print(my_faculty[0])
print(my_faculty[-8])
~~~

**Hasil:**
~~~python
F
F
~~~
:::

## *Slicing*

Misalnya kita ingin mengambil sebagian dari String tertentu untuk membentuk suatu String baru. Kita dapat menggunakan metode *slicing* yang diturunkan dari *indexing* pada materi sebelumnya di mana pemanggilan nomor indeks dapat dibongkar menjadi format berikut:

~~~python
text_var[x:y:z]

# x: Indeks mulai untuk pemotongan (inklusif - default 0)
# y: Indeks akhir untuk pemotongan (eksklusif - default panjang dari string tersebut)
# z: *Stepping* (Jarak longkapan dalam pemotongan - default 1 / tidak ada pelongkapan)
~~~

Ketiga nilai tersebut tidak perlu untuk dicantumkan semua. Selama pemisahnya (<code>:</code>) tercantum, maka Python akan menggunakan nilai-nilai *default* yang ada di atas. Bahkan, pemisah antara <code>y</code> dan <code>z</code> seringkali tidak diperlukan apabila tidak ada longkapan.

~~~python
sentence = "Door stuck!"
word1 = sentence[:4] 
word2 = sentence[5:]
print(word1)
print(word2)
~~~

**Hasil:**
~~~python
Door
stuck!
~~~

:::tip
Manipulasi pemotongan secara kreatif dapat menghasilkan hal-hal yang memudahkan dalam pengolahan teks. Amatilah hasil dari blok program ini di Python-mu!

~~~python
spam = "no lemon no melon"
print(spam[::-1])
~~~
:::

## Operasi String

Dalam Python, String mendukung tanda operasi <code>+</code> yang digunakan untuk melakukan penggabungan dua buah String dan <code>*</code> yang digunakan untuk melakukan duplikasi (menggandakan sebuah teks).

~~~python
first_name = "mind your own "
last_name = "business"
full_name = first_name + last_name
on_my_mind = last_name * 3
print(full_name)
print(on_my_mind)
~~~

**Hasil:**
~~~python
mind your own business
businessbusinessbusiness
~~~

Selain itu, String juga memiliki beberapa metode (perlakuan yang dapat diberikan terhadap suatu String) sebagai berikut:

`len(var)` &#8594; mengembalikan panjang String

`var.find()` &#8594; mengembalikan indeks dari nilai yang dicari

`var.isdigit()` &#8594; mengembalikan True jika semuanya adalah angka

`var.upper()` &#8594; mengembalikan String yang semuanya kapital

`var.lower()` &#8594; mengembalikan String yang semuanya bukan kapital

`var.isupper()` &#8594; mengembalikan True jika semuanya kapital

`var.islower()` &#8594; mengembalikan True jika semuanya bukan kapital

:::important
Mengembalikan tidak selalu berarti data asli akan termodifikasi. Dalam hal ini, pengembalian berarti akan dibuat suatu data baru yang merupakan hasil dari operasi tersebut.

~~~python
sentence = "WAS IT A CAT I SAW?"
print(len(sentence))
print(sentence.lower())
print(sentence[9:12])
~~~

**Hasil:**
~~~python
19
was it a cat i saw?
CAT
~~~
:::