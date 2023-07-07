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

array = [];
// plus onclick
plus.addEventListener("click", () => {
  if (input.value !== "") {
  input.focus();
    pushToArray(input.value);
    input.value = "";
    // remove no task message
    noTaskMas.remove();
    // create span element
    let mainSpan = document.createElement("span");
    // create delete bottun
    let deleteElement = document.createElement("span")
    
  }else{
    console.log("what")
  }
});

function pushToArray(text) {
  const data = {
    id: Date.now(),
    title: text,
    complete: false,
  };
  array.push(data);
  addElement(array);
  // toLocal();
  function addElement(task) {
    div.innerHTML = ""
    array.forEach((data) => {
        let tasksDiv = document.createElement("span");
        tasksDiv.textContent = data.title;
        tasksDiv.className = "task"
        tasksDiv.setAttribute("data-id", data.id)
        
        div.appendChild(tasksDiv)
      });
  }
}


// this function is empty *************
// function toLocal() {}
