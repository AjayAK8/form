const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')



form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(validateInputs())
    window.location.replace("login.html")
})



function validat(){
    const mail = loginemail.value.trim();
    const pass = loginpassword.value.trim();
    let success = true
    if(mail===""){
        success=false;
        seterror(loginemail,)
    }

}

function validateInputs(){
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true

    if(emailVal===""){
        success=false;
        seterror(email,"Enter a email id")
    }
    else if(!validateEmail(emailVal)){
        success=false;
        seterror(email,"Enter a valid email")
    }
    else{
        setsuccess(email)
    }

    if(passwordVal===""){
        success=false;
        seterror(password,"Enter a password")
    }
    else if(passwordVal.length<8){
        success=false;
        seterror(password,"password contain atleast 8 Charaters")
    }
    else{
        setsuccess(password)
    }

    if(cpasswordVal===""){
        success=false;
        seterror(cpassword,"Enter a password")
    }
    else if(cpasswordVal!==passwordVal){
        success=false;
        seterror(cpassword,"Enter a correct password")
    }
    else{
        setsuccess(cpassword)
    }
    return success
}



function seterror(element,message){
    const inputgorup = element.parentElement;
    const errorElement = inputgorup.querySelector('.error')

    errorElement.innerText = message;
    inputgorup.classList.add('error')
    inputgorup.classList.remove('success')

}

function setsuccess(element){
    const inputgorup = element.parentElement;
    const errorElement = inputgorup.querySelector('.error')

    errorElement.innerText = '';
    inputgorup.classList.add('success')
    inputgorup.classList.remove('error')

}

const validateEmail = (email) =>{
    return String(email)
    .toLowerCase()
    .match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); 
};