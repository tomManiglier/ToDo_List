const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const list = document.querySelector('#list');
const form = document.querySelector('#form');
const empty = document.querySelector('#empty');

form.addEventListener('submit', (e) => {
    const li = document.createElement('li');
    const span = document.createElement('span');

    empty.style.display = 'none';

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

    if (list.innerHTML == '') {
        empty.style.display = 'block';
    }
}