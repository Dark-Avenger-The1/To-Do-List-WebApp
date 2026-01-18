let quest = ["Conquer Britain","Set Sail to Atlantic"];
let alter = [0,0];
let btnAdd = document.querySelector(".btnAdd");
let questList = document.querySelector('.ulQuestList');
let txtQuest = document.querySelector('.txtQuest');
let btnClear = document.querySelector('.btnClear');

loadQuest();
btnAdd.onclick = () =>{
    addQuest();
};
btnClear.onclick = () => {
    clearData();
};

function addQuest(){
    let questName = txtQuest.value; // Get the text typed in the box
    if (questName === "") {
        alert("Enter a Quest");
       return;
    }else if(quest.includes(questName)){
        alert(questName+" Already Exist");
        return;
    }else{
        quest.push(questName); // Use .push() for arrays
        alter.push(0);
        floweyInteractButton("add",questName);
         // Clear the box after adding
        txtQuest.value="";
        loadQuest(); // Refresh the list on screen
    }
}

function loadQuest(){
    questList.innerHTML="";
    let accumaltor ="";
    for(let i =0;i<quest.length;i++){
        accumaltor=quest[i];
        const li = document.createElement("li");
        li.textContent=accumaltor;
        li.style.color=(alter[i]===0)?"red":"green";
        li.append(createButton(i));
        li.onclick = () =>{
            if(alter[i]===0){
                li.style.color ="green";
                floweyInteractButton("completed",accumaltor)
                console.log("Green");
                alter[i]+=1;
            }
            else if(alter[i]===1){
                li.style.color ="red"
                console.log("Red");
                alter[i]-=1;
            }
            
            
        }
        questList.append(li);
    }
}

function createButton(index){
    const button = document.createElement('button');
    button.className="btnQuestComplete"
    button.innerText="X";
    button.onclick = () =>{
        let toRemove = quest[index];
        quest.splice(index,1);
        alter.splice(index,1);
        loadQuest();
        floweyInteractButton("delete",toRemove);
    };
    return button;
}

function clearData(){
    if (confirm("Are you sure to abandon all the quests?")) {
    // This code ONLY runs if they click OK
    questList.innerHTML = "";
    quest = [];
    alter=[];
    loadQuest();
    floweyInteractButton("clear", "");
    } else {
        // This runs if they click Cancel
        let dialogue ="Hee hee... I knew you didn't have the guts to quit!";
        let time=dialogue.length;
        floweyNormalInteraction(time);
        floweySpeak(dialogue);
    }
}


