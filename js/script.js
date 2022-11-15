const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const list = document.querySelector('#list');
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    input.value = '';
    
    e.preventDefault();
});