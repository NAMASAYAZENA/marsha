// script.js
function showHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        
        // Mengatur posisi awal di bagian bawah layar
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.bottom = `0px`; // Memulai dari bawah
        heart.style.fontSize = `${Math.random() * 20 + 20}px`; // Ukuran acak untuk variasi
        
        // Durasi animasi acak antara 3s hingga 5s
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`; 
        
        document.body.appendChild(heart);

        // Menghapus hati setelah beberapa waktu
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
