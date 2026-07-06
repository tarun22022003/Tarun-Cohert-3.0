const addTransc = document.querySelector(".add-btn");
const boxOverlay = document.querySelector(".overlay");
const closeOverlay = document.querySelector("#close");
const incomeBox = document.querySelector("#income");
const expenseBox = document.querySelector("#expense");
const balanceBox = document.querySelector("#balance");
const countTransc = document.querySelector("#transactionCount");
const transactionBoxSubmit = document.querySelector("#transactionBox");

addTransc.addEventListener("click", () => {
  boxOverlay.style.display = "flex";
});

closeOverlay.addEventListener("click", () => {
  boxOverlay.style.display = "none";
});

let transacDetails = JSON.parse(localStorage.getItem("transDetailsUpdate")) || [];
let transCount = Number(localStorage.getItem("transactionCount")) || 0;
countTransc.textContent = transCount;


let newBalance = Number(localStorage.getItem("currentBalance")) || 0;
let newExpense = Number(localStorage.getItem("totalExpense")) || 0;
balanceBox.textContent=newBalance;
expenseBox.textContent=newExpense;
let storedata = (event) => {
  let transtype = event.target[0].value;
  let transdescription = event.target[1].value;
  let transamount = event.target[2].value;
  let transdate = event.target[3].value;
  let transcategory = event.target[4].value;

  if (
    transtype.trim() === "" ||
    transdescription.trim() === "" ||
    transamount.trim() === "" ||
    transdate.trim() === "" ||
    transcategory.trim()===""
  ) {
    return;
  }
  let transDataObj = {
    transID:transCount,
    transtype,
    transdescription,
    transamount,
    transdate,
    transcategory,
  };

  return transDataObj;
  
};

transactionBoxSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  let transDetailsData = storedata(event);
  if (!transDetailsData) return;
  transacDetails.push(transDetailsData);
  transCount = transacDetails.length;
  countTransc.textContent = transCount;
  localStorage.setItem("transactionCount", transCount);
  // countTransc.textContent= Number(transDetailsData.transID);
  localStorage.setItem("transDetailsUpdate", JSON.stringify(transacDetails));
  boxOverlay.style.display = "none";

 // transaction Amount add!


  if(transDetailsData.transtype === "Expense"){
    newExpense+=Number(transDetailsData.transamount);
    newBalance-=Number(transDetailsData.transamount);
    localStorage.setItem("currentBalance", newBalance);
    localStorage.setItem("totalExpense", newExpense);
    balanceBox.textContent=newBalance;
    expenseBox.textContent=newExpense;

  }



  
});
