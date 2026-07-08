const btn = document.querySelector(".Add-btn");
const inp = document.querySelector(".textfield");
const taskmanager = document.querySelector(".taskmanager");
const todoMain = document.querySelector(".todoMain");
const todoList = document.querySelector(".todoList");
const Close = document.querySelector(".close");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function renderTasks() {
  taskmanager.innerHTML = "";

  tasks.forEach((task, index) => {
    taskmanager.innerHTML += `
      <div class="li">
        <h3>${task}</h3>
        <div>
          <button class="btn-edit" data-index="${index}">Edit</button>
          <button class="btn-del" data-index="${index}">Delete</button>
        </div>
      </div>
    `;
  });
}
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
renderTasks();
btn.addEventListener("click", () => {
  const val = inp.value.trim();

  if (val === "") return;

  tasks.push(val);
  saveTasks();
  renderTasks();

  inp.value = "";
});

taskmanager.addEventListener("click", (e) => {
  const index = e.target.dataset.index;
  if (e.target.classList.contains("btn-del")) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }

  if (e.target.classList.contains("btn-edit")) {
    const newTask = prompt("Edit Task", tasks[index]);

    if (newTask && newTask.trim() !== "") {
      tasks[index] = newTask.trim();
      saveTasks();
      renderTasks();
    }
  }
});
todoList.addEventListener("click", () => {
  todoMain.style.display = "flex";
});
Close.addEventListener("click", () => {
  todoMain.style.display = "none";
});
