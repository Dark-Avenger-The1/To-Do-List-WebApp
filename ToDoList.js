const list = ["Conquer Britain","Set Sail to Atlantic"];
let btnAdd = document.querySelector(".btnAdd");


btnAdd.onclick = () =>{
    addQuest();
};

function addQuest(){
    let quest = document.querySelector(".txtQuest").text;
    list.add(quest);
}

function loadQuest(){
    for(let i =0;i<list.length;i++){
        
    }
}
