function addTask(){
const input = document.getElementById('inputTask');
    const value = input.value.trim();
    if (value === "") {
        // Do not add empty task
        return;
    }
    const newTask = document.createElement('li');
    const taskList = document.getElementById('taskList');
    newTask.textContent = value;
    taskList.appendChild(newTask);
    input.value = "";
    deleteTask(newTask);
}

function deleteTask(newTask)
    {
        const deletebtn = document.createElement('button')
        deletebtn.textContent = "Delete"
        newTask.appendChild(deletebtn)
        deletebtn.onclick = function()
        {
            newTask.remove()
        }
    }