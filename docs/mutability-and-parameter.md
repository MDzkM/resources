---
id: mutability-and-parameter
title: Mutability Concept and Parameter Passing
sidebar_label: Mutability Concept and Parameter Passing
---

## *Mutability*

Dalam Python, setiap tipe data diperlakukan sama dalam hal penyimpanan apabila diberikan ke suatu variabel. Data akan disimpan pada suatu blok memori terpisah dari variabelnya dan variabel hanya akan menyimpan sebuah alamat ke blok memori di mana data tersebut disimpan. Hal ini berbeda dengan bahasa pemrograman lain, seperti Java, di mana tipe data tertentu disimpan di blok memori yang sama dengan variabelnya.

Sebagai contoh, anggaplah ada dua variabel <code>a</code> dan <code>b</code> seperti berikut:

~~~python
a = 2
b = 4
~~~

![](assets/DM0.png)

Variabel <code>a</code> dan <code>b</code> masing-masing hanya menyimpan alamat dari blok memori yang menampung data angka yang dibuat. Pada grafik di atas, alamat direpresentasikan dengan tanda panah yang menunjuk ke blok memori yang dimaksud. Lalu, misalnya kita ingin membuat nilai <code>a</code> menjadi sama dengan nilai <code>b</code> sebagai berikut:

~~~
a = b
~~~

![](assets/DM1.png)

Yang terjadi adalah alamat yang disimpan oleh <code>a</code> akan diubah menjadi alamat yang disimpan oleh <code>b</code> sehingga akan menunjuk ke objek angka yang sama.

Namun, sebagai kompromi terhadap tidak adanya perbedaan konsep penyimpanan data dalam Python, Python menganut sistem *mutability*. Sistem ini menentukan apakah suatu objek bisa diubah di tempat atau tidak. Tipe-tipe data yang ada di Python terbagi menjadi dua jenis berdasarkan sifat *mutability*-nya:

1. *Immutable*: Tipe data yang tidak dapat diubah di tempat, sehingga perubahan yang dikenakan padanya akan menghasilkan objek baru dan data aslinya tidak berubah. Contoh: Integer, Float, Tuple, String.
2. *Mutable*: Tipe data yang dapat diubah di tempat, sehingga perubahan **tertentu** yang dikenakan padanya akan mengubah objek itu sendiri. Contoh: List.

Misalnya, variabel <code>a</code> dan <code>b</code> tadi menunjuk ke objek Integer 4 yang sama. Kemudian, kita mengubah <code>a</code> dengan operasi matematika sebagai berikut:

~~~python
a += 2
~~~

Meskipun <code>a</code> dan <code>b</code> menunjuk ke objek yang sama, karena Integer bersifat *immutable*, yang terjadi adalah akan terbentuk objek baru yang merupakan hasil dari penjumlahan nilai a sebelumnya (2) dengan 2:

![](assets/DM2.png)

Pada grafik di atas, terlihat bahwa nilai <code>b</code> tidak akan berubah meskipun objek yang ditunjuk pada awalnya sama. Lain halnya dengan perubahan yang dikenakan pada tipe data *mutable*:

~~~python
a = ["1"]
b = a
a.append("2")
~~~

Sebelum dikenakan <code>append</code>:

![](assets/DM4.png)

Setelah dikenakan <code>append</code>:

![](assets/DM5.png)

Untuk tipe data *mutable*, perubahan yang dikenakan tidak akan membuat objek baru, namun akan mengubah objeknya itu sendiri. Sehingga, meskipun kita memodifikasi variabel <code>a</code> saja, variabel <code>b</code> juga turut berubah.

Namun, apabila kita memberikan suatu objek baru ke suatu variabel, keterkaitan antar-variabelnya akan terputus meskipun tipe datanya *mutable*, misalnya:

~~~python
a = ["1"]
b = a
a = ["2"]
~~~

Sebelum diberikan objek baru:

![](assets/DM6.png)

Setelah diberikan objek baru:

![](assets/DM7.png)



## *Parameter Passing*

Pada setiap pemanggilan fungsi yang berkaitan dengan argumen-argumen, konsep *mutability* tetap berlaku. Amatilah contoh di bawah ini:

~~~python
def sebuah_fungsi(argumen):
	print("argumen =",argumen)
random_string = "Foo"
sebuah_fungsi(random_string)
~~~

Hasil:

~~~
argumen = Foo
~~~

Dengan menjadikan <code>random_string</code> sebagai argumen <code>sebuah_fungsi</code>, maka yang terjadi adalah variabel <code>argumen</code> akan diberikan alamat dari blok memori yang disimpan oleh <code>random_string</code>, dalam hal ini adalah objek String "Foo". Perlu dicatat bahwa variabel yang merupakan bagian dari sebuah fungsi, baik yang dijadikan argumen maupun variabel-variabel yang dibuat di dalam fungsi, hanya hidup di dalam fungsi. Sehingga, variabel-variabel tersebut tidak dapat dipanggil dari luar fungsi. Contoh:

~~~python
def a_function(argumen):
    an_item = argumen
a_function("WOW")
print(argumen)
print(an_item)
~~~

Hasil:

~~~
NameError: name 'argumen' is not defined
~~~

> **Further Learning**:
>
> Konsep variabel dalam fungsi ini merupakan bagian dari pembahasan *namespace* yang merupakan materi Dasar-Dasar Pemrograman 1 dengan nama bab yang sama (*Namespaces*).

Dengan menerapkan konsep *mutability* dalam *parameter passing*, jika data tersebut bersifat *immutable*, maka perubahannya tidak akan sampai ke luar fungsi. Contoh:

~~~python
def modify_number(num):
	num += 3
    print("num =",num)
my_num = 5
modify_number(my_num)
print("my_num =",my_num)
~~~

Hasil:

~~~
num = 8
my_num = 5
~~~

Sebaliknya, jika data bersifat *mutable*, maka perubahan akan dikenakan baik di dalam maupun di luar fungsi. Contoh:

~~~python
def modify_list(lst):
	lst.append("3")
    print("lst =",lst)
my_lst = ["1"]
modify_list(my_lst)
print("my_lst =",my_lst)
~~~

Hasil:

~~~
lst = ['1', '3']
my_lst = ['1', '3']
~~~