

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

// ====== Collapsibles =====

const chevron = document.querySelector('chevron-down');

document.getElementById('the-button0').addEventListener('click', function() {
  var icon = this.querySelector('.chevron-down');
  icon.classList.toggle('rotate');
});

document.getElementById('the-button1').addEventListener('click', function() {
  var icon = this.querySelector('.chevron-down');
  icon.classList.toggle('rotate');
});

document.getElementById('the-button2').addEventListener('click', function() {
  var icon = this.querySelector('.chevron-down');
  icon.classList.toggle('rotate');
});

document.getElementById('the-button3').addEventListener('click', function() {
  var icon = this.querySelector('.chevron-down');
  icon.classList.toggle('rotate');
});

document.getElementById('the-button4').addEventListener('click', function() {
  var icon = this.querySelector('.chevron-down');
  icon.classList.toggle('rotate');
});

document.getElementById('the-button5').addEventListener('click', function() {
  var icon = this.querySelector('.chevron-down');
  icon.classList.toggle('rotate');
});

document.getElementById('the-button6').addEventListener('click', function() {
  var icon = this.querySelector('.chevron-down');
  icon.classList.toggle('rotate');
});

document.getElementById('the-button7').addEventListener('click', function() {
  var icon = this.querySelector('.chevron-down');
  icon.classList.toggle('rotate');
});

document.getElementById('the-button8').addEventListener('click', function() {
  var icon = this.querySelector('.chevron-down');
  icon.classList.toggle('rotate');
});

document.getElementById('the-button9').addEventListener('click', function() {
  var icon = this.querySelector('.chevron-down');
  icon.classList.toggle('rotate');
});


var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {

        
        this.classList.toggle("active");
        
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
      
    };

