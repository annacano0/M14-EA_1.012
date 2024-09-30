const taskContainer=document.getElementById("task-container")
var tasks=[]
const maxTasks=20

function addTask(){
    let newTask=document.getElementById("task-input").value
    if(newTask&&validateTaskMessage(newTask)&&(tasks.length+1<maxTasks)){
        createTaskElement(newTask)
        document.getElementById("task-input").value=""
    }
}

function validateTaskMessage(message){//TODO: implement this
    return true
}

function clearAllTasks(){
    console.log("clear tasks")
    taskContainer.innerHTML=""
}
function getDeleteButton(id){
    let deleteButton=document.createElement("button")
    deleteButton.addEventListener('click', ()=>{
        deleteTask(id)
    })
    deleteButton.innerText="Delete"
    return deleteButton
}

function generateId(){
    let valid=false
    let id=0
    do{
        id= Math.floor(Math.random() * maxTasks)
        if(!tasks.includes(id)) valid=true
    }while(!valid)
    tasks.push(id)
    return id
}   


function createTaskElement(message){
    let taskId=generateId()
    let task=document.createElement("li");
    task.setAttribute("id", taskId);
    let taskMessage=document.createElement("p");
    taskMessage.innerText=message;
    task.appendChild(taskMessage)
    task.appendChild(getDeleteButton(taskId))
    taskContainer.appendChild(task)
}

function deleteTask(taskId){
    let selectedTask=document.getElementById(taskId)
    tasks.pop(taskId)
    taskContainer.removeChild(selectedTask)
    console.log(tasks)
    console.log("eliminar tarea: "+taskId)
}