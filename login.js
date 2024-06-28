const loginform = document.querySelector('#loginform')
const loginemail = document.querySelector('#loginemail')
const loginpassword = document.querySelector('#loginpassword') 

loginform.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(validateInputs())
    window.location.replace("todo.html")
}) 

function validateInputs(){
    const emailVal = loginemail.value.trim();
    const passwordVal = loginpassword.value.trim();
    
    let success = true

    if(emailVal===""){
        success=false;
        seterror(loginemail,"Enter a email id")
    }
    else if(!validateEmail(emailVal)){
        success=false;
        seterror(loginemail,"Enter a valid email")
    }
    else{
        setsuccess(loginemail)
    }

    if(passwordVal===""){
        success=false;
        seterror(loginpassword,"Enter a password")
    }
    else if(passwordVal.length<8){
        success=false;
        seterror(loginpassword,"password contain atleast 8 Charaters")
    }
    else{
        setsuccess(loginpassword)
    }

    
    return success
}



function seterror(element,message){
    const inputgorup = element.parentElement;
    const errorElement = inputgorup.querySelector('.loginerror')

    errorElement.innerText = message;
    inputgorup.classList.add('error')
    inputgorup.classList.remove('success')

}

function setsuccess(element){
    const inputgorup = element.parentElement;
    const errorElement = inputgorup.querySelector('.loginerror')

    errorElement.innerText = '';
    inputgorup.classList.add('success')
    inputgorup.classList.remove('error')

}

const validateEmail = (email) =>{
    return String(email)
    .toLowerCase()
    .match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); 
};