document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.sticky-nav-toggle');
  const menu = document.querySelector('.sticky-nav-menu');
  const menuLinks = document.querySelectorAll('.sticky-nav-menu a');
  const dropdownParent = document.querySelector('.link-abt > a');
  const dropdown = document.querySelector('.abt-drdn');

  // Mobile menu toggle
  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('mobile-active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  // Mobile dropdown toggle
  dropdownParent.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.classList.toggle('show');
    }
  });

  // Active link logic (but don't close if About Us is clicked)
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove active class from all
      menuLinks.forEach(item => item.classList.remove('active'));
      this.classList.add('active');

      // Keep parent active if submenu link clicked
      if (this.closest('.abt-drdn')) {
        this.closest('.link-abt').querySelector('a').classList.add('active');
      }

      // Close menu only if it's not About Us parent link
      if (window.innerWidth <= 768 && !this.closest('.link-abt')) {
        menu.classList.remove('mobile-active');
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-times');
      }
    });
  });
});


// Back to top
window.onscroll = function () {
    toggleButton();
};
function toggleButton() {
    let button = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}function toggleButton() {
    let button = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Countdown Timer
    const eventDate = new Date("August 18, 2025 22:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance <= 0) {
            document.getElementById("countdown").innerHTML = "The event has started!";
            return;
        }

        document.getElementById("days").textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById("hours").textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("minutes").textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("seconds").textContent = Math.floor((distance % (1000 * 60)) / 1000);
    }

    setInterval(updateCountdown, 1000);




const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("imgModal");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const images = document.querySelectorAll(".zoom-img");

  let currentIndex = 0;

  function openModal(index) {
    currentIndex = index;
    modal.style.display = "flex";
    modalImg.src = images[currentIndex].src;
    modalImg.alt = images[currentIndex].alt;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
    modalImg.alt = images[currentIndex].alt;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
    modalImg.alt = images[currentIndex].alt;
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => openModal(index));
  });

  closeBtn.addEventListener("click", () => modal.style.display = "none");
  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  window.addEventListener("click", event => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  window.addEventListener("keydown", event => {
    if (modal.style.display === "flex") {
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "Escape") modal.style.display = "none";
    }
  });