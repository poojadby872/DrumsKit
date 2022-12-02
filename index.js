
function play(e){
    console.log(e.keyCode);
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key= document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing');

}
window.addEventListener('keydown',play)


function removePlay(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing")

}

const keys= document.querySelectorAll(".key");

keys.forEach( key=> key.addEventListener('transitionend', removePlay));