let floweyContainer = document.querySelector('img');
let floweyDialogue = document.querySelector(".dvDialogue");
let floweyAbility = document.querySelector("a");
let  touched = 0;

floweyContainer.onclick = ()=>{
    let dialogue="";
    let dialogueSize=1;
    switch(touched){
        case 1:
            dialogue = " Why do you keep poking me, friend?";
            dialogueSize=dialogue.length*50;
            floweyNormalInteraction(dialogueSize,"silly");
            floweySpeak(dialogue);
            break;
        case 2:
            dialogue=" It tickles, hehehe~~~"
            dialogueSize=dialogue.length*50;
            floweyNormalInteraction(dialogueSize,"silly");
            floweySpeak(dialogue);
             break;
        case 3:
            dialogue=" Okay that's kinda too much touchy....."
            dialogueSize=dialogue.length*50;
            floweyNormalInteraction(dialogueSize,"annoyed");
            floweySpeak(dialogue);
            break;
        case 4:
            dialogue=" Hey stop it!!!!!!! It tickles!!!!"
            dialogueSize=dialogue.length*70;
            floweyNormalInteraction(dialogueSize,"mad");
            floweySpeak(dialogue);
            break;
        case 5:
            dialogue = " One more click and I'll tear your soul to PIECES.";
            dialogueSize=dialogue.length*70;
            floweyNormalInteraction(dialogueSize,"evil1","evil");
            floweySpeak(dialogue);
            break;
        case 6:
            // 1. First Threat
            dialogue = "I've had enough with your silly game. I will send you to HELL and tear your LIMBS!";
            dialogueSize = dialogue.length * 70;
            floweyNormalInteraction(dialogueSize, "evil2", "evil");
            floweySpeak(dialogue);

            // 2. Wait for First Threat to finish, then speak again
            setTimeout(() => {
                dialogue = "Anyways lemme set up a gateway from hell. Okay and done.";
                dialogueSize = dialogue.length * 70;
                floweyNormalInteraction(dialogueSize, "normal", "normal");
                floweySpeak(dialogue);

                // 3. Wait for the "Gateway" line to finish
                setTimeout(() => {
                    dialogue = "Now enjoy dying in helllllllllllllll";
                    dialogueSize = dialogue.length * 70;
                    floweyNormalInteraction(dialogueSize, "evil2", "evil");
                    floweySpeak(dialogue);

                    // 4. Final Laugh and Redirect
                    setTimeout(() => {
                        dialogue = "BWUHAHAAHAHAHAHAHAHHAHA!!!!";
                        floweyNormalInteraction(dialogueSize, "evil3", "laugh");
                        floweySpeak(dialogue);
                        
                        // Redirect after 3 seconds of laughing
                        setTimeout(() => {
                            floweyAbility.href = "EasterEgg.html";
                            floweyAbility.click();
                        }, 3000); 

                    }, dialogueSize + 500);
                }, dialogueSize + 500);
            }, dialogueSize + 500);
            
            break;
        
            
    }
    touched++;
};