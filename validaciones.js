

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


labelNombre.hidden = true;
labelEmail.hidden = true;
labelPassword.hidden = true;
confirmarPassword.hidden = true;
span.hidden= true;
spanTerminos.hidden = true;


console.log(confirmarPassword.hidden);
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
    }
    if(password.value != repeatPass.value){

        //alert('las contraseñas no coinciden');
        span.hidden=false;
        password.focus();
       
    }

    if (terminos.checked != true){

        //alert('por favor acepte los terminos');
        spanTerminos.hidden = false;
    }

    
    
}
 formulario.addEventListener('submit',(e) => {
    e.preventDefault()
    validarForm()

 
 });
    
         
        
