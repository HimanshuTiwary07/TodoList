const todoinput = document.querySelector(".todo-input")
const todobutton = document.querySelector(".todo-button")
const todolist = document.querySelector(".todo-list")



todobutton.addEventListener("click", addTodo);
todolist.addEventListener("click", deletecheck);



function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = todoinput.value;

    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-trash-o"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);


    todolist.appendChild(todoDiv);
    
     todoinput.value="";

}



function deletecheck(event){
    const item=event.target;

    if(item.classList[0]==="trash-btn"){
        item.parentElement.classList.add("fall");
        item.parentElement.addEventListener('transitionend',function(){
        item.parentElement.remove();
        });

    }
    
    if(item.classList[0]==="complete-btn"){
        item.parentElement.classList.toggle('completed');
    }
}


var btn = document.getElementsByClassName('remove-opt-btn')
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function(e) {
    e.currentTarget.parentNode.parentNode.remove();
  }, false);
}