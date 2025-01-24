let body = document.body;
let icon = document.querySelector("i");
let cards = document.querySelectorAll(".card")
let nav = document.querySelector("nav");


let changeTheem = () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        for (let i = 0; i < cards.length; i++) {

            cards[i].classList.remove("card-dark")
        }
        icon.classList.replace('fa-regular', 'fa-solid')
        icon.classList.replace('light', 'dark')
        nav.classList.replace("bg-dark", "bg-light");
        nav.classList.replace("navbar-dark", "navbar-light");
    } else {
        body.classList.add("dark-mode");
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add("card-dark")
        }
        nav.classList.replace("bg-light", "bg-dark");
        nav.classList.replace("navbar-light", "navbar-dark");
        icon.classList.replace('fa-solid', 'fa-regular')
        icon.classList.replace('dark', 'light')
    }
}

icon.addEventListener("click", changeTheem);