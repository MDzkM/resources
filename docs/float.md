---
id: float
title: Float
sidebar_label: Float
---

## Penjelasan Umum (<code>float</code>)

Tipe data Float (singkatan dari *floating point*) merupakan tipe data yang mengolah data berupa bilangan (bisa bulat atau tidak) dan dapat menyimpan angka di belakang koma.

~~~python
3.14
2.718
1.0
2.
~~~

Float dibedakan dari Integer karena representasi kedua tipe tersebut sangat berlainan di tingkat mesin akibat perlu adanya penanda khusus untuk menyatakan bilangan di belakang koma untuk Float.

Implementasi bilangan Float mengacu pada standar IEEE 754 dan idealnya memiliki dua tingkatan akurasi:

1. *Single-Precision*: Menyediakan ruang data sebesar 32-bit dengan angka maksimal kurang lebih 3.40282346638528860e+38.
2. *Double-Precision*: Menyediakan ruang data sebesar 64-bit dengan angka maksimal kurang lebih 1.7976931348623157e+308.

Pada Python, semua bilangan Float secara otomatis menggunakan *double-precision*, apapun angkanya. Hal ini belum tentu benar untuk bahasa pemrograman lainnya.

:::note
**Further Learning**:

Sistem representasi bilangan pada komputer akan disinggung pada mata kuliah Dasar-Dasar Pemrograman 1 (CSGE601020) dan akan dibahas lebih dalam pada mata kuliah Pengantar Sistem Digital (CSCM601150) untuk program studi Ilmu Komputer.
:::

## Relasi antara Integer dan Float

Mayoritas operasi yang berlaku pada Integer juga berlaku pada Float. Salah satu perbedaannya terletak pada Pembagian Lantai (<code>//</code>). Pada Integer, operasi ini akan menghasilkan pembagian yang dibulatkan ke bawah dalam bentuk Integer. Pada Float, pembulatan ke bawah tetap terjadi namun hasil yang diberikan tetap merupakan Float.

~~~python
print(11.0 // 5)
~~~

**Hasil:**
~~~python
2.0
~~~

Integer dan Float dapat dioperasikan secara bersamaan dalam satu operasi matematis. Jika salah satu dari *operand* adalah Float, maka hasil yang diberikan merupakan Float karena Float memiliki presisi lebih tinggi dibanding Integer. Contoh di atas menunjukkan pembagian lantai antara Float dengan Integer yang menghasilkan data berupa Float.

:::important
Pada Python, Integer dan Float juga dapat dibandingkan satu sama lain. Sehingga, data Integer 5 dan data Float 5.0 akan dianggap sama oleh Python. Hal ini belum tentu berlaku pada bahasa pemrograman lainnya.
:::