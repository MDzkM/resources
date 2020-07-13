---
id: integer
title: Integer
sidebar_label: Integer
---

## Penjelasan Umum (<code>int</code>)

Pada dasarnya, Integer (bilangan bulat) merupakan tipe data yang berkaitan dengan, ya, bilangan bulat.

~~~python
10
78
1928
9223372036854775807
~~~

Python akan secara otomatis menganggap data-data bilangan bulat yang tidak diapit oleh pembatas lain sebagai sebuah Integer. Perlu diketahui bahwa Python tidak memiliki batasan konkret terhadap data Integer yang digunakan, namun akan ada hal lain yang berkaitan dengan tipe data Integer dan memiliki batas praktis, seperti nomor indeks.

## Operasi Matematika

:::note
**Catatan**:

Semua operasi matematika di bawah ini akan mengembalikan sebuah angka baru yang merupakan hasil dari operasinya. *Operand* (angka yang dilakukan operasi) tidak mengalami perubahan.
:::

Tipe data Integer digunakan untuk mengoperasikan data-data dengan operasi matematis, di antaranya:

| Operasi                                  | Contoh    | Catatan                         | Presedensi    |
| ---------------------------------------- | --------- | ------------------------------- | ------------- |
| Penjumlahan (<code>+</code>)             | 1024+2048 | -                               | 3 (terendah)  |
| Pengurangan (<code>-</code>)             | 766-9128  | -                               | 3 (terendah)  |
| Perkalian (<code>*</code>)               | 827*5     | -                               | 2             |
| Pembagian (<code>/</code>)               | 30/5      | Menghasilkan <code>float</code> | 2             |
| Pembagian Lantai (<code>//</code>)       | 3//2      | Pembulatan ke bawah             | 2             |
| Sisa Pembagian / Modulo (<code>%</code>) | 3%2       | -                               | 2             |
| Pemangkatan (<code>**</code>)            | 2**3      | -                               | 1 (tertinggi) |

Perlu dicatat bahwa presedensi dan sifat asosiatif dan komutatif dari operasi matematika tetap berlaku di Python dan Python akan secara otomatis menghitung operasi sesuai dengan peraturan tersebut. Selain itu, penggunaan tanda kurung <code>()</code> juga akan meningkatkan presedensi dari operasi yang ada di dalamnya menjadi tertinggi seperti pada operasi matematika.

~~~python
print(1+2*3**4)
~~~

**Hasil:**
~~~python
163
~~~

## Operasi Matematika + Pemberian Nilai

Operasi dengan tipe ini umumnya digunakan bersama dengan variabel. Sebelumnya telah disinggung bahwa seluruh operasi matematika tidak akan mengubah *operand*, namun akan menghasilkan sebuah angka baru yang merupakan hasil dari operasi yang digunakan. Maka, jika kita ingin mengubah suatu nilai dalam variabel, kita harus melakukan seperti ini:

~~~python
my_var = 5
my_var = my_var * 2
~~~

Pada operasi matematika yang ada di baris kedua program, ada dua hal yang terjadi:

1. Operasi perkalian akan dievaluasi dengan mengambil nilai dari <code>my_var</code> dan mengalikannya dengan 2 sehingga menghasilkan suatu angka baru 10.
2. Angka baru 10 tersebut diberikan sebagai nilai baru dari <code>my_var</code>. (Sistem pemberian nilai variabel akan dijelaskan pada subbab berikutnya).

Operasi seperti ini dapat dipersingkat dengan menggunakan operasi matematika yang disatukan dengan pemberian nilai sebagai berikut:

> Asumsikan ada sebuah variabel num dengan nilai 10

| Operasi                        | Contoh      | Ekuivalen dengan | Nilai <code>num</code> setelah operasi  |
| ------------------------------ | ------------| ---------------- | --------------------------------------- |
| Penjumlahan (`+=`)             | `num += 10` | `num = num + 10` | 20                                      |
| Pengurangan (`-=`)             | `num -= 10` | `num = num - 10` | 0                                       |
| Perkalian (`*=`)               | `num *= 5`  | `num = num * 5`  | 50                                      |
| Pembagian (`/=`)               | `num /= 4`  | `num = num / 4`  | 2.5                                     |
| Pembagian Lantai (`//=`)       | `num //= 4` | `num = num // 4` | 2                                       |
| Sisa Pembagian / Modulo (`%=`) | `num %= 3`  | `num = num % 3`  | 1                                       |
| Pemangkatan (`**=`)            | `num **= 2` | `num = num ** 2` | 100                                     |

Cobalah untuk melakukan operasi di bawah ini:

~~~python
13 // 5 * 5 + 13 % 5
-13 %  3
-17 // 7
-13 % -3
'D' * 2 + 'P' + '0'
~~~

## Fungsi Integer

:::note
**"Fun Fact"**:

Meskipun <code>abs(x)</code> hanya dapat digunakan untuk Integer, <code>min(a,b,...,z)</code> dan <code>max(a,b,...,z)</code> dapat digunakan untuk tipe data apapun yang bisa diurutkan (*orderable*), termasuk String, Boolean, List, dan lain-lain.

**Further Learning**:

Relasi terurut yang membahas tentang keterurutan (apakah suatu himpunan data dapat diurutkan) akan dipelajari pada mata kuliah Matematika Diskret 2 (CSGE601011)
:::

Untuk memanipulasi sebuah angka bertipe Integer, ada beberapa fungsi yang dapat digunakan, di antaranya:

1. <code>abs(x)</code>: Menerima suatu angka x dan mengembalikan nilai mutlak (absolut) dari angka tersebut.
2. <code>min(a,b,....,z)</code>: Menerima himpunan angka yang dipisahkan dengan koma dan menghasilkan angka terkecil dari himpunan tersebut.
3. <code>max(a,b,....,z)</code>: Menerima himpunan angka yang dipisahkan dengan koma dan menghasilkan angka terbesar dari himpunan tersebut.