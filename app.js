function myTime() {
  const myDate = new Date();

  // for minute and seconds
  var hr,
    min =
      myDate.getMinutes() < 10
        ? "0" + myDate.getMinutes()
        : myDate.getMinutes();

  var sec =
    myDate.getSeconds() < 10 ? "0" + myDate.getSeconds() : myDate.getSeconds();
  var amPm = myDate.getHours() >= 12 ? "PM" : "AM";

  if (myDate.getHours() == 0) {
    hr = 12;
  } else if (myDate.getHours() > 12) {
    hr = myDate.getHours() - 12;
  } else {
    hr = myDate.getHours();
  }

  //for date
  const tarik = myDate.getDate();

  // for month
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //for day name
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const realTIme = hr + ":" + min + ":" + sec + " " + amPm;
  const time = document.querySelector(".time");
  const cdate = document.querySelector(".cdate");
  time.innerHTML = realTIme;
  cdate.innerHTML =
    tarik + " " + months[myDate.getMonth()] + "," + daysOfWeek[myDate.getDay()];
}
myTime();
setInterval(() => {
  myTime();
}, 1000);
