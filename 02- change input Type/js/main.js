
let input = document.querySelector("input");
let icon = document.querySelector("i");





input.addEventListener("keyup", function () {

    if (this.value.length > 0) {
        icon.classList.remove("none");
        this.style.paddingLeft = "50px";
    } else {
        icon.classList.add("none");
    }
});



let changeInputType = () => {
    if (input.type == "password") {
        input.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash")
    } else {
        input.type = "password";
        icon.classList.replace("fa-eye-slash", "fa-eye")

    }

}

icon.addEventListener("click", changeInputType);


