const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const dropDownMenuChevron = document.querySelector(".submenu-chevron")
const chevronLeft = document.querySelector(".chevron-left")
const chevronDown = document.querySelector(".chevron-down")
const submenu = document.querySelector(".submenu")
const navOpenBtn = document.querySelector(".nav-icon")
const cartOpenBtn = document.querySelector(".cart-icon")
const cartCloseBtn = document.querySelector(".cart-close-btn")
const navCloseBtn = document.querySelector(".nav-close-btn")
const overlay = document.querySelector(".overlay")
const mobileNav = document.querySelector(".mobile-nav")
const cartNav = document.querySelector(".cart-nav")

const hideNav = () => {
    overlay.classList.remove("overlay--visible")
    mobileNav.classList.add("-right-64")
    mobileNav.classList.remove("right-0")
}
const hideCart = () => {
    overlay.classList.remove("overlay--visible")
    cartNav.classList.add("-left-64")
    cartNav.classList.remove("left-0")
}
toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    })
})

dropDownMenuChevron.addEventListener("click", (e) => {
    submenu.classList.toggle("submenu--open")
    chevronLeft.parentElement.parentElement.classList.toggle("text-orange-300")
    chevronLeft.classList.toggle("hidden")
    chevronDown.classList.toggle("hidden")
})

navOpenBtn.addEventListener("click", (e) => {
    overlay.classList.add("overlay--visible")
    mobileNav.classList.remove("-right-64")
    mobileNav.classList.add("right-0")
})

navCloseBtn.addEventListener("click", hideNav)

overlay.addEventListener("click", hideNav)


cartOpenBtn.addEventListener("click", () => {
    overlay.classList.add("overlay--visible")
    cartNav.classList.remove("-left-64")
    cartNav.classList.add("left-0")
})

cartCloseBtn.addEventListener("click", hideCart)

overlay.addEventListener("click", hideCart)