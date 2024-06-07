


// // -----------------------


// // const letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// // let interval = null;

// // const flicker = document.querySelector(".nav__logo h1")

// // flicker.onmouseover = event =>{
// //     let iteration = 0;
// //     clearInterval(interval);
// //     interval = setInterval(() => {
// //         event.target.innerText = event.target.innerText
// //         .split("")
// //         .map((letter,index) => {
// //             if(index < iteration) {
// //                 return event.target.dataset.value[index];
// //             }
// //             return letters[Math.floor(Math.random() * 26)]
// //         })
// //         .join("");
// //     if(iteration >= event.target.dataset.value.length){
// //         clearInterval(interval);
// //     }
// //     iteration += 1/3;
// //     }, 80);
// // }




// const flicker = document.querySelector(".nav__logo h1")

// flicker.onmouseover = event=>{
//     let iteration = 0;

//     clearInterval(interval);


//     interval = setInterval(() => {
//         event.target.innerText = event.target.innerText
//         .split("")
//         .map((letter,index) => {
//             if(index < iteration) {
//                 return event.target.dataset.value[index];
//             }
//             return letters[Math.floor(Math.random() * 36)]
//         })
// //         .join("");

// //     if(iteration >= event.target.dataset.value.length){
// //         clearInterval(interval);
// //     }
 
// //     iteration += 1/3;
// //     }, 80);
    
// // }

// // // let iteration = 0;

// // // // clearInterval(interval);

// // // flicker = document.querySelector(".nav__logo h1")
// // // const observer = new IntersectionObserver((entries) => {
// // //     entries.forEach((entry) => {
// // //         console.log(entry)
// // //         if (entry.isIntersecting)  {
// // //             entry.target.classList.add('show');            
            
// // //             const letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// // //             let interval = null;
            
// // //             let iteration = 0;
        
// // //             clearInterval(interval);
        
        
// // //             interval = setInterval(() => {
// // //                 event.target.innerText = event.target.innerText
// // //                 .split("")
// // //                 .map((letter,index) => {
// // //                     if(index < iteration) {
// // //                         return event.target.dataset.value[index];
// // //                     }
// // //                     return letters[Math.floor(Math.random() * 36)]
// // //                 })
// // //                 .join("");
        
// // //             if(iteration >= event.target.dataset.value.length){
// // //                 clearInterval(interval);
// // //             }
            
// // //             iteration += 1/3;
// // //             }, 80);
                
            

            
// // //         } else {
// // //             entry.target.classList.remove('show');
// // //         }
// // //     });
// // // });


// // // const hiddenElements = document.querySelectorAll('.hidden');
// // // hiddenElements.forEach((el) => observer.observe(el));

// // // const observer = new IntersectionObserver((entries) => {
// // //     entries.forEach((entry) => {
// // //         console.log(entry)
// // //         if (entry.isIntersecting) {
// // //             entry.target.classList.add('show');

// // //             let iteration = 0;

// // //             clearInterval(interval);


// // //             interval = setInterval(() => {
// // //                 event.target.innerText = event.target.innerText
// // //                 .split("")
// // //                 .map((letter,index) => {
// // //                     if(index < iteration) {
// // //                         return event.target.dataset.value[index];
// // //                     }
// // //                     return letters[Math.floor(Math.random() * 26)]
// // //                 })
// // //                 .join("");

// // //             if(iteration >= event.target.dataset.value.length){
// // //                 clearInterval(interval);
// // //             }

// // //             iteration += 1/3;
// // //             }, 200);
            
// // //         }


// // //         } else {
// // //             entry.target.classList.remove('show');
// // //         }
// // //     });
// // // });


// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             // entry.target.classList.add('show');
            
//                 // alert("intersection")
//                 let iteration = 0;
                
//                 clearInterval(interval);

//                 interval = setInterval(() => {
//                     entry.target.innerText = entry.target.innerText
//                     .split("") 
//                     .map((letter,index) => {
//                         if(index < iteration) {
//                             return entry.target.dataset.value[index];
//                         }
//                         return letters[Math.floor(Math.random() * 26)]
//                     })
//                     .join("");

//                     alert("run")

//                 if(iteration >= entry.target.dataset.value.length){
//                     clearInterval(interval);
//                 }

//                 iteration += 1/3;
//                 }, 60);
                
            
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });


// // const hiddenElements = document.querySelectorAll('.hidden');
// // hiddenElements.forEach((el) => observer.observe(el));




// // const letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// // let interval = null;

// // document.querySelector("h1").onmouseover = event =>{
// //     let iteration = 0;

// //     clearInterval(interval);


// //     interval = setInterval(() => {
// //         event.target.innerText = event.target.innerText
// //         .split("")
// //         .map((letter,index) => {
// //             if(index < iteration) {
// //                 return event.target.dataset.value[index];
// //             }
// //             return letters[Math.floor(Math.random() * 26)]
// //         })
// //         .join("");

// //     if(iteration >= event.target.dataset.value.length){
// //         clearInterval(interval);
// //     }

// //     iteration += 1/3;
// //     }, 60);
    
// // }


// const letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let interval = null;

// document.querySelector("h1").onmouseover = event =>{
//     let iteration = 0;

//     clearInterval(interval);


//     interval = setInterval(() => {
//         event.target.innerText = event.target.innerText
//         .split("")
//         .map((letter,index) => {
//             if(index < iteration) {
//                 return event.target.dataset.value[index];
//             }
//             return letters[Math.floor(Math.random() * 26)]
//         })
//         .join("");

//     if(iteration >= event.target.dataset.value.length){
//         clearInterval(interval);
//     }

//     iteration += 1/3;
//     }, 60);
    
// }


function textHackerEffect(event){
    
    const letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;

    clearInterval(interval);
    let iteration = 0;


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
    
}
// document.querySelector(".nav__logo1 h1").onmouseover = textHackerEffect
// document.querySelector(".nav__logo2 h1").onmouseover = textHackerEffect
// document.querySelector(".nav__logo3 h1").onmouseover = textHackerEffect


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            textHackerEffect(entry)
            
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.effect');
hiddenElements.forEach((el) => observer.observe(el));