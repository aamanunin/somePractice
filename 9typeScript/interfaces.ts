function showTodo(todos: {title: string, text: string}) {
    console.log(todos.title + ': ' + todos.text);
}

let myTodo = {title: 'Trash', text: 'Take my Trash'};

showTodo(myTodo);

interface Todo {
    title: string;
    text: string;
}

function showTodo1(todo: Todo) {
    console.log(todo.title + ': ' + todo.text);
}
let myObj = {title: 'Trash', text: 'Take it'};
showTodo1(myObj);