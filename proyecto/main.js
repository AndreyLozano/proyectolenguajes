'use strict'

function validacion(){
    
    // Validacion para el espacio Nombre
    let p1 = document.getElementById("nombre");
    let valido = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if(!p1.value){
        alert("Debes ingresar el campo Nombre");
        p1.focus();
        return false;
    }
    //exec ejecuta la busqueda sobre valido a ver si hay coincidencia
    if (!valido.exec(p1.value))
       {
          alert("El campo Nombre no admite ese caracter");
          p1.focus();
          return false;
       }    
    
    
    // validacion para el espacio Nombre
    let p2 = document.getElementById("lname");
    let valido2 = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if(!p2.value){
        alert("Debes ingresar el campo Apellido");
        p2.focus();
        return false;
    }
    //exec ejecuta la busqueda sobre valido a ver si hay coincidencia
    if (!valido2.exec(p2.value))
       {
          alert("El campo Apellido no admite ese caracter");
          p2.focus();
          return false;
       }    
    
    // Numero de celular
    let p3 = document.getElementById("numero");
    let valido3 = /^\(\+\d{2,3}\)\d{10}$/;

    if(!p3.value){
        alert("Debes ingresar el numero de celular");
        p2.focus();
        return false;
    }
    //exec ejecuta la busqueda sobre valido a ver si hay coincidencia
    if (!valido3.exec(p3.value))
       {
          alert("El campo de Numero de celular no es valido comparelo con este ejemplo (+57)3013165656");
          p3.focus();
          return false;
       }   
    
       // Email  alguien@algunlugar.es
    let p4 = document.getElementById("mail");
    let valido4 = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;


    if(!p4.value){
        alert("Debes ingresar un correo");
        p4.focus();
        return false;
    }
    //exec ejecuta la busqueda sobre valido a ver si hay coincidencia
    if (!valido4.exec(p4.value))
       {
          alert("Debes ingresar un correo valido");
          p4.focus();
          return false;
       }   

          // Contraseña
    let p5 = document.getElementById("password");
    let valido4 = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;


    if(!p5.value){
        alert("Debes ingresar un correo");
        p4.focus();
        return false;
    }
    //exec ejecuta la busqueda sobre valido a ver si hay coincidencia
    if (!valido3.exec(p4.value))
       {
          alert("La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos.");
          p5.focus();
          return false;
       }   
}
