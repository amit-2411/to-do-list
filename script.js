const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${taskText}
        <button class="delete">Delete</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = "";

    const deleteButton = listItem.querySelector("button");
    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });
});