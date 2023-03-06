let clicks = 0;
let seconds = 0;
let domsec = document.getElementById("seconds");
let domclick = document.getElementById("clicks");
domsec.innerHTML = 0;
domclick.innerHTML = 0;

function incrementSeconds() {
  seconds++;
  clicks++;
  width -= widthvalue;
  hp = hp - clickvalue;
  domsec.innerHTML = seconds;
  domclick.innerHTML = clicks;
}

function incrementClicks() {
  clicks++;
  domclick.innerHTML = clicks;
  width -= widthvalue;
  hp = hp - clickvalue;
}

let elem = document.getElementById("myBar");
let width = 100;
let maxhp = width;
let clickvalue = 1;
let widthvalue = 1;
let hp = maxhp;
let currency = 0;
let domcurrency=document.getElementById("currency");
domcurrency.innerHTML = "Currency: "+currency;
let barId = setInterval(progressBar, 100);

let secondsId = setInterval(incrementSeconds, 1000);
document.getElementById("health").addEventListener("click", incrementClicks);

let sounds = ["angry-cartoon-kitty-meow.wav", "domestic-cat-hungry-meow.wav",
  "little-cat-attention-meow.wav", "little-cat-pain-meow.wav", "sweet-kitty-meow.wav"];
let audio = new Audio("Audio/" + sounds[getRndInteger(0, 5)]);
let volume = 0.8;
audio.volume = volume;
audio.play();
changeImage();
document.getElementById("volume").innerHTML = "Volume: "+ Math.floor(audio.volume*100)

document.getElementById("volume-control").addEventListener("input", (e) => {
  volume = e.currentTarget.value/100
  audio.volume = volume
  document.getElementById("volume").innerHTML = "Volume: "+ Math.floor(audio.volume*100)
})

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let domHp=document.getElementById("hp");
domHp.innerHTML="HP: 0/0 - ClickValue: 0"
function progressBar() {
  if (width <= 0) {
    width = 100;
    currency += Math.floor(Math.round(maxhp / 30));
    maxhp = maxhp * 1.20;
    clickvalue = clickvalue * 1.20;
    hp = maxhp;
    domcurrency.innerHTML = "Currency: "+currency;
    changeImage()
    audio = new Audio("Audio/" + sounds[getRndInteger(0, 5)]);
    audio.volume = volume
    audio.play();
    //   clearInterval(id)
  } else {
    elem.style.width = width + "%";
    let textHp = "Stamina: "+(Math.round(hp * 100) / 100) + "/" + (Math.round(maxhp * 100) / 100) + " - " + "ClickValue: "+(Math.round(clickvalue * 100) / 100);
    if (maxhp > 1000000)
      textHp = "Stamina: "+(Math.round(hp * 100) / 100000000).toFixed(2) + "m/" + (Math.round(maxhp * 100) / 100000000).toFixed(2) + "m - " + "ClickValue: "+(Math.round(clickvalue * 100) / 100000000).toFixed(2) + "m";
    else if (maxhp > 1000000000000)
      textHp = "Stamina: "+(Math.round(hp * 100) / 100000000000000).toFixed(2) + "b/" + (Math.round(maxhp * 100) / 100000000000000).toFixed(2) + "b - " + "ClickValue: "+(Math.round(clickvalue * 100) / 100000000000000).toFixed(2) + "b";
    domHp.innerHTML = textHp;
  }
}

function stop() {
  if (document.getElementById("stop").textContent == "Stop") {
    clearInterval(barId);
    clearInterval(secondsId);
    document.getElementById("stop").textContent = "Resume";
  }
  else {
    barId = setInterval(progressBar, 100);
    secondsId = setInterval(incrementSeconds, 1000);
    document.getElementById("stop").textContent = "Stop";
  }
}

function changeImage() {
  let link = "" + document.getElementById("image").src;
  let string = link.split("/");
  let res1 = Math.floor(Math.random() * 10 + 2) * 100;
  let res2 = Math.floor(Math.random() * 1000);
  document.getElementById("image").src = string[0] + "//" + string[2] + "/" + res1 + "/" + (res1 - 100);
}

let firsclick = false;
function first() {
  if (!firsclick && currency >= 20) {
    clickvalue = clickvalue * 1.20;
    widthvalue *= 1.20;
    firsclick = true;
    currency -= 20;
    domcurrency.innerHTML = "Currency: "+currency;
    document.getElementById("first").style.backgroundColor = "gray";
    document.getElementById("first").style.color = "aliceblue";
    document.getElementById("first").style.borderStyle = "none";
  }
}
let secondclick = false;
function second() {
  if (!secondclick && currency >= 50) {
    clickvalue = clickvalue * 1.50;
    widthvalue *= 1.50;
    secondclick = true;
    currency -= 50
    domcurrency.innerHTML = "Currency: "+currency;
    document.getElementById("second").style.backgroundColor = "gray";
    document.getElementById("second").style.color = "aliceblue";
    document.getElementById("second").style.borderStyle = "none";
  }
}
let thirdclick = false;
function third() {
  if (!thirdclick && currency >= 100) {
    clickvalue = clickvalue * 2;
    widthvalue *= 2;
    thirdclick = true;
    currency -= 100
    domcurrency.innerHTML = "Currency: "+currency;
    document.getElementById("third").style.backgroundColor = "gray";
    document.getElementById("third").style.color = "aliceblue";
    document.getElementById("third").style.borderStyle = "none";
  }
}
let fourthclick = false;
function fourth() {
  if (!fourthclick && currency >= 500) {
    clickvalue = clickvalue * 2.50;
    widthvalue *= 2.50;
    fourthclick = true;
    currency -= 500;
    domcurrency.innerHTML = "Currency: "+currency;
    document.getElementById("fourth").style.backgroundColor = "gray";
    document.getElementById("fourth").style.color = "aliceblue";
    document.getElementById("fourth").style.borderStyle = "none";
  }
}
let fifthclick = false;
function fifth() {
  if (!fifthclick && currency >= 5000) {
    clickvalue = clickvalue * 3;
    widthvalue *= 3;
    fifthclick = true;
    currency -= 5000;
    domcurrency.innerHTML = "Currency: "+currency;
    document.getElementById("fifth").style.backgroundColor = "gray";
    document.getElementById("fifth").style.color = "aliceblue";
    document.getElementById("fifth").style.borderStyle = "none";
  }
}
let sixthclick = false;
function sixth() {
  if (!sixthclick && currency >= 15000) {
    clickvalue = clickvalue * 3.50;
    widthvalue *= 3.50;
    sixthclick = true;
    currency -= 15000;
    domcurrency.innerHTML = "Currency: "+currency;
    document.getElementById("sixth").style.backgroundColor = "gray";
    document.getElementById("sixth").style.color = "aliceblue";
    document.getElementById("sixth").style.borderStyle = "none";
  }
}
let seventhclick = false;
function seven() {
  if (!seventhclick && currency >= 30000) {
    clickvalue = clickvalue * 4;
    widthvalue *= 4;
    seventhclick = true;
    currency -= 30000;
    domcurrency.innerHTML = "Currency: "+currency;
    document.getElementById("seven").style.backgroundColor = "gray";
    document.getElementById("seven").style.color = "aliceblue";
    document.getElementById("seven").style.borderStyle = "none";
  }
}
let eigthclick = false;
function eight() {
  if (!eigthclick && currency >= 50000) {
    clickvalue = clickvalue * 4.50;
    widthvalue *= 4.50;
    eigthclick = true;
    currency -= 15000;
    domcurrency.innerHTML = "Currency: "+currency;
    document.getElementById("eight").style.backgroundColor = "gray";
    document.getElementById("eight").style.color = "aliceblue";
    document.getElementById("eight").style.borderStyle = "none";
  }
}
let ninthclick = false;
function nine() {
  if (!ninthclick && currency >= 1) {
    clickvalue = clickvalue * 5;
    widthvalue *= 5;
    ninthclick = false;
    currency -= 1;
    domcurrency.innerHTML = "Currency: "+currency;
    document.getElementById("nine").style.backgroundColor = "gray";
    document.getElementById("nine").style.color = "aliceblue";
    document.getElementById("nine").style.borderStyle = "none";
  }
}

document.addEventListener('coloris:pick', event => {
  document.body.style.backgroundColor = event.detail.color
});