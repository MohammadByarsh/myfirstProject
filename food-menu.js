// لودینگ صفحه

window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");

    setTimeout(() => {
        preloader.classList.add("hidden"); // مخفی کردن لودینگ
    }, 500); // 0.5 ثانیه بعد از بارگذاری کامل صفحه
});

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


// منوی غذا ها 

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const foodItems = document.querySelectorAll(".food-item");

    // تابع تغییر دسته‌بندی
    function filterMenu(category) {
        foodItems.forEach((item) => {
            if (item.getAttribute("data-category") === category) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    // تنظیم پیش‌فرض (نمایش صبحانه)
    filterMenu("breakfast");

    // افزودن رویداد کلیک برای دسته‌بندی‌های منو
    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", function () {
            // حذف کلاس `active` از همه آیتم‌ها
            menuItems.forEach((item) => item.classList.remove("active"));
            this.classList.add("active");

            // گرفتن `data-category` دسته انتخاب‌شده
            const category = this.getAttribute("data-category");
            filterMenu(category);
        });
    });
});


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

// لسیت خرید

document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById("cart-icon");
    const cartSidebar = document.getElementById("cart-sidebar");
    const closeCart = document.getElementById("close-cart");
    const cartOverlay = document.getElementById("cart-overlay");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartTotal = document.getElementById("cart-total");
  
    let cart = [];
  
    // نمایش سایدبار سبد خرید
    cartIcon.addEventListener("click", () => {
      cartSidebar.classList.add("active");
      cartOverlay.classList.add("active");
    });
  
    // بستن سایدبار
    closeCart.addEventListener("click", () => {
      cartSidebar.classList.remove("active");
      cartOverlay.classList.remove("active");
    });
  
    cartOverlay.addEventListener("click", () => {
      cartSidebar.classList.remove("active");
      cartOverlay.classList.remove("active");
    });
  
    // اضافه کردن آیتم به سبد خرید
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const foodItem = event.target.closest(".food-item");
        const name = foodItem.querySelector("h3").innerText;
        const price = parseInt(foodItem.querySelector(".price").innerText.replace(" تومان", "").replace(",", ""));
        const imageSrc = foodItem.querySelector("img").src;
  
        const existingItem = cart.find(item => item.name === name);
  
        if (existingItem) {
          existingItem.quantity++;
        } else {
          cart.push({ name, price, imageSrc, quantity: 1 });
        }
  
        updateCartUI();
      });
    });
  
    // آپدیت لیست خرید
    function updateCartUI() {
      cartItemsContainer.innerHTML = "";
  
      let total = 0;
  
      cart.forEach((item, index) => {
        total += item.price * item.quantity;
  
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
  
        cartItem.innerHTML = `
          <img src="${item.imageSrc}" alt="${item.name}">
          <div class="cart-item-info">
            <p class="cart-item-name">${item.name}</p>
            <p class="cart-item-price">${(item.price * item.quantity).toLocaleString()} تومان</p>
          </div>
          <div class="quantity-controls">
            <button class="quantity-btn decrease" data-index="${index}">➖</button>
            <span class="quantity">${item.quantity}</span>
            <button class="quantity-btn increase" data-index="${index}">➕</button>
          </div>
        `;
  
        cartItemsContainer.appendChild(cartItem);
      });
  
      cartTotal.innerText = total.toLocaleString() + " تومان";
  
      // اضافه کردن Event به دکمه‌های کم و زیاد کردن تعداد
      document.querySelectorAll(".increase").forEach(button => {
        button.addEventListener("click", (event) => {
          const index = event.target.dataset.index;
          cart[index].quantity++;
          updateCartUI();
        });
      });
  
      document.querySelectorAll(".decrease").forEach(button => {
        button.addEventListener("click", (event) => {
          const index = event.target.dataset.index;
          cart[index].quantity--;
          if (cart[index].quantity === 0) {
            cart.splice(index, 1);
          }
          updateCartUI();
        });
      });
    }
  });
  
  

  document.addEventListener("DOMContentLoaded", () => {
    const wishlistIcon = document.getElementById("heart-solid"); // آیکون لیست علاقه‌مندی‌ها در هدر
    const wishlistSidebar = document.getElementById("wishlist-sidebar"); // سایدبار علاقه‌مندی‌ها
    const closeWishlist = document.getElementById("close-wishlist"); // دکمه بستن سایدبار
    const wishlistOverlay = document.getElementById("wishlist-overlay"); // پس‌زمینه محو
    const wishlistItemsContainer = document.querySelector(".wishlist-items"); // بخش آیتم‌ها
    const wishlistButtons = document.querySelectorAll(".wishlist"); // همه دکمه‌های قلب در محصولات
  
    let wishlist = [];
  
    // باز کردن سایدبار علاقه‌مندی‌ها
    wishlistIcon.addEventListener("click", () => {
      wishlistSidebar.classList.add("active");
      wishlistOverlay.classList.add("active");
    });
  
    // بستن سایدبار علاقه‌مندی‌ها
    closeWishlist.addEventListener("click", () => {
      wishlistSidebar.classList.remove("active");
      wishlistOverlay.classList.remove("active");
    });
  
    wishlistOverlay.addEventListener("click", () => {
      wishlistSidebar.classList.remove("active");
      wishlistOverlay.classList.remove("active");
    });
  
    // اضافه کردن یا حذف محصول از علاقه‌مندی‌ها
    wishlistButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const foodItem = event.target.closest(".food-item");
        const name = foodItem.querySelector("h3").innerText;
        const imageSrc = foodItem.querySelector("img").src;
  
        const existingItem = wishlist.find((item) => item.name === name);
  
        if (!existingItem) {
          wishlist.push({ name, imageSrc });
          button.classList.add("active"); // تغییر رنگ آیکون به نارنجی
        } else {
          wishlist = wishlist.filter((item) => item.name !== name);
          button.classList.remove("active"); // برگشت به رنگ عادی
        }
  
        updateWishlistUI();
      });
    });
  
    // بروزرسانی لیست علاقه‌مندی‌ها در UI
    function updateWishlistUI() {
      wishlistItemsContainer.innerHTML = "";
  
      if (wishlist.length === 0) {
        wishlistItemsContainer.innerHTML =
          "<p>هنوز هیچ آیتمی به لیست علاقه‌مندی‌های شما اضافه نشده است.</p>";
        return;
      }
  
      wishlist.forEach((item, index) => {
        const wishlistItem = document.createElement("div");
        wishlistItem.classList.add("wishlist-item");
  
        wishlistItem.innerHTML = `
          <img src="${item.imageSrc}" alt="${item.name}">
          <p>${item.name}</p>
          <span class="remove" data-index="${index}">&times;</span>
        `;
  
        wishlistItemsContainer.appendChild(wishlistItem);
      });
  
      // حذف محصول از لیست علاقه‌مندی‌ها
      document.querySelectorAll(".remove").forEach((button) => {
        button.addEventListener("click", (event) => {
          const index = event.target.dataset.index;
          wishlist.splice(index, 1);
          updateWishlistUI();
        });
      });
    }
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


document.addEventListener("DOMContentLoaded", function () {
  const cartCount = document.getElementById("cart-count");
  const wishlistCount = document.getElementById("wishlist-count");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const addToWishlistButtons = document.querySelectorAll(".wishlist");

  let cartItems = 0;
  let wishlistItems = 0;

  // اضافه کردن به سبد خرید
  addToCartButtons.forEach(button => {
      button.addEventListener("click", function () {
          cartItems++;
          updateCount(cartCount, cartItems);
      });
  });

  // اضافه کردن به لیست علاقه‌مندی
  addToWishlistButtons.forEach(button => {
      button.addEventListener("click", function () {
          if (!button.classList.contains("added")) { 
              wishlistItems++;
              button.classList.add("added");
          } else {
              wishlistItems--;
              button.classList.remove("added");
          }
          updateCount(wishlistCount, wishlistItems);
      });
  });

  function updateCount(element, count) {
      element.textContent = count;
      if (count > 0) {
          element.classList.add("show-badge");
      } else {
          element.classList.remove("show-badge");
      }
  }
});

  
  