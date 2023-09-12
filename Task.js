function addTask() {
    toggleMainDisplay(true);
}

function cancelTask() {
    toggleMainDisplay(false);
}

function toggleMainDisplay(show) {
    document.querySelector(".maincover").style.display = show ? "block" : "none";
}

//for add task

function Save() {
    const summary = document.getElementById("summary");
    const datetime = document.getElementById("datetime");

    if (summary.value === "" || datetime.value === "") {
        alert("Please add a task and date/time for the task.");
        return;
    }

    const todobox = document.getElementById("todobox");
    const formattedDate = new Date(datetime.value).toLocaleString();

    todobox.innerHTML += `
        <li>
            <input type="checkbox" class="chkbox" onchange="moveTaskToComplete(event)">
            ${summary.value}<br>
            <span> ⏰${formattedDate}</span>
        </li>
    `;

    summary.value = "";
    datetime.value = "";
    saveData()
    cancelTask();
}

// task move from uncomplete to complete task;
const completetask =document.querySelector("#complete_task")
const uncompletetaskList = document.getElementById("todobox");

uncompletetaskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("chkbox")) {
        const listItem = event.target.parentElement;

        if (event.target.checked) {
            const listItemClone = listItem.cloneNode(true);
            completetask.appendChild(listItemClone);

            uncompletetaskList.removeChild(listItem);

            const clonedCheckbox = listItemClone.querySelector(".chkbox");
            clonedCheckbox.disabled = true;
            listItemClone.classList.add("disabled");
            
            saveData()
        }
    }
});

//logout 
document.querySelector("#logout").addEventListener("click",()=>{
    window.location.href="Login.html"
})

//move to location panal

document.querySelector("#location").addEventListener("click",()=>{
    window.location.href="location.html"
})

// for save data in local storage
function saveData(){
    localStorage.setItem("uncomplete",uncompletetaskList.innerHTML)
    localStorage.setItem("complete",completetask.innerHTML)
}
function showData(){
    uncompletetaskList.innerHTML=localStorage.getItem("uncomplete")
    completetask.innerHTML=localStorage.getItem("complete")
}
showData()
