var greetUser = function greetUser(){
  var firstName = prompt("What is your name for real this time");

  if(firstName === ""){
    greetUser();
  } else {
    document.querySelector("h1").textContent = " Welcome " + firstName;
   }
};

greetUser();

//-----------------------Examples!!---------------------------//

//LEAN ON THIS HEAVILY WHEN USING JAVASCRIPT!!!//

//var logPrimitives = function logPrimitives() {
//console.log(Marines + Deondre);
//}

//var mySecondArray = ['Car', 'America']//

//document.querySelector//

//document.querySelector("h1").textContent = "Deadmanwalkin" use this to...
//change text on a website through a console//
