"use strict";
// Setting Up  Var
let input = document.querySelector(".add-task input");
let plus = document.querySelector(".add-task .plus");
let div = document.querySelector(".tasks-content");
let noTaskMas = document.querySelector(".no-tasks-message");
let taskStats = document.querySelector(".task-stats");
let count = document.querySelector(".tasks-count span");
let completed = document.querySelector(".tasks-completed span");
// focus to input onload
window.onload = function () {
  input.focus();
};
// Add placeholder text
input.placeholder = "Add Your Task";

let array = [];

if (localStorage.getItem("tasks")) {
  array = JSON.parse(localStorage.getItem("tasks"));
}
getFromLocal();
// plus onclick
plus.addEventListener("click", () => {
  if (input.value === "") {
    console.log("noTaskMas");
  } else {
    // remove no task message
    noTaskMas.remove();
    input.focus();
    pushToArray(input.value);
    input.value = "";
    calculateTask();
  }
});

// click delete btn
div.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    //remove element from local storage
    deletFLocal(e.target.parentElement.getAttribute("data-id"));
    //remove element from page
    e.target.parentElement.remove();
  }
  //toggle to done classList
  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
  }
  calculateTask();
});

function pushToArray(text) {
  const data = {
    id: Date.now(),
    title: text,
    complete: false,
  };
  // push to myArrayTask
  array.push(data);
  // add tasks to page
  addElement(array);
  // add tasks to local storage from array
  addLocal(array);
}
function addElement(array) {
  div.innerHTML = "";
  array.forEach((data) => {
    // create span element
    let tasksDiv = document.createElement("span");
    tasksDiv.textContent = data.title;
    tasksDiv.className = "task-box";
    if (data.complete) {
      tasksDiv.className = "task-box finished";
    }
    tasksDiv.setAttribute("data-id", data.id);
    // create delete bottun
    let deleteElement = document.createElement("span");
    deleteElement.className = "delete";
    deleteElement.textContent = "delete";
    tasksDiv.appendChild(deleteElement);
    div.appendChild(tasksDiv);
  });
}
function addLocal(array) {
  localStorage.setItem("tasks", JSON.stringify(array));
}
function getFromLocal() {
  let data = localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElement(tasks);
  }
}
function calculateTask() {
  // Calculate All Tasks
  count.innerHTML = document.querySelectorAll(
    ".tasks-content .task-box"
  ).length;
  completed.innerHTML = document.querySelectorAll(
    ".tasks-content .finished"
  ).length;
}

function deletFLocal(taskId) {
  array = array.filter((task) => task.id != taskId);
  addLocal(array);
}
