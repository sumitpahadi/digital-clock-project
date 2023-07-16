var display = document.querySelectorAll(".box1");

var display1 = document.querySelectorAll(".box2");

var display2 = document.querySelectorAll(".box3");

var display3 = document.querySelectorAll(".box4");

var display4 = document.querySelectorAll(".breakfast");
document.addEventListener("DOMContentLoaded", function () {
  function startClock() {
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    display[0].innerHTML = `${hrs}HR`;
    display1[0].innerHTML = `${min} MIN`;
    display2[0].innerHTML = `${sec} SEC`;
    if (hrs > 12) {
      display3[0].innerHTML = "PM";
    } else {
      display3[0].innerHTML = "PM";
    }
    if (hrs > 12) {
      display[0].innerHTML = `${hrs % 12} HR`;
    }
    if (hrs < 12) {
      display4[0].innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
    } else if (hrs > 12 && hrs < 16) {
      display4[0].innerHTML = "LET'S HAVE SOME LUNCH !!";
    } else if (hrs > 16 && hrs < 20) {
      display4[0].innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    } else if (hrs > 20 && hrs < 24) {
      display4[0].innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
    }
  }

  setInterval(() => {
    startClock();
  }, 1000);
});

var selects = document.getElementsByClassName("option");

var scheduleTime = document.getElementsByClassName("scheduleTime");
var img = document.getElementById("uiImages");
var greating = document.getElementById("greating");

let flag = false;
function Alarm() {
  console.log("Alarm call");
  let time = new Date();
  let hour = time.getHours();
  if (hour === parseInt(selects[0].value)) {
    img.src = "./image/Component 30 – 1.png";
    greating.innerHTML="GOOD MORNING!! WAKE UP !!";
    console.log("morring call");
    flag = !flag;
  } else if (hour === parseInt(selects[1].value)) {
    img.src = "./image/Component 31 – 1.svg";
    greating.innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
    console.log("AFTERNOON call");
    console.log(greating);
    flag = !flag;
  } else if (hour === parseInt(selects[2].value)) {
    img.src = "./image/lunch_image.png";
    greating.innerHTML="GOOD EVENING !!";
    console.log("EVENING call");
    flag = !flag;
  } else if (hour === parseInt(selects[3].value)) {
    img.src = "./image/Component 32 – 1.png";git 
    greating.innerHTML="GOOD NIGHT !!";
    console.log("NIGHT call");
    flag = !flag;
  }
}

function setAlarm() {
  var x1 = selects[0].selectedIndex;
  var y1 = selects[0].options;
  var x2 = selects[1].selectedIndex;
  var y2 = selects[1].options;
  var x3 = selects[2].selectedIndex;
  var y3 = selects[2].options;
  var x4 = selects[3].selectedIndex;
  var y4 = selects[3].options;
  const alm = setInterval(() => {
    Alarm();
    if (flag) {
      clearInterval(alm);
      flag = !flag;
    }
  }, 1000);
  scheduleTime[0].innerHTML = "Wake Up Time :" + y1[x1].text; //temp
  scheduleTime[1].innerHTML = "Lunch Time : " + y2[x2].text; //temp
  scheduleTime[2].innerHTML = "Nap Time :" + y3[x3].text; //temp
  scheduleTime[3].innerHTML = "Night Time :" + y4[x4].text; //temp
}
