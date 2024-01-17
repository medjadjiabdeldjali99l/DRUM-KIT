var liste =document.querySelectorAll(".drum")
for (i = 0; i <liste.length ; i++) {
    liste[i].addEventListener("click" ,function(){
        switch (this.innerHTML) {
            case "w":
              // code à exécuter si expression est égale à value1
              var audio = new Audio('./sounds/tom-1.mp3');
              audio.play();
              document.querySelector(".w").classList.add("pressed");
              setTimeout(function rmv(){
                  document.querySelector(".w").classList.remove("pressed");  
              }, 100);

              break;
          
            case "a":
              // code à exécuter si expression est égale à value2
              var audio = new Audio('./sounds/tom-2.mp3');
              audio.play();
              document.querySelector(".a").classList.add("pressed");
              setTimeout(function rmv(){
                  document.querySelector(".a").classList.remove("pressed");  
              }, 100);
              break;
          
            // ... autres cas ...
            case "s":
              // code à exécuter si expression est égale à value1
              var audio = new Audio('./sounds/tom-3.mp3');
              audio.play();
              document.querySelector(".s").classList.add("pressed");
              setTimeout(function rmv(){
                  document.querySelector(".s").classList.remove("pressed");  
              }, 100);
              break;
          
            case "d":
              // code à exécuter si expression est égale à value2
              var audio = new Audio('./sounds/tom-4.mp3');
              audio.play();
              document.querySelector(".d").classList.add("pressed");
              setTimeout(function rmv(){
                  document.querySelector(".d").classList.remove("pressed");  
              }, 100);
              break;
            case "j":
              // code à exécuter si expression est égale à value1
              var audio = new Audio('./sounds/snare.mp3');
              audio.play();
              document.querySelector(".j").classList.add("pressed");
              setTimeout(function rmv(){
                  document.querySelector(".j").classList.remove("pressed");  
              }, 100);
              break;
          
            case "k":
              // code à exécuter si expression est égale à value2
              var audio = new Audio('./sounds/kick-bass.mp3');
              audio.play();
              document.querySelector(".k").classList.add("pressed");
              setTimeout(function rmv(){
                  document.querySelector(".k").classList.remove("pressed");  
              }, 100);
              break;
            case "l":
              // code à exécuter si expression est égale à value2
              var audio = new Audio('./sounds/crash.mp3');
              audio.play();
              document.querySelector(".l").classList.add("pressed");
              setTimeout(function rmv(){
                  document.querySelector(".l").classList.remove("pressed");  
              }, 100);
              break;
            default:
              // code à exécuter si aucune des valeurs ne correspond à expression
              console.log(this.innerHTML,i);
              this.style.color="white";
          }
          
    });
}
document.addEventListener("keydown" ,function(event){
    var key = event.key;
    switch (key) {
        case "w":
        case "W":
            // code à exécuter si expression est égale à value1
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            document.querySelector(".w").classList.add("pressed");
            setTimeout(function rmv(){
                document.querySelector("."+key).classList.remove("pressed");  
            }, 100);
            break;
        
        case "a":
        case "A":
            // code à exécuter si expression est égale à value2
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            document.querySelector(".a").classList.add("pressed");
            setTimeout(function rmv(){
                document.querySelector("."+key).classList.remove("pressed");  
            }, 100);
            break;
        
        // ... autres cas ...
        case "s":
        case "S":
            // code à exécuter si expression est égale à value1
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            document.querySelector(".s").classList.add("pressed");
            setTimeout(function rmv(){
                document.querySelector("."+key).classList.remove("pressed");  
            }, 100);
            break;
        
        case "d":
        case "D":
            // code à exécuter si expression est égale à value2
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            document.querySelector(".d").classList.add("pressed");
            setTimeout(function rmv(){
                document.querySelector("."+key).classList.remove("pressed");  
            }, 100);
            break;
        case "j":
        case "J":
            // code à exécuter si expression est égale à value1
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            document.querySelector(".j").classList.add("pressed");
            setTimeout(function rmv(){
                document.querySelector("."+key).classList.remove("pressed");  
            }, 100);
            break;
        
        case "k":
        case "K":
            // code à exécuter si expression est égale à value2
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            document.querySelector(".k").classList.add("pressed");
            setTimeout(function rmv(){
                document.querySelector("."+key).classList.remove("pressed");  
            }, 100);
            break;
        case "l":
        case "L":
            // code à exécuter si expression est égale à value2
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            document.querySelector(".l").classList.add("pressed");
            setTimeout(function rmv(){
                document.querySelector("."+key).classList.remove("pressed");  
            }, 100);
            break;
        default:
            // code à exécuter si aucune des valeurs ne correspond à expression
            console.log(this.innerHTML,i);
        }
        
});


