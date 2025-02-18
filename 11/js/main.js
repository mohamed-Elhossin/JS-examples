let product_Name = document.getElementById("product_Name");
let product_category = document.getElementById("product_category");
let allCostInputs = document.querySelectorAll("#allCostInputs input");
let productImg = document.getElementById("productImg");
let productCount = document.getElementById("productCount");
let addProductBtn = document.getElementById("addProductBtn");
let taxCostSpan = document.getElementById("taxCost");
let discountCostSpan = document.getElementById("discountCost");
let empty_task_div = document.getElementById("empty_task_div");
let tbody = document.getElementById("tbody");
let product_div = document.getElementById("product_div");
let layout = document.getElementById("layout");
// step 2 This Json Array
let allProducts;
if (localStorage.myProduct != null) {
    allProducts = JSON.parse(localStorage.getItem("myProduct"));
    console.log(allProducts);
} else {
    allProducts = [];
}

// step 1 calc Function
let CalcCost = () => {
    let cost = allCostInputs[0].value;
    let tax = allCostInputs[1].value;
    let myProfit = allCostInputs[2].value;
    let discount = allCostInputs[3].value;
    // 1000 * 10%
    // 100
    let taxCost = +cost * (+tax / 100);
    allCostInputs[4].value = +cost + +taxCost + +myProfit;
    let saleCost = +allCostInputs[4].value;
    let discountCost = +saleCost * (+discount / 100);
    discountCostSpan.innerHTML = `Your Discount Cost ${Math.ceil(discountCost)}`;
    let mySaleCostAfterDiscout = +saleCost - +discountCost;
    allCostInputs[4].value = Math.floor(+mySaleCostAfterDiscout);
    taxCostSpan.innerHTML = `Your Tax Cost ${Math.ceil(taxCost)}`;
    allCostInputs[5].value = Math.ceil(+myProfit - +discountCost);
}
// step 1 make key up event on calc cost inputs
for (let i = 0; i < allCostInputs.length; i++) {
    allCostInputs[i].addEventListener("keyup", CalcCost);
}

// step 2 Create Object and push this object in array
let createObject = () => {
    let newProductObject = {
        name: product_Name.value,
        category: product_category.value,
        cost: allCostInputs[0].value,
        tax: allCostInputs[1].value,
        profit: allCostInputs[2].value,
        discout: allCostInputs[3].value,
        sale_cost: allCostInputs[4].value,
        netProfit: allCostInputs[5].value,
        image_url: productImg.value,
        productCount: productCount.value,
    }
    allProducts.push(newProductObject)
    console.log(newProductObject);

    console.log(allProducts);

    localStorage.setItem("myProduct", JSON.stringify(allProducts));
    showData();
    checkEmpty();

}
// step 2 
addProductBtn.addEventListener("click", createObject);


// step 3 
let checkEmpty = () => {
    if (tbody.childElementCount == 0 && allProducts.length == 0) {
        empty_task_div.classList.remove("none");
        product_div.classList.add("none");
    } else {
        empty_task_div.classList.add("none");
        product_div.classList.remove("none");
    }
}
checkEmpty();
let showData = () => {
    checkEmpty();
    let tableRow = '';

    for (let i = 0; i < allProducts.length; i++) {
        tableRow += `
        <tr> 
              <th>  ${i + 1}   </th>
        <th>  ${allProducts[i].name}   </th>
        <th>  ${allProducts[i].category}   </th>
     <th><i onclick="viewModelOneItem(${i})" class="fa-regular fa-eye text-info"></i></th>
     <th><i class="fa-solid fa-pen-to-square text-warning"></i></th>
     <th><i onclick="remove_one_item(${i})"  class="fa-solid fa-trash-can text-danger"></i></th>
        </tr>
        `
    }

    tbody.innerHTML = tableRow;


}

showData();


let viewModelOneItem = (i) => {

    console.log(allProducts[i]);

    layout.innerHTML = ` <div class="modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${allProducts[i].name}</h5>
                    <button type="button" onclick="closeModel()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                 <h6 class="modal-title">Category :  ${allProducts[i].category}</h6>
                 <hr>
                 <h6 class="modal-title">Cost : ${allProducts[i].cost}</h6>
                 <hr>
                 <h6 class="modal-title">Tac :  ${allProducts[i].tax}</h6>
                 <hr>
                 <h6 class="modal-title"> Profit : ${allProducts[i].profit}</h6>
                 <hr>
                 <h6 class="modal-title">Discount : ${allProducts[i].discout}</h6>
                 <hr>
                 <h6 class="modal-title"> Sale Cost :  ${allProducts[i].sale_cost}</h6>
                 <hr>
                 <h6 class="modal-title"> Net Profit : ${allProducts[i].netProfit}</h6>
                 <hr>
                 Image : 
                 <img width="90" src="${allProducts[i].image_url}">
                </div>
                <div class="modal-footer">
                    <button type="button" onclick="closeModel()" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>`;
}


let closeModel = () => {
    layout.innerHTML = "";
}



let remove_one_item = (i) => {
    if (confirm("Are Your Sure")) {
        allProducts.splice(i, 1);
        localStorage.myProduct = JSON.stringify(allProducts);
        showData();
        checkEmpty();
    }

}