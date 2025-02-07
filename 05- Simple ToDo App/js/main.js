let task_input = document.getElementById("task_input");
let task_button = document.getElementById("task_button");
let all_tasks = document.getElementById("all_tasks");
let empty_task_div = document.getElementById("empty_task_div");
let deleteAllBtn = document.getElementById("deleteAllBtn");
let mydate = document.getElementById("mydate");
let validationDiv = document.getElementById("validationDiv");


let date = new Date()
let Year = date.getFullYear();
let mon = date.getMonth() + 1;
let day = date.getDate();

mydate.innerText = `${Year} / ${mon} / ${day}`;
// Check Empty Task Message
let emptyTaskFunc = () => {
    if (all_tasks.childElementCount > 0) {
        empty_task_div.classList.add("none");
        deleteAllBtn.classList.remove("none");
    } else {
        empty_task_div.classList.remove("none");
        deleteAllBtn.classList.add("none");

    }
}

// Add Task functions
let addTask = () => {
    let date = new Date()
    let Hour = date.getHours();
    let Min = date.getMinutes();
    let sec = date.getSeconds();


    let Rand1 = Math.floor(Math.random() * 150)
    let Rand2 = Math.floor(Math.random() * 150)
    let Rand3 = Math.floor(Math.random() * 150)

    let task_value = task_input.value;
    if (task_value.trim() == "") {
        validationDiv.classList.remove("none");
        task_input.style.border = "1px solid red";
    } else {

        let tasks = document.querySelectorAll(".task");

        for (let task of tasks) {
            if (task.textContent.includes(task_value)) {
                alert("this Task Alrady Have");
                return;
            }
        }

        validationDiv.classList.add("none");
        task_input.style.border = "1px solid green";
        all_tasks.innerHTML += `
        <div style="background : rgb(${Rand1},${Rand2},${Rand3})" class='task alert '>
       ${all_tasks.childElementCount + 1}  :    ${task_value}  
         <i class="deleteTask fa-solid  fa-trash-can float-end me-2"></i>
             <span class="badge float-end rounded-pill text-bg-primary  me-2">
             ${Hour}:${Min}:${sec}
             </span>
        </div>    
        `;
        task_input.value = "";
        emptyTaskFunc();
    }

}


// addEventListener On Task Function
task_button.addEventListener("click", addTask)



// delete One Item
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('deleteTask')) {
        event.target.parentElement.remove();
        emptyTaskFunc();
    }
})

// Delete All Items
let deleteAllItems = () => {
    if (confirm("Are You sure !")) {
        all_tasks.innerHTML = "";
        emptyTaskFunc();
    }
}
deleteAllBtn.addEventListener("click", deleteAllItems)



// Checked Task
document.addEventListener("click", function (event) {
    if (event.target.classList.contains('task')) {
        event.target.classList.toggle("checked");
    }
})
