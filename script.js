// Getting element selectors.
let daysElement = document.getElementById('days');
let hoursElement = document.getElementById('hours');
let minsElement = document.getElementById('mins');
let secsElement = document.getElementById('secs');
let dateElement = document.getElementById('date');

let daysLabel = document.getElementById('day-label');
let hoursLabel = document.getElementById('hour-label');
let minsLabel = document.getElementById('minute-label');
let secsLabel = document.getElementById('second-label');

// Last date of the countdown.
const lastDate = new Date('15/11/2025');

// Constant Values Setup
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Calling timer after every second.
setInterval(printTime, 1000);

// Function calculating and printing time.
function printTime() {
  let currTime = new Date();
  let diffInTime = lastDate - currTime;

  if (!hasDatePassed(diffInTime)) {
    const days = Math.floor(diffInTime / day);
    const hours = Math.floor((diffInTime % day) / hour);
    const minutes = Math.floor((diffInTime % hour) / minute);
    const seconds = Math.floor((diffInTime % minute) / second);

    daysElement.innerText = days;
    hoursElement.innerText = hours;
    minsElement.innerText = minutes;
    secsElement.innerText = seconds;

    printLabels(days, hours, minutes, seconds);
  }
}

// Function printing the end date on screen.
function printEndDate() {
  let endDateString = `${lastDate.getDate()}-${
    1 + lastDate.getMonth()
  }-${lastDate.getFullYear()}`;

  dateElement.innerText = endDateString;
}

// Function checking if the end date has passed.
function hasDatePassed(diffInTime) {
  if (diffInTime < 0) {
    daysElement.innerText =
      hoursElement.innerText =
      minsElement.innerText =
      secsElement.innerText =
        0;
    return true;
  } else {
    return false;
  }
}

// Function setting the text of the labels.
function printLabels(days, hours, minutes, seconds) {
  daysLabel.innerText = days > 1 ? 'days' : 'day';
  hoursLabel.innerText = hours > 1 ? 'hours' : 'hour';
  minsLabel.innerText = minutes > 1 ? 'minutes' : 'minute';
  secsLabel.innerText = seconds > 1 ? 'seconds' : 'second';
}

// Initial function calls.
printEndDate();
printTime();
