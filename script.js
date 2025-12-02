const body = document.querySelector('body');

const cols = Math.floor(body.clientWidth / 10);
const rows = Math.floor(body.clientHeight / 10);

for(let i = 0 ; i < cols*rows; i++){
    let Div = document.createElement('div');
    Div.classList.add('box');
    body.appendChild(Div);
}

const box = document.querySelectorAll('.box');

box.forEach((elem)=>{
    elem.addEventListener('mouseenter',(e)=>{
        e.target.style.backgroundColor = 'green';
        setTimeout(() => {
            e.target.style.backgroundColor = 'transparent';
        }, 400);
    });

    elem.addEventListener('mouseleave',(e)=>{
        setTimeout(() => {
            e.target.style.backgroundColor = 'transparent';
        }, 300);
    });
});