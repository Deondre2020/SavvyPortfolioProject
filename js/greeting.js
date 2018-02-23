var greetUser = function greetUser(){
  var firstName = prompt("What is your name for real this time");

  if(firstName ===""){
    greetUser();
  } else {

    alert("hello " + firstName);
   }
}

greetUser();

//LEAN ON THIS HEAVILY WHEN USING JAVASCRIPT!!!//
