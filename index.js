var buttons = document.querySelectorAll(".drum");
//clicks
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
  var buttonsInnerHTML = this.innerHTML;
  makeSounds(buttonsInnerHTML);
  buttonsAnimations(buttonsInnerHTML);
});
}

//keyboard
  document.addEventListener("keydown", function(event) {
    makeSounds(event.key);
    buttonsAnimations(event.key);
});

function makeSounds(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.MP3");
      tom1.play();
      break;
    case "a":
     var tom2 = new Audio("sounds/tom-2.MP3");
     tom2.play();
     break;
     case "s":
      var tom3 = new Audio("sounds/tom-3.MP3");
      tom3.play();
      break;
      case "d":
       var tom4 = new Audio("sounds/tom-4.MP3");
       tom4.play();
       break;
       case "j":
        var snare = new Audio("sounds/snare.MP3");
        snare.play();
        break;
        case "k":
         var crash = new Audio("sounds/crash.MP3");
         crash.play();
         break;
         case "l":
          var kickBass = new Audio("sounds/kick-bass.MP3");
          kickBass.play();
          break;
    default:
  }
}

function buttonsAnimations(currentKey){
var animationButton = document.querySelector("."+ currentKey);
animationButton.classList.add("pressed");
setTimeout(function(){
  animationButton.classList.remove("pressed");}, 100);
}
