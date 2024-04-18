/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let cost_per_day = 35;
let days_selected = 0;

const mondayButton = document.getElementById("monday");
mondayButton.addEventListener("click", function () {
  click_button("monday");
});
const tuesdayButton = document.getElementById("tuesday");
tuesdayButton.addEventListener("click", function () {
  click_button("tuesday");
});
const wednesdayButton = document.getElementById("wednesday");
wednesdayButton.addEventListener("click", function () {
  click_button("wednesday");
});
const thursdayButton = document.getElementById("thursday");
thursdayButton.addEventListener("click", function () {
  click_button("thursday");
});
const fridayButton = document.getElementById("friday");
fridayButton.addEventListener("click", function () {
  click_button("friday");
});

const fullRateButton = document.getElementById("full");
const halfRateButton = document.getElementById("half");
fullRateButton.addEventListener("click", full_rate);
halfRateButton.addEventListener("click", half_rate);

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clear);

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function click_button(weekday) {
  let change_clicked = document.getElementById(weekday);
  if (!change_clicked.classList.contains("clicked")) {
    change_clicked.classList.add("clicked");
    days_selected += 1;
    calculate_cost();
  }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear() {
  if (mondayButton.classList.contains("clicked")) {
    mondayButton.classList.remove("clicked");
  }
  if (tuesdayButton.classList.contains("clicked")) {
    tuesdayButton.classList.remove("clicked");
  }
  if (wednesdayButton.classList.contains("clicked")) {
    wednesdayButton.classList.remove("clicked");
  }
  if (thursdayButton.classList.contains("clicked")) {
    thursdayButton.classList.remove("clicked");
  }
  if (thursdayButton.classList.contains("clicked")) {
    thursdayButton.classList.remove("clicked");
  }
  if (!fullRateButton.classList.contains("clicked")) {
    fullRateButton.classList.add("clicked");
  } else if (halfRateButton.classList.contains("clicked")) {
    halfRateButton.classList.remove("clicked");
  }
  days_selected = 0;
  calculate_cost();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function half_rate() {
  cost_per_day = 20;
  if (!halfRateButton.classList.contains("clicked")) {
    halfRateButton.classList.add("clicked");
  }
  if (fullRateButton.classList.contains("clicked")) {
    fullRateButton.classList.remove("clicked");
  }
  calculate_cost();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function full_rate() {
  cost_per_day = 35;
  if (!fullRateButton.classList.contains("clicked")) {
    fullRateButton.classList.add("clicked");
  }
  if (halfRateButton.classList.contains("clicked")) {
    halfRateButton.classList.remove("clicked");
  }
  calculate_cost();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate_cost() {
  let total_cost = document.getElementById("calculated-cost");
  total_cost.innerHTML = cost_per_day * days_selected;
}
