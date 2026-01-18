let flowey = document.querySelector("img");
let floweySoundEffect = document.querySelector("audio");
const dialogueBox = document.querySelector(".dvDialogue");

loadFloweyGreetings();
function loadFloweyGreetings(){
    setTimeout(()=>{flowey.src="Flowey/FloweyNormal.png";floweyAudioManager();},3330);
    floweySoundEffect.play();
    floweySpeak("Greetings, I am Flowey. I the one will assist and manage your Quest List.");
}

function floweyAudioManager(){
    floweySoundEffect.pause();
    floweySoundEffect.currentTime=0;
}
function floweyAudioManager(){
    floweySoundEffect.pause();
    floweySoundEffect.currentTime=0;
}
function floweyAudioPicker(voiceType){
    if(voiceType==="normal"){
        floweySoundEffect.src="FloweyAudio/FloweyNormalDialogue.mp3";
    }else if(voiceType==="evil"){
         floweySoundEffect.src="FloweyAudio/FloweyEvilDialogue.mp3";
    }else if(voiceType==="laugh"){
        floweySoundEffect.src="FloweyAudio/FloweyEvilLaugh.mp3";
    }
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

function floweyInteractButton(btnType,quest){
    let floweyMessage = "";
    switch(btnType){
        case "add":
            let time=(quest.length+22)*55;
            floweyNormalInteraction(time)
            floweyMessage="Added New Quest Titled "+quest+".";
            floweySpeak(floweyMessage);
            break;
        case "clear":
            let time2=22*45;
            floweyNormalInteraction(time2);
            floweySpeak("All quest are cleared.");
            break;
        case "delete":
            let time3=(quest.length+21)*55;
            floweyNormalInteraction(time3);
            floweyMessage="Successfully Deleted "+quest+".";
            floweySpeak(floweyMessage);
            break;
        case "completed":
            let time4 = (quest.length+17)*55;
            floweyNormalInteraction(time4)
            floweyMessage=quest+" quest is completed!";
            floweySpeak(floweyMessage);
            break;
    }
    
    
}

function floweyMoodChange(mood){
    
    switch(mood){
        case "silly":
            flowey.src="Flowey/FloweySilly.png"
            break;
        case "normal":
            flowey.src="Flowey/FloweyNormal.png"
            break;
        case "annoyed":
            flowey.src="Flowey/FloweyAnnoyed.png"
            break;
        case "mad":
            flowey.src="Flowey/FloweyMad.png"
            break;
        case "evil1":
            flowey.src="Flowey/FloweyEvil1.png"
            break;
        case "evil2":
            flowey.src="Flowey/FloweyEvil2.png"
            break;
        case "evil3":
            flowey.src="Flowey/FloweyEvil3.png"
            break;
        default:
            break;
    }
}

function floweyNormalInteraction(time){
    setTimeout(()=>{floweyMoodChange("normal");floweyAudioManager();},time);
    floweyMoodChange("silly");
    floweySoundEffect.play();
}

function floweyNormalInteraction(time,reaction){
    setTimeout(()=>{floweyMoodChange("normal");floweyAudioManager();},time);
    floweyMoodChange(reaction);
    floweySoundEffect.play();
}

function floweyNormalInteraction(time,reaction,voiceType){
    floweyAudioPicker(voiceType);
    setTimeout(()=>{floweyMoodChange("normal");floweyAudioManager();},time);
    floweyMoodChange(reaction);
    floweySoundEffect.play();
}