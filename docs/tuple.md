---
id: tuple
title: Tuple
sidebar_label: Tuple
---

## Penjelasan Umum (<code>tuple</code>)

Mirip seperti List, tipe data Tuple ditujukan sebagai wadah untuk menampung berbagai macam tipe data (bahkan Tuple lain).

~~~python
("Lonely",)
(1,2,3)
("A", 10, True)
~~~

Yang membedakan antara List dengan Tuple di antaranya adalah sebagai berikut:

1. Konstruksi Tuple yang berisi hanya satu data harus diikuti dengan tanda koma untuk mencegah ambiguitas dengan pengurungan untuk menaikkan presedensi.
2. Tuple bersifat *immutable*, artinya konten Tuple yang sudah dibentuk tidak dapat diganti dengan data lain. Modifikasi terhadap Tuple harus melalui pembuatan Tuple baru yang memuat perubahan yang diinginkan.
3. Penomoran indeks masih berlaku layaknya List, namun penggantian konten dari data pada indeks tersebut tidak dapat dilakukan (modifikasi tertentu dapat dilakukan jika data tersebut bersifat *mutable*).

~~~python
# Valid
list_in_tuple = ([1,2],[3,4])
list_in_tuple[0][1] = 3

# Invalid
my_tuple = (1,2,3)
my_tuple[0] = 2
~~~