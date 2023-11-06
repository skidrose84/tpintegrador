

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
let validaciones;
let bandera;


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

        bandera=nombre;
        labelNombre.hidden = false;
       
        nombre.focus();
        validaciones=false;
    }else{
        validaciones=true;
        bandera=email;
    }
    if(email.value === ""){

        labelEmail.hidden = false;
        bandera.focus();
        validaciones=false;
    
    }else{
        validaciones=true;
        bandera=password;
    }
    if(password.value === ""){

        labelPassword.hidden = false;
        bandera.focus();
        validaciones=false;
    }else{
        validaciones=true;
        bandera=repeatPass;
    }
    if(repeatPass.value === ""){
        
        confirmarPassword.hidden= false;
        bandera.focus();
        validaciones=false;
    }else{
        validaciones=true;
    } if(password.value != repeatPass.value){
        confirmarPassword.hidden= true;
      
        span.hidden=false;
        password.focus();
        validaciones=false;
       
    }else{
        validaciones=true;
        bandera=terminos;
    }

    if (terminos.checked != true){

        
        spanTerminos.hidden = false;
        validaciones=false;
    }else{
        validaciones=true;
    }
    

    
    
}
 formulario.addEventListener('submit',(e) => {
    e.preventDefault()
    validarForm()
     if(validaciones===true){
         window.location.href ="iniciarSesion.html";
     }
     
    
    
 
 });
    
         
        
