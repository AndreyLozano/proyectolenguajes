function total(){
    let container = document.getElementById("container");
    for(let i = 0; i<60; i++){
        let data = sessionStorage.getItem("nuevo"+i);
        console.log(data);
        if (data != null){
            let produ = document.createElement("td");
            produ.innerHTML = data;
            container.appendChild(produ);
        }
    }

    let suma = 0;
    for(let i = 0; i<60; i++){
        if(document.getElementById('precio'+i) != null){
        let precio = document.getElementById('precio'+i);
        suma += parseInt(precio.textContent);
        }  
     }
     let total = document.getElementById('total');
     total.innerHTML = suma+"Pesos";
     console.log(suma);
}

function pagar(){
    location.href="formulario.html";
}

