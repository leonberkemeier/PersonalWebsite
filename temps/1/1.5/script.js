

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
// contact form

//EMAIL JS

function validate() {
    let name=document.querySelector('.name');
    let email=document.querySelector('.email');
    let msg=document.querySelector('.message');
    let sendBtn=document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        }else{
            sendemail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate(); 

function emptyerror(){
    swal({
        title: "Oh noo ... !",
        text: "Fields cannot be empty!",
        icon: "error",
        
      });
}

function sendemail(name,email,msg){
    emailjs.send("service_5qyjunq","template_we5mhmo",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}


function success(){
    swal({
        title: "Email Send successfully",
        text: "We try to reply as fast as possible!",
        icon: "success",
        
      });
};

// alert('this sucks');