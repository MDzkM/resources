---
id: list
title: List
sidebar_label: List
---

## Penjelasan Umum (<code>list</code>)

Sesuai namanya, tipe data List merupakan tipe data yang dapat mengelompokkan berbagai tipe data (termasuk List lain) dalam satu wadah.

~~~python
["Lonely"]
["Red", "Green", "Blue"]
[1,2,3]
[True, True, False]
[["I","Love","You"], 3000, False]
[[[[[[[[[[1,2]]]]]]]]]]
~~~

Python akan menerjemahkan suatu nilai sebagai List jika data apapun yang ingin kita simpan di List diapit dengan tanda kurung siku (<code>[]</code>) dan setiap data dipisahkan dengan tanda koma. Pada Python, suatu List dapat berisi berbagai macam tipe data sekaligus.

Suatu List bersifat *mutable*, artinya ukuran dan isi dari List tersebut dapat dimanipulasi secara langsung. Kita dapat menambahkan data baru ke dalam List yang sudah kita buat dan kita dapat mengubah konten yang sudah ada di dalam List tersebut, bahkan membuangnya sama sekali.

## *Indexing*

Sama seperti String, setiap data yang berada di dalam List memiliki nomor indeksnya masing-masing dan dapat dipanggil dengan menambahkan [nomor indeks] pada pemanggilan variabel List.

~~~python
grocery_list = ["Cabbage", "Spices", "Corn"]
print(grocery_list[1])
~~~

**Hasil:**
~~~python
Spices
~~~

Pemanggilan melalui *indexing* ini juga dapat digunakan untuk memanipulasi data yang terletak pada indeks tersebut.

~~~python
favourite_course = ["DDP1", "Matdis 1", "MPKT B"]
favourite_course[1] = "PSD"
print(favourite_course[1])
~~~

**Hasil:**
~~~python
PSD
~~~

Jika data yang terletak pada nomor indeks dalam suatu List merupakan koleksi dari data-data yang memiliki nomor indeks tersendiri, *nested indexing* dapat dilakukan.

~~~python
interests = ["UI/UX", "Data Science", "Software Engineering"]
print(interests[0][2])
~~~

**Hasil:**
~~~python
/
~~~