


let hourEl = document.getElementById("hours");
let minuteEl = document.getElementById("minutes");
let secondEl = document.getElementById("seconds");



let ampnEl = document.getElementById("ampm");
let messageEl = document.getElementById("message");
let selects = document.getElementsByClassName("option");
let img = document.getElementById("uiImages");
let greating = document.getElementById("greating");
let scheduleTime = document.getElementsByClassName("scheduleTime");

function time() {
  let hourEl = document.getElementById("hours");
  let minuteEl = document.getElementById("minutes");
  let secondEl = document.getElementById("seconds");
  let chnageap=document.getElementsByClassName('span2')
  var time = new Date();
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  
  // Update the hour, minute, and second elements
  hourEl.innerHTML = `${hrs} `;
  minuteEl.innerHTML = `${min} `;
  secondEl.innerHTML = `${sec}`;
  
  


  if(hrs>12)
  {
    hourEl.innerHTML=`${hrs%12}`

  }

  // Check if it's AM or PM

  if (hrs > 12) {
    chnageap[0].innerHTML = "PM";
  }
  else{
    chnageap[0].innerHTML = "AM";

  }
  
  // Determine the appropriate message based on the hour
  if (hrs < 12) {
    messageEl.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
  } else if (hrs >= 12 && hrs < 16) {
    messageEl.innerHTML = "LET'S HAVE SOME LUNCH !!";
  } else if (hrs >= 16 && hrs < 20) {
    messageEl.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  } else {
    messageEl.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
  }
  
}
setInterval(() => time(), 1000);


function message(time) {
  if (time > 20 || time <= 5) {
    messageEl.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
  } else if (time > 5 && time <= 11) {
    messageEl.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
  } else if (time > 11 && time <= 16) {
    messageEl.innerHTML = "LET'S HAVE SOME LUNCH !!";
  } else {
    messageEl.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  }
}


// hover even on set alarm
function partyTime(x){
  console.log("partyTime function call")
 x.innerHTML="Party time!";

}
function normal(x){
  console.log("normal function call")
  x.innerHTML="set alarm";
 

}





let flag=false;
function Alarm() {
  console.log("Alarm call");
  let time = new Date();
  let hour = time.getHours();
  if (hour === parseInt(selects[0].value)) {
    img.src = "./images/Component 30 – 1.svg";
    greating.innerHTML = "GOOD MORNING!! WAKE UP !!";
  console.log("morring call");
  flag=!flag;

  } else if (hour === parseInt(selects[1].value)) {
    img.src = "./images/Group.svg";
    greating.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
  console.log("AFTERNOON call");
  console.log(greating);
  flag=!flag;

  } else if (hour === parseInt(selects[2].value)) {
    img.src = "./images/cup afternoon.png";
    greating.innerHTML = "GOOD EVENING !!";
  console.log("EVENING call");
  flag=!flag;

  } else if (hour === parseInt(selects[3].value)) {
    img.src = "./images/gn.svg";
    greating.innerHTML = "GOOD NIGHT !!";
  console.log("NIGHT call");
  flag=!flag;

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
    if(flag){
      clearInterval(alm);
     flag=!flag;

    }
  }, 1000);
  scheduleTime[0].innerHTML = "Wake Up Time :" + y1[x1].text; //temp
  scheduleTime[1].innerHTML = "Lunch Time : " + y2[x2].text; //temp
  scheduleTime[2].innerHTML = "Nap Time :" + y3[x3].text; //temp
  scheduleTime[3].innerHTML = "Night Time :" + y4[x4].text; //temp
}