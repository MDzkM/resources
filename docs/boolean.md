---
id: boolean
title: Boolean
sidebar_label: Boolean
---

## Penjelasan Umum (<code>bool</code>)

Hanya ada dua nilai dalam tipe data Boolean:

~~~python
True
False
~~~

Tipe data Boolean merupakan tipe data yang merepresentasikan suatu nilai kebenaran atau kesalahan. Dalam tipe data Boolean, hanya ada dua nilai yang sah, yaitu <code>True</code> dan <code>False</code> (perhatikan kapitalisasinya). Implementasi dari masing-masing nilai tersebut bisa berbeda antara satu bahasa dengan yang lainnya, namun True sudah pasti merepresentasikan benar dan False sudah pasti merepresentasikan salah.

## Operasi Pembanding

Kasus di mana tipe data Boolean umumnya digunakan adalah sebagai hasil dalam operasi pembanding. Operasi pembanding dapat dilakukan terhadap data dengan berbagai macam tipe di mana hasilnya akan mengembalikan salah satu dari dua nilai Boolean di mana True berarti perbandingan yang dilakukan merupakan perbandingan yang valid dan False berarti perbandingan yang dilakukan merupakan perbandingan yang keliru.

| Operasi                             | Contoh | Hasil |
| ----------------------------------- | ------ | ----- |
| Kurang dari (`<`)                   | 1 < 2  | True  |
| Kurang dari atau sama dengan (`<=`) | 2 <= 2 | True  |
| Sama dengan (`==`)                  | 3 == 4 | False |
| Tidak sama dengan (`!=`)            | 4 != 9 | True  |
| Lebih dari atau sama dengan (`>=`)  | 3 >= 5 | False |
| Lebih dari (`>`)                    | 4 > 4  | False |

Umumnya, operasi pembanding hanya dapat digunakan untuk dua data yang memiliki tipe sama. Namun, ada beberapa tipe data yang dapat dibandingkan dengan tipe data lain, seperti Integer dan Float.

~~~python
# Dapat dilakukan
1 < 2
2 > 3.0
"A" > "B"

# Tidak dapat dilakukan (akan error)
"A" >= 1
~~~

### Perbandingan String

Setiap karakter yang tersedia memiliki representasi angka yang bertindak sebagai penerjemah antara bahasa mesin (yang sederhananya hanya terdiri dari 0 dan 1) dengan bahasa manusia. Representasi ini mulanya diatur pada standar ASCII dan dikembangkan dengan standar Unicode dengan menambah karakter-karakter lain dari berbagai macam bahasa.

:::note
**Catatan**:

**Setiap** karakter memiliki representasi angkanya masing-masing. Karakter "A" dan "a", misalnya, memiliki representasi angka yang berbeda (65 dan 97).
:::

Untuk mengetahui tabel dari representasi tersebut, [situs ini](https://www.utf8-chartable.de/unicode-utf8-table.pl?number=1024&utf8=dec) akan membantumu.

Pada Python, perbandingan String dilakukan dengan mencari perbedaan pertama dari kiri kemudian membandingkan karakter pada indeks yang berbeda tersebut melalui representasi angka Unicode-nya. Tidak ditemukannya perbedaan berarti kedua String yang dibandingkan tersebut adalah sama.

~~~python
print("Wow" > "Wau")
~~~

**Hasil:**
~~~python
True
~~~

Pada indeks ke-0 dari kedua String ditemukan karakter yang identik, "W", sehingga tidak dapat dijadikan perbandingan. Pada indeks ke-1 ditemukan perbedaan karakter, "o" dan "a". Karakter "o" direpresentasikan dengan angka 111 dan karakter "a" direpresentasikan dengan angka 97. Karena 111 > 97, maka operasi pembanding akan mengembalikan True.

Cobalah untuk melakukan operasi di bawah ini:

~~~python
3 == 3.0
1 == True
0 == False
3 < 5
'string' == 'String'
~~~

## Aljabar Boolean

Layaknya perlakuan operasi matematis pada Integer dan Float, Boolean juga memiliki operasi yang mengambil *operand* dan memberikan hasil berupa nilai Boolean. Operasi-operasi Boolean inilah yang mendasari konsep komputasi dan digunakan mulai tingkat mesin (untuk mengolah 0 dan 1) hingga tingkat interpretasi bahasa manusia (penggunaan pada bahasa pemrograman seperti Python).

Sebelum memasuki operasi Boolean, perlu diketahui bahwa ada tiga macam operator umum:

1. Operator uner: Operator yang menerima satu *operand* (contoh: - untuk menandakan angka negatif)
2. Operator biner: Operator yang menerima dua *operand* (contoh: penjumlahan, pengurangan)
3. Operator terner: Operator yang menerima tiga *operand* (contoh: <code>a if True else b</code>)

Operasi logika (Boolean) sebenarnya terdiri dari beberapa jenis, di antaranya adalah AND, OR, NOT, XOR, XNOR, NAND, dan NOR. Modul ini hanya akan membahas penggunaan AND, OR, dan NOT pada Python untuk melakukan operasi Boolean.

| Nama Operasi | Singkatan | Tipe Operator | Penggunaan | Contoh                     |
| ------------ | --------- | ------------- | ---------- | -------------------------- |
| Konjungsi    | AND       | Biner         | a and b    | <code>True and True</code> |
| Disjungsi    | OR        | Biner         | a or b     | <code>True or False</code> |
| Negasi       | NOT       | Uner          | not a      | <code>not True</code>      |

Untuk memudahkan pemahaman terhadap konsep ini, amati tabel kebenaran di bawah ini:

| A     | B     | not A | A and B | A or B |
| ----- | ----- | ----- | ------- | ------ |
| True  | True  | False | True    | True   |
| True  | False | False | False   | True   |
| False | True  | True  | False   | True   |
| False | False | True  | False   | False  |

Layaknya operasi matematika, operasi logika juga dapat dirangkai dan memiliki presedensi terhadap sesama operasi logika maupun dengan operasi pembanding dan/atau operasi matematika.

:::important
**Presedensi operasi logika**:

1. NOT
2. AND
3. OR

**Presedensi antar-operasi**:

1. Operasi matematika
2. Operasi pembanding
3. Operasi logika
:::

~~~python
not 1%2==1 and 1%3!=1 or 1%4==1
~~~

**Hasil:**
~~~python
True
~~~

> Presedensi:
> 1. 1%2, 1%3, dan 1%4 dievaluasi terlebih dahulu sebagai operasi matematika (semua hasilnya adalah 1).
> 2. Kemudian, setiap operasi pembanding dievaluasi yang menghasilkan, secara berurutan, True, False, dan True.
> 3. Kemudian, operasi NOT dievaluasi sehingga hasil True pada 1%2==1 menjadi False.
> 4. Kemudian, operasi AND dievaluasi dengan *operand* hasil False pada not 1%2==1 dan hasil False pada 1%3!=1 yang menghasilkan False.
> 5. Terakhir, operasi OR dievaluasi dengan *operand* hasil False pada operasi AND dan hasil True pada 1%4==1 yang menghasilkan True.