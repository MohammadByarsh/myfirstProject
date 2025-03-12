const searchButton = document.getElementById("search-button");
const searchBox = document.getElementById("search-content");
const closeButton = document.getElementById("search-close");
const footerNav = document.querySelector(".footer-nav");

let isFooterVisible = window.innerWidth <= 1150;

searchButton.addEventListener("click", () => {
    searchBox.style.display = "flex";
    if (isFooterVisible) {
        footerNav.classList.add("hidden");
    }
    setTimeout(() => {
        searchBox.classList.add("show");
    }, 10);
});

closeButton.addEventListener("click", () => {
    searchBox.classList.remove("show");
    setTimeout(() => {
        searchBox.style.display = "none";
        if (window.innerWidth <= 1150 && isFooterVisible) {
            footerNav.classList.remove("hidden");
        }
    }, 400);
});

window.addEventListener("resize", () => {
    isFooterVisible = window.innerWidth <= 1150;
    if (!isFooterVisible) {
        footerNav.classList.add("hidden");
    } else {
        footerNav.classList.remove("hidden");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 1150) {
        footerNav.style.opacity = "0";
        setTimeout(() => {
            footerNav.style.opacity = "1";
            footerNav.style.animation = "footerSlideIn 0.6s ease-out";
        }, 300);
    }
});

// افکت موج در فوتر
document.querySelectorAll(".footer-nav .nav-item").forEach((item) => {
    item.addEventListener("click", (e) => {
        if (!item.querySelector(".ripple-effect")) {
            let ripple = document.createElement("span");
            ripple.classList.add("ripple-effect");
            item.appendChild(ripple);

            let x = e.clientX - item.getBoundingClientRect().left;
            let y = e.clientY - item.getBoundingClientRect().top;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
});

// مدیریت پاک کردن ورودی جستجو
const searchInput = document.getElementById("search-input");
const clearButton = document.getElementById("clear-search");

clearButton.addEventListener("click", () => {
    searchInput.value = "";
    clearButton.style.opacity = "0";
    clearButton.style.visibility = "hidden";
});

searchInput.addEventListener("input", () => {
    if (searchInput.value.length > 0) {
        clearButton.style.opacity = "1";
        clearButton.style.visibility = "visible";
    } else {
        clearButton.style.opacity = "0";
        clearButton.style.visibility = "hidden";
    }
});

window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");

    setTimeout(() => {
        preloader.classList.add("hidden"); // مخفی کردن لودینگ
    }, 500); // 0.5 ثانیه بعد از بارگذاری کامل صفحه
});

'use strict';

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = () => {
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSlidePos].classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = () => {
    currentSlidePos = (currentSlidePos + 1) % heroSliderItems.length;
    updateSliderPos();
}

const slidePrev = () => {
    currentSlidePos = (currentSlidePos - 1 + heroSliderItems.length) % heroSliderItems.length;
    updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);
heroSliderPrevBtn.addEventListener("click", slidePrev);

let autoSlideInterval;

const autoSlide = () => {
    autoSlideInterval = setInterval(slideNext, 7000); // هر 7 ثانیه اسلاید تغییر می‌کند
}

heroSlider.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
heroSlider.addEventListener("mouseleave", autoSlide);

window.addEventListener("load", () => {
    autoSlide();
});


// offer

const images = document.querySelectorAll(".slider img");
let currentIndex = 0;

const changeImage = () => {
    images.forEach((img, index) => {
        img.classList.remove("active");
    });

    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
};

setInterval(changeImage, 3000); // تغییر تصویر هر 3 ثانیه


// scroll


// نمایش دکمه وقتی صفحه اسکرول شد
document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // نمایش دکمه هنگام اسکرول
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    // عملکرد کلیک برای اسکرول به بالا
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// محو شدن هدر

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > 50) {
            // اگر صفحه اسکرول شد → هدر محو شود
            header.classList.add("hidden");
        } else {
            // فقط زمانی که کاملاً به بالا برگشت → هدر دوباره نمایش داده شود
            header.classList.remove("hidden");
        }
    });
});


// لیست خرید

document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById("cart-icon");
    const cartSidebar = document.getElementById("cart-sidebar");
    const closeCart = document.getElementById("close-cart");
    const cartOverlay = document.getElementById("cart-overlay");
  
    // نمایش سایدبار وقتی روی آیکون کلیک شود
    cartIcon.addEventListener("click", () => {
      cartSidebar.classList.add("active");
      cartOverlay.classList.add("active");
    });
  
    // بستن سایدبار وقتی دکمه ضربدر کلیک شود
    closeCart.addEventListener("click", () => {
      cartSidebar.classList.remove("active");
      cartOverlay.classList.remove("active");
    });
  
    // بستن سایدبار وقتی بیرون از آن کلیک شود
    cartOverlay.addEventListener("click", () => {
      cartSidebar.classList.remove("active");
      cartOverlay.classList.remove("active");
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const wishlistIcon = document.getElementById("heart-solid");
    const wishlistSidebar = document.getElementById("wishlist-sidebar");
    const closeWishlist = document.getElementById("close-wishlist");
    const wishlistOverlay = document.getElementById("wishlist-overlay");
  
    // نمایش سایدبار وقتی روی آیکون قلب کلیک شود
    wishlistIcon.addEventListener("click", () => {
      wishlistSidebar.classList.add("active");
      wishlistOverlay.classList.add("active");
    });
  
    // بستن سایدبار وقتی دکمه ضربدر کلیک شود
    closeWishlist.addEventListener("click", () => {
      wishlistSidebar.classList.remove("active");
      wishlistOverlay.classList.remove("active");
    });
  
    // بستن سایدبار وقتی بیرون از آن کلیک شود
    wishlistOverlay.addEventListener("click", () => {
      wishlistSidebar.classList.remove("active");
      wishlistOverlay.classList.remove("active");
    });
  });

   // انتخاب المان‌های کلیدی
const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
const loginIcon = document.querySelector(".login-icon"); // آیکون ورود
const formPopup = document.querySelector(".form-peapol");
const closeBtn = document.querySelector(".form-peapol .Close-btn");
const switchToSignupLink = document.querySelector("#signup-link");
const switchToLoginLink = document.querySelector("#login-link");
const toggleBtn = document.querySelector(".toggle-btn");
const menuIcon = document.querySelector(".toggle-btn img"); // آیکون منو
const dropdownMenu = document.querySelector(".dropdown-menu");

// نمایش فرم ورود هنگام کلیک روی دکمه ورود
if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        document.body.classList.add("show-popup");
        formPopup?.classList.remove("show-signup");
    });
}

// نمایش فرم ورود هنگام کلیک روی آیکون ورود
if (loginIcon) {
    loginIcon.addEventListener("click", () => {
        document.body.classList.add("show-popup");
        formPopup?.classList.remove("show-signup");
    });
}

// نمایش فرم ثبت‌نام هنگام کلیک روی دکمه ثبت‌نام
if (signupBtn) {
    signupBtn.addEventListener("click", () => {
        document.body.classList.add("show-popup");
        formPopup?.classList.add("show-signup");
    });
}

// بستن فرم ورود/ثبت‌نام
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        document.body.classList.remove("show-popup");
    });
}

// جابجایی از فرم ورود به ثبت‌نام
if (switchToSignupLink) {
    switchToSignupLink.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup?.classList.add("show-signup");
    });
}

// جابجایی از فرم ثبت‌نام به ورود
if (switchToLoginLink) {
    switchToLoginLink.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup?.classList.remove("show-signup");
    });
}

// نمایش/مخفی کردن منوی کشویی
if (toggleBtn && menuIcon) {
    toggleBtn.addEventListener("click", () => {
        dropdownMenu.classList.toggle("open");

        // تغییر آیکون منو
        menuIcon.src = dropdownMenu.classList.contains("open")
            ? "imagesIMG/Symbole/icons8-close-50.png"  // آیکون بستن
            : "imagesIMG/Symbole/icons8-menu-30.png";  // آیکون منو
    });
}

// نمایش فرم ورود از داخل منوی کشویی
const loginButtonInDropdown = document.querySelector(".dropdown-menu .login-btn");
if (loginButtonInDropdown) {
    loginButtonInDropdown.addEventListener("click", () => {
        document.body.classList.add("show-popup");
        formPopup?.classList.remove("show-signup");
    });
}

// نمایش/مخفی کردن رمز عبور
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("#Hide").forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            let passwordFields = this.closest("form").querySelectorAll("input[type='password'], input[type='text'][data-password]");

            passwordFields.forEach(field => {
                if (this.checked) {
                    field.type = "text";
                    field.setAttribute("data-password", "true"); // علامت‌گذاری فیلدهای رمز
                } else {
                    field.type = "password";
                }
            });
        });
    });
});



  