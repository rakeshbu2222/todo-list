// const inputBox=document.getElementById("input-box");
// const listContainer=document.getElementById("list-container");


// function addTask(){
//     if(inputBox.value === ''){
//         alert("write something");
//     }
//     else{
//         let li=document.createElement("li");
//         li.innerHTML=inputBox.value;
//         listContainer.appendChild(li);

//         let span=document.createElement("span");
//         span.innerHTML="\u00d7";
//         li.appendChild(span)
//     }
//     inputBox.value="";
//     saveData();
// }

// //connect to checked elelment and remove the Element
// listContainer.addEventListener("click",function (e){
//     if(e.target.tagName==="LI"){
//         e.target.classList.toggle("checked");
//     }
//     else if(e.target.tagName==="SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// },false);


// function saveData(){
//     localStorage.setItem("data",listContainer.innerHTML);
// }
// function showTask(){
//     listContainer.innerHTML=localStorage.getItem("data");
// }
// showTask();


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const taskCountElement = document.getElementById("count");

function addTask() {
    if (inputBox.value === '') {
        alert("Write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
    
    // Update the task count
    updateTaskCount();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        updateTaskCount();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
        
        // Update the task count
        updateTaskCount();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function updateTaskCount() {
    const taskCount = listContainer.children.length;
    taskCountElement.textContent = taskCount;
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    
    // Update the task count after loading tasks from localStorage
    updateTaskCount();
}

// Call the showTask function after defining it
showTask();
