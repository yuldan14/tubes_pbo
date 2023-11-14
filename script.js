


document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    let slideIndex = 0;
    let autoSlideInterval;

    // Fungsi untuk menjalankan auto-slide setiap 5 detik
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            nextSlide();
        }, 3000);
    }

    // Fungsi untuk menghentikan auto-slide
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Fungsi untuk menampilkan slide tertentu
    function showSlide(index) {
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex = index;
        }

        const newTranslate = -slideIndex * 100;
        slider.style.transform = `translateX(${newTranslate}%)`;
    }

    // Fungsi untuk menampilkan slide berikutnya
    function nextSlide() {
        showSlide(slideIndex + 1);
    }

    // Fungsi untuk menampilkan slide sebelumnya
    function prevSlide() {
        showSlide(slideIndex - 1);
    }

    // Menambahkan event listener untuk tombol next
    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
    });

    // Menambahkan event listener untuk tombol prev
    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
    });

    // Menambahkan event listener untuk memulai auto-slide saat hover di atas slider
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    // Mulai auto-slide pertama kali
    startAutoSlide();
});


document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const dotsContainer = document.querySelector('.dots');

    let slideIndex = 0;
    let autoSlideInterval;

    // Fungsi untuk membuat titik-titik
    function createDots() {
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dotsContainer.appendChild(dot);

            dot.addEventListener('click', () => {
                stopAutoSlide();
                showSlide(index);
            });
        });

        // Tandai titik pertama sebagai aktif
        dotsContainer.children[0].classList.add('active-dot');
    }

    // Fungsi untuk memperbarui tampilan titik-titik
    function updateDots() {
        dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.remove('active-dot');
            if (index === slideIndex) {
                dot.classList.add('active-dot');
            }
        });
    }

    // ... (Fungsi lain tetap sama)

    // Menambahkan event listener untuk tombol next
    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
    });

    // Menambahkan event listener untuk tombol prev
    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
    });

    // Menambahkan event listener untuk memulai auto-slide saat hover di atas slider
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    // Mulai auto-slide pertama kali
    startAutoSlide();

    // Panggil fungsi untuk membuat titik-titik
    createDots();
});















document.addEventListener('DOMContentLoaded', function () {
    const profileBtn = document.querySelector('.profile-btn');
    const profileDropdown = document.getElementById('profileDropdown');

    // Fungsi untuk menambahkan item dropdown
    function addDropdownItem(text, action) {
        const item = document.createElement('a');
        item.textContent = text;
        item.addEventListener('click', action);
        profileDropdown.appendChild(item);
    }

    // Logika login
    let isLoggedIn = true; // Ganti dengan logika login sesuai kebutuhan Anda

    function logout() {
        // Redirect ke halaman login.html setelah logout
        window.location.href = 'login.html';
    }

    if (isLoggedIn) {
        // Jika sudah login, tampilkan opsi edit profil, edit alamat, dan info pembayaran
        addDropdownItem('Edit Profil', () => {
            // Tambahkan logika untuk menu Edit Profil
            alert('Edit Profil');
        });

        addDropdownItem('Edit Alamat', () => {
            // Tambahkan logika untuk menu Edit Alamat
            alert('Edit Alamat');
        });

        addDropdownItem('Info Pembayaran', () => {
            // Tambahkan logika untuk menu Info Pembayaran
            alert('Info Pembayaran');
        });

        addDropdownItem('Logout', logout);
    } else {
        // Jika belum login, tampilkan tombol login
        addDropdownItem('Login', () => {
            // Tambahkan logika untuk menu Login
            alert('Login');
        });
    }
});



//fungsi untuk jumlah di cart
function increment() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
    updateTotal();
  }

  function decrement() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
      updateTotal();
    }
  }

//fungsitotal harga Cart
function updateTotal() {
    var quantity = parseInt(document.getElementById('quantity').value);
    var hargaPerItem = parseInt(document.querySelector('.harga').textContent.replace(/[^0-9]/g, '')); // Hanya ambil digit angka
    var total = quantity * hargaPerItem;
   // Menggunakan toLocaleString dengan opsi untuk mengganti pemisah ribuan dengan koma
   document.querySelector('.total').innerHTML = 'Rp ' + total.toLocaleString('id-ID');
}

  // Panggil updateTotal saat halaman dimuat untuk menginisialisasi total
  window.onload = updateTotal;