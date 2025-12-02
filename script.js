const body = document.querySelector('body');
const cols = Math.floor(body.clientWidth / 10);
const rows = Math.floor(body.clientHeight / 10);
const total = cols*rows;
const arr = new Array(total).fill(0);

function creatDiv(){
    let Div = document.createElement('div');
    Div.classList.add('box');
    body.appendChild(Div);
};

arr.forEach(()=>{
    creatDiv();
});

const box = document.querySelectorAll('.box');

box.forEach((elem)=>{
    elem.addEventListener('mouseenter',(e)=>{
        if(e.target.classList.contains('box')){
            e.target.classList.add('active');
            setTimeout(() => e.target.classList.remove('active'), 400);
        }
    });
});