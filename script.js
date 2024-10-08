// Fungsi untuk menangani login
document.querySelector('#loginForm').addEventListener('submit', function(e) {
   e.preventDefault(); // Mencegah pengiriman form default
   var email = document.querySelector('#email').value; // Mengambil email
   var password = document.querySelector('#password').value; // Mengambil kata sandi

   if (!email || !password) {
       alert('Silakan masukkan email dan kata sandi!');
       return; // Stop further execution
   }

   // Simulasi login berhasil (di aplikasi nyata, data ini akan dikirim ke server)
   alert('Login berhasil!');
   
  // Menyimpan data pengguna untuk ditampilkan di profil
  localStorage.setItem("fullName", localStorage.getItem("fullName")); // Mengambil nama dari local storage
  localStorage.setItem("emailAddress", email);
  localStorage.setItem("birthDate", localStorage.getItem("birthDate")); // Mengambil tanggal lahir dari local storage
  localStorage.setItem("address", localStorage.getItem("address")); // Mengambil alamat dari local storage

   
  document.getElementById('loginFormContainer').style.display = 'none';
  document.getElementById('homePageContainer').style.display = 'block'; // Tampilkan halaman beranda setelah login
  
  
});

// Tampilkan formulir daftar
document.getElementById('showSignUp').addEventListener('click', function(e) {
  e.preventDefault(); // Mencegah perilaku default tautan
  document.getElementById('loginFormContainer').style.display = 'none';
  document.getElementById('signupFormContainer').style.display = 'block';
});

// Tampilkan formulir login
document.getElementById('showLogin').addEventListener('click', function(e) {
  e.preventDefault(); // Mencegah perilaku default tautan
  document.getElementById('signupFormContainer').style.display = 'none';
  document.getElementById('loginFormContainer').style.display = 'block';
});

// Fungsi untuk menangani daftar
document.querySelector('#signupForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah pengiriman form default
  var newEmail = document.querySelector('#newEmail').value; // Mengambil email baru
  var newPassword = document.querySelector('#newPassword').value; // Mengambil kata sandi baru
  var confirmPassword = document.querySelector('#confirmPassword').value; // Mengambil konfirmasi kata sandi

  if (!newEmail || !newPassword || !confirmPassword) {
     alert('Silakan isi semua field!');
     return; // Stop further execution
  }

  if (newPassword !== confirmPassword) {
     alert('Kata sandi tidak cocok!');
     return; // Stop further execution
  }

  // Simulasi daftar berhasil (di aplikasi nyata, data ini akan dikirim ke server)
  alert('Akun berhasil dibuat! Anda sekarang dapat login.');

  // Simpan informasi pendaftaran ke local storage untuk ditampilkan nanti
  localStorage.setItem("fullName", document.querySelector('#fullNameInput').value);
  localStorage.setItem("birthDate", document.querySelector('#birthDateInput').value);
  
});

// Navigasi halaman beranda
document.getElementById('homeLink').addEventListener('click', function() {
  document.getElementById('homeContent').style.display = 'block';
  document.getElementById('profileContent').style.display = 'none';
  document.getElementById('searchContent').style.display = 'none';
});

document.getElementById('profileLink').addEventListener('click', function() {
  document.getElementById('homeContent').style.display = 'none';
  document.getElementById('profileContent').style.display = 'block';

  // Menampilkan nama pengguna di profil
  displayAccountInfo();
});

document.getElementById('searchLink').addEventListener('click', function() {
  document.getElementById('homeContent').style.display = 'none';
  document.getElementById('profileContent').style.display = 'none';
  document.getElementById('searchContent').style.display = 'block';
});

// Fungsi untuk menampilkan informasi akun dari local storage
function displayAccountInfo() {
  document.getElementById("fullName").textContent = localStorage.getItem("fullName");
  document.getElementById("emailAddress").textContent = localStorage.getItem("emailAddress");
  document.getElementById("birthDate").textContent = localStorage.getItem("birthDate");
  document.getElementById("address").textContent = localStorage.getItem("address");
}

// Fungsi untuk toggle visibilitas kata sandi
function togglePasswordVisibility(passwordFieldId) {
  const passwordField = document.getElementById(passwordFieldId);

  if (passwordField.type === "password") {
     passwordField.type = "text"; // Ubah menjadi teks
  } else {
     passwordField.type = "password"; // Kembalikan ke kata sandi
  }
}
