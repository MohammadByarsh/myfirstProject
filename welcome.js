// انتخاب المان‌های کلیدی
const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
const formPopup = document.querySelector(".form-peapol");
const closeBtn = document.querySelector(".form-peapol .Close-btn");
const switchToSignupLink = document.querySelector("#signup-link");
const switchToLoginLink = document.querySelector("#login-link");
const toggleBtn = document.querySelector('.toggle-btn');
const menuIcon = document.querySelector('.toggle-btn img'); // گرفتن آیکون منو
const dropdownMenu = document.querySelector('.dropdown-menu');


// نمایش فرم ورود
if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        document.body.classList.add("show-popup");
        formPopup?.classList.remove("show-signup");
    });
}

// نمایش فرم ثبت‌نام
if (signupBtn) {
    signupBtn.addEventListener("click", () => {
        document.body.classList.add("show-popup");
        formPopup?.classList.add("show-signup");
    });
}

// بستن پاپ‌آپ
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        document.body.classList.remove("show-popup");
    });
}

// جابجایی به فرم ثبت‌نام
if (switchToSignupLink) {
    switchToSignupLink.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup?.classList.add("show-signup");
    });
}

// جابجایی به فرم ورود
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
        
        // تغییر آیکون بر اساس وضعیت منو
        if (dropdownMenu.classList.contains("open")) {
            menuIcon.src = "imagesIMG/Symbole/icons8-close-50.png"; // آیکون بستن
        } else {
            menuIcon.src = "imagesIMG/Symbole/icons8-menu-30.png"; // آیکون منو
        }
    });
}

// باز کردن فرم ورود از داخل منوی کشویی
const loginButtonInDropdown = document.querySelector('.dropdown-menu .login-btn');
if (loginButtonInDropdown) {
    loginButtonInDropdown.addEventListener("click", () => {
        document.body.classList.add("show-popup");
        formPopup?.classList.remove("show-signup");
    });
}
//نمایش Password
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




window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");

    setTimeout(() => {
        preloader.classList.add("hidden"); // مخفی کردن لودینگ
    }, 500); // 0.5 ثانیه بعد از بارگذاری کامل صفحه
});
