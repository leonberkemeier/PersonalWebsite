

// alert("this sucks");

// // MULTITEXT
let typingEffect = new Typed (".multiText",{
    strings:["Coder","Leon","Showman","entertainer"],
    loop: true,
    typeSpeed: 200,
    backSpeed: 300,
    backDelay: 1500,
});


//hacker effect

const letters ="ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let interval = null;

document.querySelector(".nav__logo h1").onmouseover = event =>{
    let iteration = 0;

    clearInterval(interval);


    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter,index) => {
            if(index < iteration) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

    if(iteration >= event.target.dataset.value.length){
        clearInterval(interval);
    }

    iteration += 1/3;
    }, 50);
    
};

document.querySelector(".projectstext h1").onmouseover = event =>{
    let iteration = 0;

    clearInterval(interval);


    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter,index) => {
            if(index < iteration) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

    if(iteration >= event.target.dataset.value.length){
        clearInterval(interval);
    }

    iteration += 1/3;
    }, 30);
    
};


// // ParallaxEffect

// let right=document.getElementById('imgbox');
// let left=document.getElementById('textbox');
// let splash=document.getElementById('splash');

// window.addEventListener('scroll',() =>{
//     let value = window.screenY;

//     // alert('this works');
//     splash.style.marginLeft = value * -1.5 + 'px';
//     // right.style.right = value * -10.5 + 'px';
//     // left.style.left = value * -10.5 + 'px';
// });


