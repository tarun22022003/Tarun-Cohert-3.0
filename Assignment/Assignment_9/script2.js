const dailyplanner = document.querySelector(".dailyplanner");
const Daily_Planner = document.querySelector(".dailyPlanner");
const closeDailyPlanner = document.querySelector("#closePlanner");
const resetDailyPlanner = document.querySelector("#resetPlanner");
const scheduleForm = document.querySelector(".schduleForm");

//POMOTIMER QUERY SELECTOR
const pomodoroTimer = document.querySelector(".pomodoroTimer");
const pomodoro = document.querySelector(".PomodoroTimer");
const closepomo = document.querySelector(".closepomo");
const timerDisplay = document.querySelector(".tiktok");
const startBtn = document.querySelector(".startpomo");
const pauseBtn = document.querySelector(".pausepomo");
const resetBtn = document.querySelector(".resetpomo");

// quotoes query selector

const quoteCard = document.querySelector(".motivationalQuotes");
const quotesPage = document.querySelector(".quotesPage");
const closeQuotes = document.querySelector(".closeQuotes");
const newquotes = document.querySelector("#newQuote");
const quoteText = document.querySelector("#quoteText");
const quoteAuthor = document.querySelector("#quoteAuthor");

// Daily_Planner Script
Daily_Planner.addEventListener("click", () => {
  dailyplanner.style.display = "flex";
});
closeDailyPlanner.addEventListener("click", () => {
  dailyplanner.style.display = "none";
});
pomodoroTimer.addEventListener("click", () => {
  pomodoro.style.display = "flex";
});
closepomo.addEventListener("click", () => {
  pomodoro.style.display = "none";
});

function loadFormValues() {
  const currentDailyPlanner = JSON.parse(localStorage.getItem("userEnteries"));
  if (currentDailyPlanner) {
    const data = currentDailyPlanner;
    Object.keys(data).forEach((name) => {
      const input = document.querySelector(`[name="${name}"]`);
      if (input) {
        input.value = data[name]; //
      }
    });
  }
}
loadFormValues();
scheduleForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(scheduleForm);
  const enteries = Object.fromEntries(formData.entries());
  localStorage.setItem("userEnteries", JSON.stringify(enteries));
});

resetDailyPlanner.addEventListener("click", () => {
  localStorage.removeItem("userEnteries");
  scheduleForm.reset();
});

//***/// Pomodoro_Timer Script

let minutes = 25;
let seconds = 0;

let timer = null;

function updateDisplay() {
  let min = String(minutes).padStart(2, "0");
  let sec = String(seconds).padStart(2, "0");
  timerDisplay.textContent = `${min}:${sec}`;
}
updateDisplay();
startBtn.addEventListener("click", () => {
  if (timer) return;

  timer = setInterval(() => {
    if (minutes === 0 && seconds === 0) {
      clearInterval(timer);
      timer = null;
      alert("Pomodoro Completed! 🎉");
      return;
    }
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    updateDisplay();
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});
resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;

  minutes = 25;
  seconds = 0;

  updateDisplay();
});

// **** // Motivational quotes Script

quoteCard.addEventListener("click", () => {
  quotesPage.style.display = "flex";
  getQuote();
});
closeQuotes.addEventListener("click", () => {
  quotesPage.style.display = "none";
});
newquotes.addEventListener("click", () => {
  getQuote();
});
async function getQuote() {
  const response = await fetch("https://dummyjson.com/quotes/random"); // here we wait for server's response
  const data = await response.json(); 
  // here we wait for conversion of response raw data to normal format
  quoteText.textContent = `"${data.quote}"`;
  quoteAuthor.textContent = `— ${data.author}`;
}
