//Detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
                                    //class targeting..           
for(var i=0; i < numberOfDrumButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    
    });
}

//Detecting keyboard press
document.addEventListener("keypress", function(event){

    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key){
    switch (key) {
        case 'o':
            var tom1 = new Audio("sounds/tom-1.mp3 ");
            tom1.play();
            break;
        case 'r':
            var tom2 = new Audio("sounds/tom-2.mp3 ");
            tom2.play();
            break;
        case 'k':
            var tom3 = new Audio("sounds/tom-3.mp3 ");
            tom3.play();
            break;
        case 'u':
            var tom4 = new Audio("sounds/tom-4.mp3 ");
            tom4.play();
            break;
        case 'n':
            var snare = new Audio("sounds/snare.mp3 ");
            snare.play();
            break;
        case 'c':
            var kick = new Audio("sounds/tom-3.mp3 ");
            kick.play();
            break;
        case 'a':
            var kick = new Audio("sounds/crash.mp3 ");
            kick.play();
            break;
        
        
        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." +currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}