const root = document.getElementById('root');

const data = fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json()).then(
        (data) => { root.innerHTML = data.map((user) => {
                return `<span>${user.name}</span>`;
            }).join('');
        }
    );
// add class title to all span elements
const title = document.querySelector('span');
title.classList.add('title');












