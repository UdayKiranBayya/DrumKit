//looping over all the buttons..
for(var i = 0; i <= 6; i++){
//listening to mouse clicks..
    document.querySelectorAll('button')[i].addEventListener('click', function(){
    var btn = this.innerHTML;
    Click(btn);
    animation(btn);
})
//listening to keyboard button clicks..
    var buttonPress = addEventListener("keydown", function(event){
        var btnx = event.key;
        Click(btnx);
        animation(btnx);
    })
}

//function that play sounds..
function Click(button){
    if (button === "w"){
       var audio = new Audio('crash.mp3');
       audio.play();
    }
    else if (button === "a"){
       var audio = new Audio('kick-bass.mp3');
       audio.play();
    }
    else if (button === "s"){
       var audio = new Audio('snare.mp3');
       audio.play();
    }
    else if (button === "d"){
       var audio = new Audio('tom-1.mp3');
       audio.play();
    }
    else if (button === "j"){
       var audio = new Audio('tom-2.mp3');
       audio.play();
    }
    else if (button === "k"){
       var audio = new Audio('tom-3.mp3');
       audio.play();
    }
    else if (button === "l"){
       var audio = new Audio('tom-4.mp3');
       audio.play();
    }



}
function animation(button){
    var toBeAnimated = document.querySelector("." + button);
    toBeAnimated.classList.add("pressed");
    setTimeout(function(){
        toBeAnimated.classList.remove("pressed");

    }, 100)

}



