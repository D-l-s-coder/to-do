function addTask() {
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;

    document.getElementById("task-list").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}
