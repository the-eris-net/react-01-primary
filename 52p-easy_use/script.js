const inputEl = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addBtn');
const listEl = document.querySelector('#todoList');
const countEl = document.querySelector('#count');

let todos = [];

function render() {
    listEl.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;

        const delBtn = document.createElement('button');
        delBtn.textContent = '삭제';
        delBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            render();
        });

        li.appendChild(delBtn);
        listEl.appendChild(li);
    });
    countEl.textContent = `총 ${todos.length}개`;
}

addBtn.addEventListener('click', () => {
    if (inputEl.value.trim()) {
        todos.push(inputEl.value);
        inputEl.value = '';
        render();
    }
});