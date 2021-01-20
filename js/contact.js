let form = document.getElementById("formBlock");
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userMessage = document.getElementById("userMessage");
let submitBtn = document.getElementById("submitBtn");

let msgBlock = document.createElement("div");
let msgTxt = document.createElement("p");
msgBlock.appendChild(msgTxt);

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function checkForm(e){
    e.preventDefault();
    console.log(userName.value.length);
    if(userName.value.length<3){
        msgBlock.setAttribute("class", "message-block-error");
        msgTxt.setAttribute("class", "message-text-error");
        msgTxt.textContent = "Name must be longer than 2 characters";
    }else if(userEmail.value.length <= 0){
        msgBlock.setAttribute("class", "message-block-error");
        msgTxt.setAttribute("class", "message-text-error");
        msgTxt.textContent = "Please enter your email";
    }else if(!validateEmail(userEmail.value)){
        msgBlock.setAttribute("class", "message-block-error");
        msgTxt.setAttribute("class", "message-text-error");
        msgTxt.textContent = "Please enter valid email";    
    }else if(userMessage.value.length <= 0){
        msgBlock.setAttribute("class", "message-block-error");
        msgTxt.setAttribute("class", "message-text-error");
        msgTxt.textContent = "Please enter your message"; 
    }else{
        msgBlock.setAttribute("class", "message-block-success");
        msgTxt.setAttribute("class", "message-text-success");
        msgTxt.textContent = "Success";
    }
    form.appendChild(msgBlock);
    userMessage.value = "";
}

submitBtn.addEventListener("click", (e) => {
    checkForm(e);
});
