
const app = document.querySelector('#app');

const inputEl = document.createElement('input');
inputEl.id = 'todoInput';
inputEl.placeholder = '할 일 입력';
app.appendChild(inputEl);

const addBtn = document.createElement('button');
addBtn.id = 'addBtn';
addBtn.textContent = '추가';
app.appendChild(addBtn);

const listEl = document.createElement('ul');
listEl.id = 'todoList';
app.appendChild(listEl);

const countEl = document.createElement('p');
countEl.id = 'count';
countEl.textContent = '총 0개';
app.appendChild(countEl);

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