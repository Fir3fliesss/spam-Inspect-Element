// Meminta pengguna untuk memasukkan pesan
var message = prompt("Masukkan pesan yang ingin dikirim", "‎");

// Meminta pengguna untuk memasukkan jumlah pesan yang akan dikirim
var counter = parseInt(prompt("Berapa banyak jumlah pesan yang ingin dikirim?", 10));

// Membuat event input yang akan digunakan untuk mensimulasikan input ke kotak pesan
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent("input", { bubbles: true });

// Mendapatkan elemen teks area (chat box) dengan menggunakan class name
// Ganti "className Element chat box di sini" dengan class name yang sesuai
var textbox = document.getElementsByClassName("className Element chat box di sini")[1];

// Melakukan iterasi sebanyak jumlah pesan yang diminta pengguna
for (let index = 0; index < counter; index++) {
  // Mengatur isi teks area (chat box) dengan pesan yang dimasukkan oleh pengguna
  textbox.innerHTML = message;

  // Mengirimkan event input ke teks area (chat box)
  textbox.dispatchEvent(event);

  // Mengklik tombol kirim pesan untuk mengirim pesan
  // Ganti "className Button send message" dengan class name yang sesuai
  document.getElementsByClassName("className Button send message")[0].click();
}
