document.addEventListener("DOMContentLoaded", () => {
  // Ambil semua elemen dengan class .slider
  document.querySelectorAll(".slider").forEach((slider) => {
    const images = slider.querySelectorAll("img");

    // Kalau cuma 1 gambar, skip (bukan slider)
    if (images.length <= 1) return;

    let index = 0;
    const total = images.length;

    // Set lebar slider sesuai jumlah gambar
    slider.style.width = `${total * 100}%`;

    images.forEach((img) => {
      img.style.width = `${100 / total}%`;
    });

    // Auto slide
    setInterval(() => {
      index++;

      if (index >= total) {
        index = 0;
      }

      slider.style.transform = `translateX(-${index * (100 / total)}%)`;
    }, 3000); 
  });
});
