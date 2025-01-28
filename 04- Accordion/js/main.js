let accourBtn = document.getElementsByClassName("accourBtn");
let accor = document.getElementsByClassName("accor");
let icons = document.querySelectorAll(".accourBtn i")



for (let i = 0; i < accourBtn.length; i++) {
    accourBtn[i].addEventListener("click", function () {


        for (let x = 0; x < accor.length; x++) {
            if (x != i) {
                accor[x].style.padding = "0px";
                accor[x].style.height = null;
                icons[x].style.transform = "rotate(0deg)";
                accourBtn[x].classList.remove("active");
            }
        }

        if (accor[i].style.height == 0) {
            accor[i].style.height = accor[i].scrollHeight + "px";
            accor[i].style.padding = "20px";
            icons[i].style.transform = "rotate(-180deg)";
            accourBtn[i].classList.add("active");
        } else {
            accor[i].style.padding = "0px";
            accor[i].style.height = null;
            icons[i].style.transform = "rotate(0deg)";
            accourBtn[i].classList.remove("active");
        }






    })
}


// div 4 index
// button 4 index
// dev index == button index  > Open
// LOOP الباقي close

