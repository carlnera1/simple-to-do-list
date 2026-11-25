const inputText = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const textTotalCharacters = document.getElementById("text-total-characters");
let textTotalTasks = document.getElementById("text-total-tasks");

function updateTextTotalTasks(){
    textTotalTasks.textContent = todoList.children.length;
}

addBtn.addEventListener("click", function(){
    const taskText = inputText.value.trim();
    const totalCount = Number(textTotalTasks.value);
    if(taskText === ""){
        return;
    }

    const newEntryLi = document.createElement("li");
    newEntryLi.textContent = taskText;
    
    const delBtn = document.createElement("button");
    delBtn.textContent = "DELETE";
    delBtn.className = "delete-btn";

    delBtn.addEventListener("click", function(){
        newEntryLi.remove();
        updateTextTotalTasks();
    });

    newEntryLi.appendChild(delBtn);
    todoList.appendChild(newEntryLi);
    
    updateTextTotalTasks();
    inputText.value("");
    inputText.focus();
});

inputText.addEventListener("input", function(){
    textTotalCharacters.textContent = "Total Characters: " + inputText.value.length;
});