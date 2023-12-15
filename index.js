
var numberOfbuttons= document.querySelectorAll("button").length;
for(var i=0;i<numberOfbuttons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerhtml=this.innerHTML;
    makeSound(buttonInnerhtml);
    animation(buttonInnerhtml);
  });
}


document.addEventListener("keydown", function (event) {
  if (event.key !== " ") { // Exclude spacebar key
    makeSound(event.key);
    animation(event.key);
  }
});







document.addEventListener("keydown",function(event){
  makeSound(event.key);
  animation(event.key);
});
  
function makeSound(key){


switch (key) {
    case "w":
      var audio7 = new Audio('./sounds/kick-bass.mp3');
      audio7.play();
      break;

  
    case "a":
      var audio1 = new Audio('./sounds/tom-1.mp3');
      audio1.play();
      break;

    case "s":
      var audio2 = new Audio('./sounds/tom-2.mp3');
      audio2.play();
      break;

    case "d":
      var audio3 = new Audio('./sounds/tom-3.mp3');
      audio3.play();
      break;

    case "j":
      var audio4 = new Audio('./sounds/tom-4.mp3');
      audio4.play();
      break;

    case "k":
      var audio5 = new Audio('./sounds/snare.mp3');
      audio5.play();
      break;

    case "l":
      var audio6 = new Audio('./sounds/crash.mp3');
      audio6.play();
      break;

    default:
      console.log("Invalid key");
      break;
    }
}  


function animation(currentKey){
  var buttonAnimation=document.querySelector('.'+currentKey);
  buttonAnimation.classList.add("pressed");
  setTimeout(function(){
    buttonAnimation.classList.remove("pressed")
  },100)

}













