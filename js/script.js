document.addEventListener('DOMContentLoaded', function() {

    let userName = prompt("Selamat datang! Silakan masukkan nama Anda:", "User");

    if (!userName) {
        userName = "User";
    }
    
    const welcomeHeading = document.querySelector('.welcome-section h1');
    const welcomeParagraph = document.querySelector('.welcome-section p');
    
    if (welcomeHeading) {
        welcomeHeading.textContent = `Halo ${userName}!`;
    }
    if (welcomeParagraph) {
        welcomeParagraph.textContent = "Selamat Datang di Website ini";
    }

    const messageForm = document.getElementById('message-form');

    messageForm.addEventListener('submit', function(event){
        event.preventDefault();

        const nama = document.getElementById('nama').value;
        const tanggalLahir = document.getElementById('tanggal-lahir').value;
        
        const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
        const pesan = document.getElementById('pesan').value;
        
        
        if (!nama || !tanggalLahir || !pesan) {
            alert("Semua kolom harus diisi!");
            return;
        }

        
        document.getElementById('output-nama').textContent = nama;
        document.getElementById('output-tanggal-lahir').textContent = tanggalLahir;
        document.getElementById('output-jenis-kelamin').textContent = jenisKelamin;
        document.getElementById('output-pesan').textContent = pesan;
        document.getElementById('current-time').textContent = new Date().toLocaleString('id-ID');

        messageForm.reset();
    });

});