// Setting Up Var
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
  // استعادة البيانات من localStorage عند تحميل الصفحة
  if (localStorage.getItem("tasks")) {
    array = JSON.parse(localStorage.getItem("tasks"));
    addElement(array);
  } else {
    array = [];
  }
};

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
  addElement([data]);
  saveToLocal();
}

function addElement(task) {
  task.forEach(element => {
    let tasksDiv = document.createElement("div");
    tasksDiv.textContent = element.title;
    div.appendChild(tasksDiv);
  });

  // إخفاء رسالة "لا توجد مهام" عند إضافة عنصر جديد
  noTaskMas.style.display = "none";
  // تحديث إحصائيات المهام
  count.textContent = array.length;
  updateCompletedCount();
}

function updateCompletedCount() {
  let completedCount = array.filter(task => task.complete).length;
  completed.textContent = completedCount;
}

// remove no task message
plus.onclick = function () {
  if (input.value !== "") {
    noTaskMas.remove();
  } else {
    console.log("No message");
  }
};

// حفظ البيانات في localStorage
function saveToLocal() {
  localStorage.setItem("tasks", JSON.stringify(array));
}
