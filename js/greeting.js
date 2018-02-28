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

//document.querySelector("img__src").innerHTML = "img src="https://avatars0.githubusercontent.com/u/36180706?s=400&u=71f427f947a5a04fecb935ba22a27d5fe58239c7&v=4" alt="We out of cut again?">;

//document.querySelector("img__src").innerHTML = "img src="https://avatars0.githubusercontent.com/u/36180706?s=400&u=71f427f947a5a04fecb935ba22a27d5fe58239c7&v=4" alt="We out of cut again?">;

//-------------------------------Javascript Console Notes 1--------------------------//

//before we begin this is the address to the page that we are playing around with https://www.huffingtonpost.com/entry/trump-gun-control-immigration_us_5a95c31ce4b09c872bae8e19

//document.querySelector("img[src='https://img.huffingtonpost.com/asset/5a95c4111f00005100168a1c.jpeg?ops=scalefit_720_noupscale']")
//above you used this to select an image using querySelector for the purpouses of chan
//now for this step var imageChange = document.querySelector("img[src='https://img.huffingtonpost.com/asset/5a95c4111f00005100168a1c.jpeg?ops=scalefit_720_noupscale']")//
//now type in the command you created to get it going ==> imageChange and then attach it to the type of element you want to change imageChange.outerHTML//
// this should pop up "<img class=\"image__src\" src=\"https://img.huffingtonpost.com/asset/5a95c4111f00005100168a1c.jpeg?ops=scalefit_720_noupscale\">"//
//now attach the image change command with the element type and connect it to the image tha//t you want to replace it with imageChange.outerHTML = "<img src='https://s.hdnux.com/photos/41/64/44/8866108/3/rawImage.jpg'/>"
//if done correctly this should pop up "<img src='https://s.hdnux.com/photos/41/64/44/8866108/3/rawImage.jpg'/>"//
