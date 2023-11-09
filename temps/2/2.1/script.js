

// alert("this sucks");

// // // MULTITEXT
// let typingEffect = new Typed (".multiText",{
//     strings:["Coder","Leon","Showman","entertainer"],
//     loop: true,
//     typeSpeed: 200,
//     backSpeed: 300,
//     backDelay: 1500,
// });



// ParallaxEffect

let right=document.getElementById('imgbox');
let left=document.getElementById('textbox');



window.addEventListener('scroll',() =>{
    let value = window.screenY;

    right.style.marginRight = value * -1.5 + 'px';
    left.style.marginLeft = value * -1.5 + 'px';
});


