let countDownDate = new Date("Apr 20, 2023 00:00:00").getTime();

let updateCountDown = setInterval(function () {
  let dateNow = new Date().getTime();

  let distance = countDownDate - dateNow;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let countDown =
    days + "d" + ":" + hours + "h" + ":" + minutes + "m" + ":" + seconds + "s";

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
}, 1000);
