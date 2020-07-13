---
id: variable
title: Variabel
sidebar_label: Variabel
---

## Definisi

Seperti di matematika, variabel adalah sebuah "referensi" atau "*placeholder*" terhadap suatu nilai dalam program. Variabel dalam Python diimplementasikan sebagai suatu blok memori yang dialokasikan untuk menyimpan suatu referensi dari sebuah blok memori lain yang menyimpan data yang kita inginkan.

Analoginya, variabel dalam Python dapat diibaratkan sebagai penunjuk arah di mana ketika kita ingin menggunakan suatu nilai dalam blok memori, kita meminta variabel untuk mengarahkan kita menuju tempat nilai tersebut disimpan. Pada bahasa pemrograman lain, beberapa tipe data langsung menyimpan nilainya pada blok memori yang dialokasikan untuk variabel tersebut. Untuk memudahkan, semua tipe data di Python menggunakan referensi sebagai prinsip dalam variabel.

Untuk membentuk suatu variabel, cukup gunakan ekspresi berikut ini:

~~~python
nama_variabel = "This is a String value"
nama_variabel = 129120192
~~~

Pada bahasa pemrograman Python, variabel tidak memiliki tipe data secara spesifik sehingga setiap variabel di Python dapat digunakan untuk semua tipe data terlepas dari tipe data yang direferensikan oleh variabel tersebut pertama kali. Hal ini berbeda dengan bahasa pemrograman seperti Java di mana suatu variabel yang dibuat harus memiliki suatu deklarasi tipe data dan tipe data tersebut berlaku permanen.

## Kebijakan Pembuatan Variabel

:::note
Kebijakan ini dan beberapa kebijakan penulisan lainnya merupakan bagian dari standar yang ditetapkan oleh pengembang Python yang dinamakan PEP 8 yang dapat diakses pada [tautan ini](https://www.python.org/dev/peps/pep-0008/).
:::

Di bawah ini merupakan beberapa kebijakan pembuatan variabel yang mendasar dan beberapa di antaranya wajib diikuti:

1. Nama variabel hanya dapat terdiri atas huruf, angka, dan tanda garis bawah (<code>_</code>).
2. Nama variabel tidak boleh dimulai dari sebuah angka.
3. Nama variabel bersifat *case-sensitive* sehingga <code>variabelku</code> dan <code>Variabelku</code> tidak sama di mata Python dan dapat digunakan bersama-sama dalam satu program.
4. Nama variabel dapat dibuat sepanjang mungkin namun disarankan bahwa suatu baris program tidak melebihi 79 karakter.
5. Untuk nama variabel yang seharusnya terdiri dari spasi, salah satu dari kedua metode ini dapat digunakan:
   > snake_case &#8594; my_variable_yeay

   > camelCase &#8594; myVariableYeay
6. Disarankan untuk menggunakan nama variabel yang representatif terhadap data yang akan diberikan kepada variabel tersebut.
   > Do: username, email, nilai_pi

   > Don't: xyz, qwerty, knkn

~~~python
course_name = "Dasar-Dasar Pemrograman 0"
course_id = "DZE00001"
~~~