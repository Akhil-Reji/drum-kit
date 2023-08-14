alert("Press the following keys on your keyboard or tap the button on the screen to play.");

var drum = document.querySelectorAll(".drum");

for (var i=0; i<drum.length; i++){
    drum[i].addEventListener("click", function handleClick(){
    
        var buttonInnerHTML = this.innerHTML;
    
         playSound(buttonInnerHTML);

         makeAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function (event){

    playSound(event.key);

    makeAnimation(event.key);
});

function playSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play(); 
            break;
        
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play(); 
            break;
                
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play(); 
            break;

        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play(); 
            break; 

        case "j":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play(); 
            break;

        case "k":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play(); 
            break; 
    
        case "l":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play(); 
            break;   

        default:
            console.log("wrong key");
            break;
    } 
}

function makeAnimation(currentKey){
    var thatButton = document.querySelector("." + currentKey);
    thatButton.classList.add("pressed");
    
    setTimeout(function(){ thatButton.classList.remove("pressed")},100);

}