function car0(){
    let carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    let porfin = document.getElementById("nuevo0").content;
    sessionStorage.setItem("nuevo0", porfin);  
}

function car1(){
    let carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    
}

function car2(){
    let carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    
}

function car3(){
    let carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
   
}

function car4(){
    let carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    
}

function pagar(){
    location.href="carrito.html";
}

function borrar(){
    let carr = +document.getElementById("carrito").value;
    carr = 0;
    sessionStorage.clear();
}
