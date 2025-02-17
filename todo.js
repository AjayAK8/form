let button = document.getElementById("add")
let todolist = document.getElementById("todoList")
let input = document.getElementById("input")

let todos = [];
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todosk')) || []
    todos.forEach(todo=>addtodo(todo))
}

button.addEventListener("click",()=>{
    todos.push(input.value)
    localStorage.setItem('todosk',JSON.stringify(todos))
    addtodo(input.value)
    input.value=""

})

function addtodo(todo){
    let para = document.createElement('p')
    para.innerText = todo;
    todolist.appendChild(para) 
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo) 
    })

    para.addEventListener('dblclick',()=>{
        todolist.removeChild(para) 
        remove(todo) 
    })
    
}

function remove(todo){
    let index = todos.indexOf(todo)
    if(index>-1){
        todos.splice(index,1) 
    }
    localStorage.setItem('todosk',JSON.stringify(todos))   

}