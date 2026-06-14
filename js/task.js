const searchTask = document.getElementById("searchTask");
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <input type="checkbox"
                ${task.completed ? "checked" : ""}
                onchange="toggleTask(${index})">

            <b>${task.text}</b>

            <br>

            <small>Due: ${task.date || "No Date"}</small>

            <br><br>

            <button onclick="editTask(${index})">
                Edit
            </button>

            <button onclick="deleteTask(${index})">
                Delete
            </button>

            <hr>
        `;

        taskList.appendChild(li);
    });

    updateStats();
}

addTaskBtn.addEventListener("click", () => {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Enter a task");
        return;
    }

    tasks.push({
        text: taskText,
        date: taskDate.value,
        completed: false
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
    taskDate.value = "";

    displayTasks();
});

function editTask(index) {

    const newTask = prompt(
        "Edit Task",
        tasks[index].text
    );

    if (newTask) {

        tasks[index].text = newTask;

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );

        displayTasks();
    }
}

function deleteTask(index) {

    tasks.splice(index, 1);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    displayTasks();
}

function toggleTask(index) {

    tasks[index].completed =
        !tasks[index].completed;

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    displayTasks();
}

function updateStats() {

    const total = tasks.length;

    const completed =
        tasks.filter(task => task.completed).length;

    const pending = total - completed;

    const progress =
        total === 0
            ? 0
            : Math.round((completed / total) * 100);

    document.getElementById("totalTasks").innerText = total;
    document.getElementById("completedTasks").innerText = completed;
    document.getElementById("pendingTasks").innerText = pending;
    document.getElementById("progressPercent").innerText =
        progress + "%";
}

window.editTask = editTask;
window.deleteTask = deleteTask;
window.toggleTask = toggleTask;

displayTasks();
searchTask.addEventListener("keyup", () => {

    const searchValue =
        searchTask.value.toLowerCase();

    const taskItems =
        document.querySelectorAll("#taskList li");

    taskItems.forEach(item => {

        if (
            item.textContent
                .toLowerCase()
                .includes(searchValue)
        ) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });

});