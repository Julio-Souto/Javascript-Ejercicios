// window.alert("Hello World")
let hello = "Hello World"
document.getElementById("hello-world").innerHTML = hello
document.getElementById("suma").innerHTML = 5+3
// let person = prompt("Please enter your name", "Harry Potter");

// if (person != null) {
//     document.getElementById("prompt").innerHTML =
//     "Hello " + person + "! How are you today?";
// } 
// let numero1 = prompt("numero1",1)
// let numero2 = prompt("numero2",2)
// let numero3 = prompt("numero3",3)
// document.getElementById("suma-prompt").innerHTML = Number(numero1)+Number(numero2)
// let n1=Number(numero1)
// let n2=Number(numero2)
// let n3=Number(numero3)
// if (n1>n2)
//     document.getElementById("mayor-prompt").innerHTML = n1 + " mayor que "+ n2
// else if (n2>n1)
//     document.getElementById("mayor-prompt").innerHTML = n2 + " mayor que "+ n1
// else
//     document.getElementById("mayor-prompt").innerHTML = "Los numeros son iguales"

// if(n1>n2 && n1>n3)
//     document.getElementById("mayor3").innerHTML = n1 + " mayor que "+ n2 +" y "+ n3
// else if(n2>n1 && n2>n3)
//     document.getElementById("mayor3").innerHTML = n2 + " mayor que "+ n1 +" y "+ n3
// else if(n3>n2 && n3>n1)
//     document.getElementById("mayor3").innerHTML = n3 + " mayor que "+ n2 +" y "+ n1
// else
//     document.getElementById("mayor3").innerHTML = "Los numeros son iguales"
// let numeroPar = Number(prompt("numero",1))
// let numero2 = Number(prompt("numero",2))
// let string = numeroPar +" es divisible entre:"

// if(numeroPar%2==0)
//     document.getElementById("par").innerHTML = numeroPar+" es par"
// else
//     document.getElementById("par").innerHTML = numeroPar+" no es par"

// if(numeroPar%2==0)
//     string=string+" 2,"
// if(numeroPar%3==0)
//     string=string+" 3,"
// if(numeroPar%5==0)
//     string=string+" 5,"
// if(numeroPar%7==0)
//     string=string+" 7"

// if(string[string.length-1]==",")
//     string=string.substring(0,string.length-1)
// document.getElementById("divisible").innerHTML = string

// let divisor="1 "
// let comunes="1 "
// let primo=0
// for (i = 2; i <= numeroPar / 2; i++) {
//     if (numeroPar % i == 0) {
//         divisor=divisor+" "+i
//         primo++
//     }
//     if (numeroPar % i == 0&&numero2 % i == 0)
//         comunes=comunes+" "+i
// }
// if(primo==0)
//     document.getElementById("primo").innerHTML = "El numero es primo"
// else
//     document.getElementById("primo").innerHTML = "El numero no es primo"

// document.getElementById("divisor").innerHTML = divisor+" "+numeroPar

// if(numero2>numeroPar&&numero2%numeroPar==0)
//     comunes=comunes+" "+numeroPar
// else if(numeroPar==numero2)
//     comunes=divisor+" "+numeroPar
// document.getElementById("comunes").innerHTML = comunes
// let frase = prompt("frase","esta es una frase")
// let count = 0
// for(let i=0; i<frase.length;i++){
//     if(frase[i]=="a")
//         count++;
// }
// document.getElementById("count-a").innerHTML = count
// let count1 = 0
// let countf = ""
// let counta = 0
// let counte = 0
// let counti = 0
// let counto = 0
// let countu = 0
// for(let i=0; i<frase.length;i++){
//     if(frase[i].match(/[aeiou]/i)){
//         count1++;
//         countf=countf+frase[i]
//     }
//     switch(frase[i]){
//         case "a":counta++; break;
//         case "e":counte++; break;
//         case "i":counti++; break;
//         case "o":counto++; break;
//         case "u":countu++; break;
//         default: break;
//     }
// }
// document.getElementById("count-vocal").innerHTML = count1 +" "+countf
// document.getElementById("vocal-a").innerHTML = "Vocal a: "+counta
// document.getElementById("vocal-e").innerHTML = "Vocal e: "+counte
// document.getElementById("vocal-i").innerHTML = "Vocal i: "+counti
// document.getElementById("vocal-o").innerHTML = "Vocal o: "+counto
// document.getElementById("vocal-u").innerHTML = "Vocal u: "+countu

let clicks = 0;
let seconds = 0;

function incrementSeconds(){
    seconds++;
    clicks++;
    width-=widthvalue;
    hp=hp-clickvalue;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("clicks").innerHTML = clicks;
}

function incrementClicks(){
    clicks++;
    document.getElementById("clicks").innerHTML = clicks;
    width-=widthvalue;
    hp=hp-clickvalue;
}

let elem = document.getElementById("myBar");
let width = 100;
let maxhp = width;
let clickvalue = 1;
let widthvalue = 1;
let hp = maxhp;
let currency = 0;
document.getElementById("currency").innerHTML = currency;
let barId = setInterval(progressBar, 100);
    
let secondsId = setInterval(incrementSeconds,1000);
document.body.addEventListener("click",incrementClicks);

let sounds = ["angry-cartoon-kitty-meow.wav","big-wild-cat-long-purr.wav","domestic-cat-hungry-meow.wav",
"little-cat-attention-meow.wav","little-cat-pain-meow.wav","sweet-kitty-meow.wav"];
let audio = new Audio("Audio/"+sounds[getRndInteger(0,6)]);
audio.play();

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function progressBar() {
    if (width <= 0) {
      width=100;
      currency+=Math.floor(Math.round(maxhp/30));
      maxhp=maxhp*1.20;
      clickvalue=clickvalue*1.20;
      hp=maxhp;
      document.getElementById("currency").innerHTML = currency;
      changeImage()
      audio = new Audio("Audio/"+sounds[getRndInteger(0,6)]);
      audio.play();
    //   clearInterval(id)
    } else {
      elem.style.width = width + "%";
      let textHp=(Math.round(hp*100)/100)+"/"+(Math.round(maxhp*100)/100) + " - "+(Math.round(clickvalue*100)/100);
      if(maxhp>1000000)
        textHp=(Math.round(hp*100)/100000000).toFixed(2)+"m/"+(Math.round(maxhp*100)/100000000).toFixed(2) + "m - "+(Math.round(clickvalue*100)/100000000).toFixed(2)+"m";
      else if(maxhp>1000000000000)
        textHp=(Math.round(hp*100)/100000000000000).toFixed(2)+"b/"+(Math.round(maxhp*100)/100000000000000).toFixed(2) + "b - "+(Math.round(clickvalue*100)/100000000000000).toFixed(2)+"b";
      document.getElementById("hp").innerHTML = textHp;
    }
}

function stop(){
    if(document.getElementById("stop").textContent=="Stop"){
        clearInterval(barId);
        clearInterval(secondsId);
        document.getElementById("stop").textContent = "Resume";
    }
    else{
        barId = setInterval(progressBar, 100);
        secondsId = setInterval(incrementSeconds,1000);
        document.getElementById("stop").textContent = "Stop";
    }
}

function changeImage(){
    let link = ""+document.getElementById("image").src;
    let string = link.split("/");
    let res1 = Math.floor(Math.random()*10+2)*100;
    let res2 = Math.floor(Math.random()*1000);
    document.getElementById("image").src = string[0]+"//"+string[2]+"/"+res1+"/"+(res1-100);
}

let firsclick=false;
function first(){
    if(!firsclick&&currency>=20){
        clickvalue=clickvalue*1.20;
        widthvalue*=1.20;
        firsclick=true;
        currency-=20;
        document.getElementById("currency").innerHTML = currency;
        document.getElementById("first").style.backgroundColor = "gray";
        document.getElementById("first").style.color = "aliceblue";
        document.getElementById("first").style.borderStyle = "none";
    }
}
let secondclick=false;
function second(){
    if(!secondclick&&currency>=50){
        clickvalue=clickvalue*1.50;
        widthvalue*=1.50;
        secondclick=true;
        currency-=50
        document.getElementById("currency").innerHTML = currency;
        document.getElementById("second").style.backgroundColor = "gray";
        document.getElementById("second").style.color = "aliceblue";
        document.getElementById("second").style.borderStyle = "none";
    }
}
function third(){
    clickvalue=clickvalue*2;
    widthvalue*=2;
}
let fourthclick=false;
function fourth(){
    if(!fourthclick&&currency>=500){
        clickvalue=clickvalue*2.50;
        widthvalue*=2.50;
        fourthclick=true;
        currency-=500;
        document.getElementById("currency").innerHTML = currency;
        document.getElementById("fourth").style.backgroundColor = "gray";
        document.getElementById("fourth").style.color = "aliceblue";
        document.getElementById("fourth").style.borderStyle = "none";
    }
}
let fifthclick=false;
function fifth(){
    if(!fifthclick&&currency>=5000){
        clickvalue=clickvalue*3;
        widthvalue*=3;
        fifthclick=true;
        currency-=5000;
        document.getElementById("currency").innerHTML = currency;
        document.getElementById("fifth").style.backgroundColor = "gray";
        document.getElementById("fifth").style.color = "aliceblue";
        document.getElementById("fifth").style.borderStyle = "none";
    }
}
let sixthclick=false;
function sixth(){
    if(!sixthclick&&currency>=15000){
        clickvalue=clickvalue*3.50;
        widthvalue*=3.50;
        sixthclick=true;
        currency-=15000;
        document.getElementById("currency").innerHTML = currency;
        document.getElementById("sixth").style.backgroundColor = "gray";
        document.getElementById("sixth").style.color = "aliceblue";
        document.getElementById("sixth").style.borderStyle = "none";
    }
}