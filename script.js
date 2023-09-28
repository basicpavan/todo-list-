function addTask() {
    const taskText = document.getElementById("new-task").value;
    if (taskText.trim() === "") {
        alert("Por favor, digite uma tarefa.");
        return;
    }

    const task = {
        text: taskText
    };

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.getElementById("new-task").value = "";
    displayTasks();
}

// Função para exibir as tarefas na lista
function displayTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const tasksContainer = document.getElementById("tasks");

    tasksContainer.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <span>${task.text}</span>
            <button onclick="deleteTask(${index})">Deletar</button>
        `;
        tasksContainer.appendChild(taskElement);
    });
}

// Função para deletar uma tarefa
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

// Carregar tarefas quando a página carregar
displayTasks();