let quest = ["Conquer Britain","Set Sail to Atlantic"];
let alter = [0,0];
let btnAdd = document.querySelector(".btnAdd");
let questList = document.querySelector('.ulQuestList');
let txtQuest = document.querySelector('.txtQuest');
let btnClear = document.querySelector('.btnClear');
let search = document.querySelector(".txtFindQuest");
loadQuest(quest,alter);

search.addEventListener("keydown",(event)=>{console.log(event.key);searchQuest(search.value)})
btnAdd.addEventListener("click",()=>addQuest());
txtQuest.addEventListener("keydown",(event)=>{if (event.key === 'Enter') addQuest();});
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
        loadQuest(quest,alter); // Refresh the list on screen
    }
}

function loadQuest(arr,arr2){
    questList.innerHTML="";
    let accumaltor ="";
    for(let i =0;i<arr.length;i++){
        accumaltor=arr[i];
        const li = document.createElement("li");
        li.textContent=accumaltor;
        li.style.color=(arr2[i]===0)?"red":"green";
        li.append(createButton(i));
        li.onclick = () =>{
            if(arr2[i]===0){
                li.style.color ="green";
                floweyInteractButton("completed",arr[i])
                console.log("Green");
                arr2[i]+=1;
            }
            else if(arr2[i]===1){
                li.style.color ="red"
                console.log("Red");
                arr2[i]-=1;
            }
            
            
        }
        questList.append(li);
    }
}

function searchQuest(itemToSearch){
    let tempArray=[];
    let filteredQuest = quest.filter((value,index)=>{
        if(value.toLowerCase().includes(itemToSearch.toLowerCase())){
            tempArray.push(alter[index]);
            return true;
        }else{
            return false;
        }

    });

    loadQuest(filteredQuest,tempArray);
}

function createButton(index){
    const button = document.createElement('button');
    button.className="btnQuestComplete"
    button.innerText="X";
    button.onclick = () =>{
        let toRemove = quest[index];
        quest.splice(index,1);
        alter.splice(index,1);
        loadQuest(quest,alter);
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
    loadQuest(quest,alter);
    floweyInteractButton("clear", "");
    } else {
        // This runs if they click Cancel
        let dialogue ="Hee hee... I knew you didn't have the guts to quit!";
        let time=dialogue.length;
        floweyNormalInteraction(time);
        floweySpeak(dialogue);
    }
}


