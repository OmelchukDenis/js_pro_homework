$(function(){
    const $todoList = $('#todoList');
    const $newTodoForm = $('#newTodoForm');
    const todoItemTemplate = $('#todoItemTemplate').html();

    $todoList.on('click', '.deleteBtn', onDeleteBtnClick);
    $newTodoForm.on('submit', onSaveClick)

    let todoListItems = [
        {
            isDone: true
        },
        {
            isDone: false
        },
        {
            isDone: true
        },
    ].map((el, index) => {
        el.id = index;
        el.title = 'Title ' + index;
        return el;
    })

    init();

    function init(){
        renderTodoList()
    }

    function renderTodoList(){
        const todoListItemsHTML = todoListItems.map(el => {
            return getTodoItemHtml(el)
        })
        $todoList.html(todoListItemsHTML.join(''));
    }

    function getTodoItemHtml({id, title, isDone}){
        return todoItemTemplate.replace('{{id}}', id)
                                .replace('{{title}}', title)
                                .replace('{{isDone}}', isDone ? 'done' : '')
    }

    function onDeleteBtnClick(e){
        const $el = $(this);
        let c = $el.closest('.todoitem').data('todoid');
        deleteTodoItem(c);
    }

    function deleteTodoItem(idTodoDelete){
        todoListItems = todoListItems.filter(({id}) => id != idTodoDelete);
        $(`[data-todoid="$(idTodoDelete)"]`).remove();
    }

    function onSaveClick(e){
        e.preventDefault();
        const newTodoItem = {
            id: Date.now(),
            isDone: false
        }
        $newTodoForm.serializeArray().forEach(({name, value}) => {
            newTodoItem[name] = value;
        })

        todoListItems.push(newTodoItem);
        todoList.append(getTodoItemHtml(newTodoItem))
    }

})