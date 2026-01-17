let flowey = document.querySelector("img");
let floweySoundEffect = document.querySelector("audio");
const dialogueBox = document.querySelector(".dvDialogue");

loadFloweyGreetings();
function loadFloweyGreetings(){
    setTimeout(()=>{flowey.src="Flowey/FloweyNormal.png";floweyAudioManager();},3500);
    floweySoundEffect.play();
    floweySpeak("Greetings, I am Flowey. I the one will assist and manage your Quest List.");
}

function floweyAudioManager(){
    floweySoundEffect.pause();
    floweySoundEffect.currentTime=0;
}

function floweySpeak(message) {
    // 1. Clear the box
    dialogueBox.textContent = ""; 
    let i = 0;
    let speed = 40; // Adjust this for faster/slower typing

    // 2. The typing logic
    function type() {
        if (i < message.length) {
            dialogueBox.textContent += message.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

function floweyInteractButton(btnType){
    setTimeout(()=>{flowey.src="Flowey/FloweyNormal.png";floweyAudioManager();},3500);
    floweySoundEffect.play();
    floweySpeak("Greetings, I am Flowey. I the one will assist and manage your Quest List.");
}

function floweyMoodChange(){

}