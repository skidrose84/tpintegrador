

let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let password = document.getElementById('password');
let repeatPass = document.getElementById('repeatPass');
let terminos = document.getElementById('terminos');

let labelNombre = document.getElementById('labelNombre');
let labelEmail = document.getElementById('labelEmail');
let labelPassword = document.getElementById('labelPassword');
let confirmarPassword = document.getElementById('labelConfirmar');
let span = document.getElementById('span');
let spanTerminos = document.getElementById('spanTerminos');
let formValido= false;


labelNombre.hidden = true;
labelEmail.hidden = true;
labelPassword.hidden = true;
confirmarPassword.hidden = true;
span.hidden= true;
spanTerminos.hidden = true;


function clean(){
 labelEmail.hidden=true;
 labelNombre.hidden = true;
 labelPassword.hidden = true;
 confirmarPassword.hidden= true;

 nombre.textContent ="";
 email.textContent="";
 password.textContent="";
 confirmarPassword.textContent="";

}
function validarForm(){
    if(nombre.value === ""){

        
        labelNombre.hidden = false;
       
        nombre.focus();
    }
    if(email.value === ""){

        labelEmail.hidden = false;
        email.focus();
    
    }
    if(password.value === ""){

        labelPassword.hidden = false;
        labelPassword.focus();
    }
    if(repeatPass.value === ""){
        
        confirmarPassword.hidden= false;
        confirmarPassword.focus();
    }else if(password.value != repeatPass.value){
        confirmarPassword.hidden= true;
      
        span.hidden=false;
        password.focus();
       
    }

    if (terminos.checked != true){

        
        spanTerminos.hidden = false;
    }
    

    
    
}
 formulario.addEventListener('submit',(e) => {
    e.preventDefault()
    validarForm()
    // if(formValido=true){
    //     window.location.href ="index.html";
    // }
     
    
    
 
 });
    
         
        
