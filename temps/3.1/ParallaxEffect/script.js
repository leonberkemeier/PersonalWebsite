let text=document.getElementById('text');
let right=document.getElementById('imgbox');
let left=document.getElementById('textbox');
let box = document.getElementById('textbox2');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    text.style.marginTop = value * -2.5 + 'px';
    right.style.marginRight = value * -1.5 + 'px';
    left.style.marginLeft = value * -1.5 + 'px';
    box.style.marginLest = value * -1.5 + 'px';

    // right.style.right = value * -1.5 + '%';
    // left.style.right = value * -1.5 + '%';
});