const inp = document.querySelector(".textfield");
const btn = document.querySelector(".Add-btn");
const taskContainer = document.querySelector(".task-container");

btn.addEventListener("click", () => {
  const value = inp.value;

  if (value.trim() === "") return;

  taskContainer.innerHTML += `<div class='li'>
    <h3>${value}</h3>
    <div>
    <button  class = "btn-edit"> Edit</button>
    <button  class = "btn-del"> Delete</button>
    </div>
    </div>`;

  inp.value = "";
});

taskContainer.addEventListener("click", (e) => {

    if (e.target.classList.contains("btn-del")) {
        e.target.closest(".li").remove();
    }

    if (e.target.classList.contains("btn-edit")) {

        const taskText = e.target
            .closest(".li")
            .querySelector("h3");

        const newText = prompt(
            "Edit Task",
            taskText.textContent
        );

        if (newText && newText.trim() !== "") {
            taskText.textContent = newText;
        }
    }
});




