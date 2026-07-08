const dailyplanner = document.querySelector(".dailyplanner");
const Daily_Planner = document.querySelector(".dailyPlanner");
const closeDailyPlanner = document.querySelector("#closePlanner");
const submitDailyPlanner = document.querySelector("#submitPlanner");


Daily_Planner.addEventListener("click",()=>{
dailyplanner.style.display = "flex";
})
closeDailyPlanner.addEventListener("click",()=>{
dailyplanner.style.display = "none";
})


submitDailyPlanner.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log(e.target[0].value);
  

})
