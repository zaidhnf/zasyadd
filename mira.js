// Data login yang valid
const validUsername = "zasyad";
const validPassword = "zasyad123";

// Ambil form dan error message
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Event handler saat form disubmit
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Ambil nilai username dan password dari form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validasi login
    if (username === validUsername && password === validPassword) {
        // Jika login berhasil, arahkan ke halaman utama (misalnya "home.html")
        window.location.href = "mira.html"; // Ganti dengan halaman utama Anda
    } else {
        // Tampilkan pesan error jika login gagal
        errorMessage.style.display = 'block';
    }
});