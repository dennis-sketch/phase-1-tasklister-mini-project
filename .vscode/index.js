document.addEventListener('DOMContentLoaded', function() {
    
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

   
    taskInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    
    const taskValue = document.getElementById('taskInput').value;

    if (taskValue.trim() !== '') {
       
        const newTask = document.createElement('li');
        newTask.textContent = taskValue;

     
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        
        newTask.appendChild(removeButton);

        taskList.appendChild(newTask);

        document.getElementById('taskInput').value = '';
    }
}
