window.onload = function () {
  setInterval(updateTime, 1000);
};

function updateTime() {
  const hour = document.querySelector("#hours");
  const minute = document.querySelector("#minutes");
  const second = document.querySelector("#seconds");

  let T = new Date();

  let hours = T.getHours();
  let minutes = T.getMinutes();
  let seconds = T.getSeconds();

  if (hours >= 0 && hours <= 9) hours = "0" + hours;
  if (minutes >= 0 && minutes <= 9) minutes = "0" + minutes;
  if (seconds >= 0 && minutes <= 9) seconds = "0" + seconds;

  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;

  const date = document.querySelector("#date");
  const day = document.querySelector("#day");

  let dates = T.getDate();
  let months = T.getMonth() + 1;
  let years = T.getFullYear();

  if (dates >= 0 && dates <= 9) dates = "0" + dates;
  if (months >= 0 && months <= 9) months = "0" + months;
  if (years >= 0 && years <= 9) years = "0" + years;

  date.innerHTML = `${dates}/${months}/${years}`;

  let days = T.getDay();
  let DAY = "";

  switch (days) {
    case 0:
      DAY = "Sunday";
      break;
    case 1:
      DAY = "Monday";
      break;
    case 2:
      DAY = "Tuesday";
      break;
    case 3:
      DAY = "Wednesday";
      break;
    case 4:
      DAY = "Thursday";
      break;
    case 5:
      DAY = "Friday";
      break;
    case 6:
      DAY = "Saturday";
      break;
  }
  day.innerHTML = DAY;
}
