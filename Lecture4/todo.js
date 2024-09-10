let task = document.getElementById('new-task').trim();
let task_container=document.getElementById('task-container');


function add(){
    if(task.value==''){ 
        alert('You must write something');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=task.value;
        task_container.appendChild(li);
        const todoItems = `<div title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">${task.value}</div><div>
                    <img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="/images/pencil.png" />
                    <img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="/images/delete.png" /></div></div>`;
        li.innerHTML=todoItems;
        task_container.appendChild(li);
    }
    task.value=''
}

