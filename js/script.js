const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const list = document.querySelector('#list');
const form = document.querySelector('#form');
const empty = document.querySelector('#empty');

// Local Storage
list.innerHTML = localStorage.getItem('localList')

// Delete Debug on refresh
const spanDeletes = document.querySelectorAll('.delete');

for (let span of spanDeletes) {
    span.onclick = () => del(span.parentElement.parentElement);
}

// Favorite Debug on refresh
const favorites = document.querySelectorAll('.favorite');

for (let favorite of favorites) {
    favorite.onclick = () => fav(favorite);
}

if (list.innerHTML == '') {
    empty.style.display = 'block';
} else {
    empty.style.display = 'none';
}

form.addEventListener('submit', (e) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const favorite = document.createElement('span');
    const wrp = document.createElement('div');


    li.innerHTML = input.value;

    span.classList.add('delete');
    span.innerHTML = '<img src="img/delete.png" alt="Delete Icon">';
    span.onclick = () => del(li);

    favorite.classList.add('favorite');
    favorite.onclick = () => fav(favorite);

    wrp.classList.add('wrp');
    
    empty.style.display = 'none';

    li.appendChild(wrp);
    wrp.appendChild(favorite);
    wrp.appendChild(span);
    list.appendChild(li);

    
    input.value = '';
    e.preventDefault();

    localStorage.setItem('localList', list.innerHTML);
});

// Delete Li
function del(element) {
    element.remove();

    if (list.innerHTML == '') {
        empty.style.display = 'block';
    } else {
        empty.style.display = 'none';
    }

    localStorage.setItem('localList', list.innerHTML);
}

// Favorite 
function fav(element) {
    element.classList.toggle('favorite-active');
    localStorage.setItem('localList', list.innerHTML);
}

// Resizing Phone Keyboard
const metas = document.getElementsByTagName('meta');
metas[1].content = `width=device-width, height=${window.innerHeight}, initial-scale=1.0`;