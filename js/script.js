const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const list = document.querySelector('#list');
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    const li = document.createElement('li');
    const span = document.createElement('span');

    span.innerHTML = '<img src="img/delete.png" alt="Delete Icon">';
    li.innerHTML = input.value;

    span.onclick = () => del(li);

    li.appendChild(span);
    list.appendChild(li);

    input.value = '';
    e.preventDefault();
});

function del(element) {
    element.remove();
}