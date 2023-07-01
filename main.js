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
    pushToArray(input.value);
    input.value = "";
    console.log(array);
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
}

function addElement(task) {


//   task.forEach(element => {
//     let tasksDiv = document.createElement("");
//   });
}

// remove no task message

plus.onclick = function(){
  if (input.value !== '') {
    noTaskMas.remove()
  }else{
    console.log("No message");
    
  }
}
// this function is emty *************
// function toLocal() {}