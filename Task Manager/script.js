// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Add Task Button Event Listener
    document.getElementById('addTaskBtn').addEventListener('click', addTask);

    // Function to Add a New Task
    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskList = document.getElementById('taskList');

            // Create List Item
            const newTask = document.createElement('li');

            // Create Task Text Span
            const taskSpan = document.createElement('span');
            taskSpan.classList.add('task-text');
            taskSpan.textContent = taskText;
            newTask.appendChild(taskSpan);

            // Complete Task Toggle
            taskSpan.addEventListener('click', function() {
                newTask.classList.toggle('completed');
            });

            // Create Delete Button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', function(event) {
                event.stopPropagation();
                taskList.removeChild(newTask);
            });

            newTask.appendChild(deleteBtn);
            taskList.appendChild(newTask);
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    }
});
