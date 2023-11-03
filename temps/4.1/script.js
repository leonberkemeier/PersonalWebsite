

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

// let right=document.getElementById('imgbox');
// let left=document.getElementById('textbox');

let splash=document.getElementById('splash');
let profile=document.getElementById('profile');

window.addEventListener('scroll',() =>{
    let value = window.screenY;

    // alert('this works');
    splash.style.marginLeft = value * -1.5 + 'px';
    // right.style.right = value * -10.5 + 'px';
    // left.style.left = value * -10.5 + 'px';
});


