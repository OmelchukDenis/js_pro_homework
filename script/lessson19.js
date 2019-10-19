const TODO_LIST = document.getElementById('todoList').innerHTML;

const listElement = document.getElementById('list');

function getTodosList(){
    return localStorage.getItem('todos');
}

function renderTodosList(data){
    listElement.innerHTML = data.map(todo => {
        return TODO_LIST.replace('todoname', todo.title)
                        .replace('todoid', todo.id)
    })
}