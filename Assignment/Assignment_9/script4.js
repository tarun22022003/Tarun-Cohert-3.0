const dailyGoals = document.querySelector(".dailyGoals");
const dailyGoal = document.querySelector(".dailyGoal");
const closeDailyGoal = document.querySelector("#closeDailyGoal");
const addnewGoal = document.querySelector("#addnewGoal");
const goalsForm = document.querySelector(".goalsForm");
const closeCreate = document.querySelector("#closeCreate");
const goalcreateForm = document.querySelector("#goalcreateForm");
const goalsCard = document.querySelector(".goalsCard");
const deleteAllGoal = document.querySelector("#deleteAllGoal");

dailyGoal.addEventListener("click", () => {
  dailyGoals.style.display = "flex";
});
closeDailyGoal.addEventListener("click", () => {
  dailyGoals.style.display = "none";
});

addnewGoal.addEventListener("click", () => {
  goalsForm.style.display = "flex";
});

closeCreate.addEventListener("click", (e) => {
  e.preventDefault();
  goalsForm.style.display = "none";
});


deleteAllGoal.addEventListener("click",()=>{
  goalData = [];
  localStorage.setItem("Goals", JSON.stringify(goalData));

  displayGoal();
})


let goalData = JSON.parse(localStorage.getItem("Goals")) || [];

let displayGoal = function () {
  goalsCard.innerHTML = "";
  goalData.forEach((elem, index) => {
    goalsCard.innerHTML += `<div class="dailyGoalsCard">
            <h1 id="goalCardHead">${elem.head}</h1>
            <p id="goalCardDesc">${elem.description}</p>
            <div class="cardbutton">
              <button onclick="completedGoal(this)" id="goalComplete">Completed</button>
              <button onclick="deleteGoal(${elem.id})" id="goalDelete">Delete</button>
            </div>
          </div>`;
  });
};
displayGoal();

let goalFunction = (event) => {
  let head = event.target[0].value;
  let description = event.target[1].value;
  if (head.trim() === "" || description.trim() === "") {
    return;
  }
  let obj = {
    id: Math.floor(Math.random() * 10),
    head,
    description,
  };
  goalData.push(obj);
  localStorage.setItem("Goals", JSON.stringify(goalData));
};

goalcreateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  goalFunction(event);
  displayGoal();
  goalcreateForm.reset();
  goalsForm.style.display = "none";
});

const deleteGoal = (delete_id) => {
  goalData = goalData.filter((goal) => goal.id !== delete_id);
  localStorage.setItem("Goals", JSON.stringify(goalData));

  displayGoal();
};

const completedGoal = (button) => {
  const card = button.closest(".dailyGoalsCard");

  card.style.background = "linear-gradient(135deg, #28a745, #66bb6a)";

  button.textContent = "✓ Completed";
  button.disabled = true;
};

