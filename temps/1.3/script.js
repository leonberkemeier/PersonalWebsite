

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


// hover effect 

const handleOnMouseMove = e => {
  const {currentTarget: target} = e;

  const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};

for(const card of document.querySelectorAll(".card")){
  card.onmousemove = e => handleOnMouseMove(e);
};

document.getElementById("grid_skills").onmousemove = e => {
  for(const card of document.getElementsByClassName("skillsItem")){
  const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);

  }
};

// alert('help');


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



// // ====== Modals ===========
// // alert('hi');
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');
// const chevron = document.querySelector('.chevron-down');

// const openModal = function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   };

// const closeModal = function () {
// modal.classList.add('hidden');
// overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);


// document.addEventListener('keydown', function (e) {
//     // console.log(e.key);
  
//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//       closeModal();
//     }
//   });


//   // second modal 

//   const modal1 = document.querySelector('.modal1');
//   const btnCloseModal1 = document.querySelector('.close-modal1');
//   const btnsOpenModal1 = document.querySelectorAll('.show-modal1');
  
//   const openModal1 = function () {
//       modal1.classList.remove('hidden');
//       overlay.classList.remove('hidden');
//     };
  
//   const closeModal1 = function () {
//   modal1.classList.add('hidden');
//   overlay.classList.add('hidden');
//   };
  
//   for (let i = 0; i < btnsOpenModal1.length; i++)
//     btnsOpenModal1[i].addEventListener('click', openModal1);
  
//   btnCloseModal1.addEventListener('click', closeModal1);
//   overlay.addEventListener('click', closeModal1);
  
  
//   document.addEventListener('keydown', function (e) {
//       // console.log(e.key);
    
//       if (e.key === 'Escape' && !modal1.classList.contains('hidden')) {
//         closeModal1();
//       }
//     });  

//   // third

//   const modal2 = document.querySelector('.modal2');
//   const btnCloseModal2 = document.querySelector('.close-modal2');
//   const btnsOpenModal2 = document.querySelectorAll('.show-modal2');
  
//   const openModal2 = function () {
//       modal2.classList.remove('hidden');
//       overlay.classList.remove('hidden');
//     };
  
//   const closeModal2 = function () {
//   modal2.classList.add('hidden');
//   overlay.classList.add('hidden');
//   };
  
//   for (let i = 0; i < btnsOpenModal2.length; i++)
//     btnsOpenModal2[i].addEventListener('click', openModal2);
  
//   btnCloseModal2.addEventListener('click', closeModal2);
//   overlay.addEventListener('click', closeModal2);
  
  
//   document.addEventListener('keydown', function (e) {
//       // console.log(e.key);
    
//       if (e.key === 'Escape' && !modal2.classList.contains('hidden')) {
//         closeModal2();
//       }
//     });


//   // fourth

//   const modal3 = document.querySelector('.modal3');
//   const btnCloseModal3 = document.querySelector('.close-modal3');
//   const btnsOpenModal3 = document.querySelectorAll('.show-modal3');
  
//   const openModal3 = function () {
//       modal3.classList.remove('hidden');
//       overlay.classList.remove('hidden');
//     };
  
//   const closeModal3 = function () {
//   modal3.classList.add('hidden');
//   overlay.classList.add('hidden');
//   };
  
//   for (let i = 0; i < btnsOpenModal3.length; i++)
//     btnsOpenModal3[i].addEventListener('click', openModal3);
  
//   btnCloseModal3.addEventListener('click', closeModal3);
//   overlay.addEventListener('click', closeModal3);
  
  
//   document.addEventListener('keydown', function (e) {
//       // console.log(e.key);
    
//       if (e.key === 'Escape' && !modal3.classList.contains('hidden')) {
//         closeModal3();
//       }
//     });



