function cambio(){
    let boton = document.getElementById("boton");
    ancho = numero_aletorio(0,1750);
    altura = numero_aletorio(0,900);

    boton.style.left = ancho+"px";
    boton.style.top = altura+"px";

}

function numero_aletorio(min,max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function alerta(){
    alert("Me pillaste");
}