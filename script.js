
//*******************   La date     *******************//
const now = new Date ();
document.getElementById("today").textContent =  now.toLocaleDateString('fr-FR', {month: 'long', day: 'numeric'});
document.getElementById("weekday").textContent = now.toLocaleString('fr-FR', {  weekday: 'long' });


//******************* Ajouter une tâche   *******************//
const list = document.getElementById("list");
const btn = document.querySelector(".fa-plus-square");
const inputTask = document.getElementById("writeTask")
const listWrap= document.getElementById("list-wrap")


const checkScroll =()=> {
 if(list.childElementCount >= 5){
listWrap.style.overflow ="scroll";
}}

let addTask = () =>{ 
if (inputTask.value.length > 0){
const newTask = `<li class="task"><i class="far fa-circle" data_job="complete"></i><div class="textWrap"><p class="taskText">${ inputTask.value}</p></div><i class="far fa-trash-alt" data_job="remove"></i></li>`;
list.insertAdjacentHTML( "beforeend",newTask );
inputTask.value= "";
checkScroll();
btn.style.color="#fbdba9"
}
}
btn.addEventListener("mousedown", addTask)

btn.addEventListener("mouseup", ()=>{
    btn.style.color="#fff";
})


//*******************   Cocher et Décocher // Supprimer la tâche  *******************//
const uncheck = "fa-circle"
const check = "fa-check-circle"
const lineTrough ="lineTrough"


list.addEventListener("click", function(event){
let element = event.target;
const job = element.getAttribute('data_job');
if(job == "complete"){
element.classList.toggle(check);
element.classList.toggle(uncheck);
element.parentNode.querySelector(".taskText").classList.toggle(lineTrough)
}else if( job == "remove"){
 element.parentNode.parentNode.removeChild(element.parentNode)
}
})
