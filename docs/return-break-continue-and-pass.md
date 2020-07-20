---
id: return-break-continue-and-pass
title: Return, Break, Continue, and Pass
sidebar_label: Return, Break, Continue, and Pass
---

## <code>return</code>

Kata kunci <code>return</code> digunakan dalam sebuah fungsi untuk mengembalikan suatu nilai kepada pemanggil fungsi tersebut. Kata kunci ini juga akan memberhentikan jalannya sebuah fungsi. Sehingga, apabila masih terdapat blok program di bawah <code>return</code> di dalam fungsi tersebut, maka blok program tersebut tidak akan jalan. Contohnya:

~~~python
def angka_positif(angka):
    if angka > 0:
        return True
    print("Angka bukan positif, ulangi pemanggilan fungsi")
print(angka_positif(2))
angka_positif(-1)
~~~

Pada pemanggilan fungsi <code>angka_positif(2)</code>, fungsi akan mengembalikan nilai Boolean True kepada pemanggilnya, yaitu fungsi <code>print()</code>. Sehingga, akan dicetak nilai yang dikembalikan tadi, yakni True. Fungsi <code>print("Angka bukan positif, ulangi pemanggilan fungsi")</code> tidak dijalankan oleh pemanggilan fungsi <code>angka_positif(2)</code> karena terletak setelah <code>return</code>. Di sisi lain, pemanggilan fungsi <code>angka_positif(-1)</code> akan menjalankan fungsi <code>print("Angka bukan positif, ulangi pemanggilan fungsi")</code> karena blok <code>if</code> yang mengandung <code>return</code> tidak memenuhi syarat, sehingga fungsi berjalan terus sampai selesai.

## <code>break</code>

Kata kunci <code>break</code> digunakan untuk menghentikan suatu pola perulangan yang sedang berjalan. Dengan adanya <code>break</code>, semua blok setelahnya (termasuk perulangan selanjutnya) tidak akan dilaksanakan. Contoh:

~~~python
for i in range(5):
   if(i == 3):
      break
   print(i)
print("program selesai")
~~~

Hasil:

~~~
0
1
2
program selesai
~~~

Penjelasan:

1. Pada saat nilai <code>i</code> 0, 1, dan 2, kondisi <code>if</code> tidak memenuhi syarat sehingga <code>break</code> tidak dijalankan. Iterasi berlanjut.
2. Saat bertemu dengan nilai <code>i</code> 3, kondisi <code>if</code> memenuhi syarat dan akan bertemu dengan <code>break</code>. Hal ini akan menyebabkan pola perulangan berhenti tanpa sempat mencetak nilai 3.
3. Program berlanjut dengan mencetak "program selesai".

## <code>continue</code>

Kata kunci <code>continue</code> digunakan untuk memaksa Python untuk berpindah ke perulangan selanjutnya. Dengan adanya <code>continue</code>, semua blok setelahnya **pada perulangan tersebut** tidak akan dijalankan. Program akan segera melanjutkan ke tahapan iterasi selanjutnya. Contoh:

~~~python
word = "FASILKOM UI"
for i in word:
   if(i == "I"):
      continue
   print(i, end=" ")
~~~

Hasil:

~~~
FASLKOM U
~~~

## <code>pass</code>

Kata kunci <code>pass</code> berfungsi sebagai kode kosong di mana kata kunci ini tidak melakukan apa-apa. Kata kunci ini umumnya digunakan sebagai kode *dummy* untuk sebuah kelas atau fungsi yang belum diimplementasikan. Hal ini berguna karena ketika kamu sudah mengetikkan <code>def</code> sebuah fungsi dan argumennya, kamu harus melanjutkan definisinya sampai minimal terdapat satu baris program di dalamnya. Karena <code>pass</code> juga merupakan kode yang tidak melakukan apa-apa, kamu sudah memenuhi syarat untuk membuat sebuah fungsi meskipun tidak melakukan apa-apa. Coba bandingkan perjalanan kedua program ini:

~~~python
def function_to_be_defined_later():
~~~

~~~python
def function_to_be_defined_later():
	pass
~~~

Program pertama akan menghasilkan *error* karena fungsi yang sudah dideklarasikan harus memiliki setidaknya satu baris program. Sebaliknya, program kedua akan berjalan baik-baik saja.