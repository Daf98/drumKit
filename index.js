//clicking
for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  var buttonHTML = this.innerHTML;
  makeSound(buttonHTML);
  buttonAnimation(buttonHTML);
});

}

//pressing keys
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


//making sounds function
function makeSound (key) {
  switch (key) {
    case "w":
      var kickBass = new Audio("sounds/kickbass.mp3");
      kickBass.play();
    break;
    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;
    case "s":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;
    default: console.log(buttonHTML);

  }
}
//making animations function
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);
}
