


//Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
    
        playSound(buttonInnerHTML);
    
        buttonAnimation(buttonInnerHTML);
    });

}


//Listens for keypress
document.addEventListener("keydown", (event) => {
    //Fetch key code of pressed key
    var keyCode = event.keyCode;
    //Convert key code to corresponding character
    var key = String.fromCharCode(keyCode).toLowerCase();
    console.log(key);

    playSound(key);

    buttonAnimation(key);
});


//Detect Keyboard Press

function playSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
    
        //Act as Else statement
        default:
            break;
    }
}


//Function running in both "playsound" and "keypress"
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);//Note concatenation

    //Add class to pressed key
    activeButton.classList.add("pressed");

    //Remove class after 0,1sec
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}


