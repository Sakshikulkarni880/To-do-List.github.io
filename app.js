//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//EVENT LISTENERS
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click',filterTodo)

//FUNCTIONS
function addTodo(event){
    //prevent form from submitting
    event.preventDefault()
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedbutton = document.createElement("button");
    completedbutton.innerHTML = '<i class="fas fa-check"></i>';
    completedbutton.classList.add("complete-btn");
    todoDiv.appendChild(completedbutton);
    //check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value="";
    
    // console.log("hello");
}

function deleteCheck(event){
    // console.log(event.target);
    const item = event.target;
    //delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove()
    }

    //check mark
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
    
}

function filterTodo(event){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(event.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break; 
        }
    });

}