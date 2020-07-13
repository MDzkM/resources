---
id: other-data-types
title: Other Data Types
sidebar_label: Other Data Types
---

## Apa Saja?

Masih banyak tipe data lain yang dimiliki oleh Python, seperti Dictionary dan Set. Bahkan, Python yang pada prinsipnya merupakan bahasa pemrograman berorientasi objek (OOP) dapat mengakomodasi pembuatan "tipe data" baru melalui penggunaan <code>class</code> (referensi lebih lanjut: OOP). Tipe data yang telah dibahas di atas telah mencakup tipe-tipe dasar yang lazim digunakan dan menjadi pondasi dalam mengembangkan tipe-tipe data lainnya.

## *Type Casting*

:::caution
Gunakan fitur ini dengan bijak. Tidak semua tipe data dapat di-"cast" ke semua tipe data lainnya. Kegagalan proses ini dapat menimbulkan *error* dan berhentinya program secara utuh.
:::

*Type casting* adalah sebuah teknik untuk membuat suatu data yang memiliki suatu tipe data diperlakukan seperti tipe data lain yang diinginkan. Dalam hal ini, kita melakukan *overidding* terhadap inferensi tipe data yang dilakukan oleh Python terhadap data yang dibuat. Suatu data dapat di-*cast* ke tipe data lain dengan memanggil inisial dari tipe data tujuannya (dibahas pada subbab 1C) sebagai berikut:

~~~python
# <tipe data tujuan>(data asal)

# Contoh valid:
int('12')
str(12)
bool(1)

# Contoh invalid:
int("Z")
~~~