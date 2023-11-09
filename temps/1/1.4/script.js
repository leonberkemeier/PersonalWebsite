

// // alert("this sucks");

// // // MULTITEXT
// let typingEffect = new Typed (".multiText",{
//     strings:["Coder","Leon","Showman","entertainer"],
//     loop: true,
//     typeSpeed: 200,
//     backSpeed: 300,
//     backDelay: 1500,
// });


// //hacker effect



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
    }, 80);
    
};

document.querySelector(".main h2").onmouseover = event =>{
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
    }, 60);
    
};

// image slider

var counter = 1;
        setInterval(function(){
            document.getElementById('radio'+counter).checked=true;
            counter++;
            if(counter>5){
                counter=1;
            }
        }, 5000);

