let quest = ["Conquer Britain","Set Sail to Atlantic"];
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
        li.append(createButton(i));
        questList.append(li);
    }
}

function createButton(index){
    const button = document.createElement('button');
    button.className="btnQuestComplete"
    button.innerText="X";
    button.onclick = () =>{
        list.splice(index,1);
        loadQuest();
    };
    return button;
}

function clearData(){
    alert("Are you sure to abandon all the quest?");
    questList.innerHTML="";
    quest=[];
    loadQuest();
}


