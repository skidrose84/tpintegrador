

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
    validaciones=0;
    if(nombre.value === ""){
        
        bandera=nombre;
        labelNombre.hidden = false;
        bandera.focus();
        
    }else{
        
        bandera=email;
        validaciones = validaciones +1;
       // alert('entro1');
        
    }
    if(email.value === ""){
        
        labelEmail.hidden = false;
        bandera.focus();
        
        
    
    }else{
        
        bandera=password;
        validaciones =validaciones +1;
        //alert('entro 2');
        
    }
    if(password.value === ""){
        
        labelPassword.hidden = false;
        bandera.focus();
        
       
    }else{
        
        bandera=repeatPass;
        validaciones =validaciones +1;
       // alert('entro3');
        
    }
    if(repeatPass.value === ""){
        
        confirmarPassword.hidden= false;
        bandera.focus();
        
    }else{
        validaciones =validaciones+1;
       // alert('entro4');
        
    } if(password.value != repeatPass.value){
        confirmarPassword.hidden= true;
      
        span.hidden=false;
        password.focus();
     
       
    }else{
        
        bandera=terminos;
        validaciones = validaciones +1;
        
        
        
    }

    if (terminos.checked != true){

        
        spanTerminos.hidden = false;
        
    }else{
        validaciones =validaciones +1;
        //alert('entro6');
        
        
    }
    

    
    
}
 formulario.addEventListener('submit',(e) => {
    e.preventDefault()
    validarForm()
    console.log(validaciones);
      if(validaciones =='6'){
          //alert('hubo :'+validaciones+' validaciones');
         window.location.href ="iniciarSesion.html";
      }else{
          validarForm();
      }
     
    
    
 
 });
    
         
        
