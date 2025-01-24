// Step one Get Element
let inputs = document.querySelectorAll("#divInputs input[type='number']");
let mydiv = document.getElementById("mydiv");
let inputColor = document.querySelector("#divInputs #inputColor");
let yourNameInput = document.querySelector("#yourNameInput");


// Step 2 Create Function
let makeDesign = () => {
    isEmpty = false;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "" || inputs[i].value <= 0) {

            isEmpty = true;

            break;
        }
    }

    yourNameInput.style.display = isEmpty ? "none" : "block";
    mydiv.innerHTML = isEmpty ? "" : yourNameInput.value;
    let w = inputs[0].value;
    let h = inputs[1].value;
    let m = inputs[2].value;
    let BW = inputs[3].value;

    Object.assign(mydiv.style, {
        width: w + "px",
        height: h + "px",
        background: "black",
        margin: m + "px",
        border: `${BW}px solid black`
    })



}

let chnageDivColor = () => {
    mydiv.style.background = inputColor.value;
}
// step 3
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", makeDesign);
}
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", makeDesign);
}
inputColor.addEventListener("change", chnageDivColor);



//=============================
let writeYourName = () => {
    mydiv.innerHTML = yourNameInput.value
}

yourNameInput.addEventListener("keyup", writeYourName);

