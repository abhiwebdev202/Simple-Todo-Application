let button = document.getElementById('button');
let todoList = document.getElementById('todoList');
let taskName = document.getElementById('task-name');

button.addEventListener('click', function () {
        let element = document.createElement('li');
        element.innerText = taskName.value;
        todoList.appendChild(element);
        taskName.value = '';
        element.classList.add('list-item')
        element.addEventListener('click', function(){
            element.style.textDecoration = 'line-through';
        })
    })
