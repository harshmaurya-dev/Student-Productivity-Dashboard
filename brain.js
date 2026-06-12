let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function display(){

let list=document.getElementById("taskList");

list.innerHTML="";


tasks.forEach((task,index)=>{


let li=document.createElement("li");


li.innerHTML =
`
<span onclick="completeTask(${index})">
${task.text}
</span>

<button onclick="removeTask(${index})">
Delete
</button>
`;

if(task.done){
li.classList.add("done");
}


list.appendChild(li);


});


updateProgress();

}



function addTask(){

let input=document.getElementById("taskInput");


if(input.value=="") return;


tasks.push({

text:input.value,
done:false

});


save();

input.value="";

}



function completeTask(index){

tasks[index].done=!tasks[index].done;

save();

}



function removeTask(index){

tasks.splice(index,1);

save();

}



function save(){

localStorage.setItem("tasks",JSON.stringify(tasks));

display();

}




function updateProgress(){

let total=tasks.length;

let completed=tasks.filter(t=>t.done).length;


let percent = total ? (completed/total)*100 : 0;


document.getElementById("bar").style.width =
percent+"%";


document.getElementById("count").innerText =
completed+" Tasks Completed";

}




function saveNotes(){

let note=document.getElementById("notes").value;

localStorage.setItem("notes",note);

alert("Notes Saved");

}


document.getElementById("notes").value =
localStorage.getItem("notes") || "";


display();