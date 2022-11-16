const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const list = document.querySelector('#list');
const form = document.querySelector('#form');
const empty = document.querySelector('#empty');

list.innerHTML = localStorage.getItem('localList')

const spanDeletes = document.querySelectorAll('.delete');

for (let span of spanDeletes) {
    span.onclick = () => del(span.parentElement);
}

if (list.innerHTML == '') {
    empty.style.display = 'block';
} else {
    empty.style.display = 'none';
}

form.addEventListener('submit', (e) => {
    const li = document.createElement('li');
    const span = document.createElement('span');

    empty.style.display = 'none';

    span.classList.add('delete');
    span.innerHTML = '<img src="img/delete.png" alt="Delete Icon">';
    li.innerHTML = input.value;

    span.onclick = () => del(li);

    li.appendChild(span);
    list.appendChild(li);

    
    input.value = '';
    e.preventDefault();

    localStorage.setItem('localList', list.innerHTML);
});

function del(element) {
    element.remove();

    if (list.innerHTML == '') {
        empty.style.display = 'block';
    } else {
        empty.style.display = 'none';
    }

    localStorage.setItem('localList', list.innerHTML);
}