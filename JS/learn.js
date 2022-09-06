// ======================Start To Do Lst======================

let countainer = document.querySelector(".containerTwo");
let form = document.querySelector("form");
let typeText = document.querySelector(".typeTask");
let addTask = document.querySelector(".addTask");

function addClick() {
  addTask.addEventListener("click", (e) => {
    if (typeText.value === "") {
      preventDefault();
    }

    let taskCountainer = document.createElement("div");
    taskCountainer.className = "taskCountainer";

    let newTask = document.createElement("input");
    newTask.className = "newTask";
    newTask.setAttribute("type", "text");
    newTask.setAttribute("readonly", "readonly");
    newTask.classList.add("active");

    let edit = document.createElement("span");
    edit.className = "edit";
    edit.innerHTML = "Edit";

    let delet = document.createElement("span");
    delet.className = "delet";
    delet.innerHTML = "Delete";

    newTask.value = typeText.value;
    taskCountainer.appendChild(newTask);
    taskCountainer.appendChild(edit);
    taskCountainer.appendChild(delet);
    countainer.appendChild(taskCountainer);

    edit.addEventListener("click", (e) => {
      if (edit.innerText === "Edit") {
        edit.innerText = "Save";
        newTask.focus();
        newTask.removeAttribute("readonly");
      } else {
        edit.innerText = "Edit";
        newTask.setAttribute("readonly", "readonly");
      }
    });

    delet.addEventListener("click", (e) => {
      taskCountainer.remove();
    });

    typeText.value = "";
  });
}

addClick();

// ======================End To Do List======================
