//funcion que agrega el texto en las cajas
function agregarTexto(lugar,elemento,contenido){
    const contenedor=document.querySelector(lugar);
    //sobrescribe el contador
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
    const item=document.createElement(elemento);
    let contenido2;
    //quita el 0 dentro del contador
    if(contenido=="0"){
        contenido2="";
    }else{
        contenido2="Cantidad de letras en textarea: "+contenido;
    }
    const textoItem=document.createTextNode(contenido2);
    item.appendChild(textoItem);
    contenedor.appendChild(item);
    item.classList.add("contador_textarea");
}

//Seleccion de colores segun cajas
//funcion que cambia el color de fondo
const cambiaColorFondo=(event)=>{
    //ve que tipo de etiqueta se selecciono
    let claseElemento=event.target.classList.item(0); 
    //selecciona el color de la caja a pesar de clickear sobre el texto de la misma
    if(claseElemento=="contador_textarea"){
        elemento=event.target.parentElement;
    }else{
        elemento=event.target;
    }
    //obtiene el color de la caja que se clickeo
    let cuadradoSeleccionado = window.getComputedStyle(elemento);
    let colorSeleccionado = cuadradoSeleccionado.getPropertyValue('background-color');
    //cambia el color de fondo
    pagina.style.backgroundColor=colorSeleccionado;
}
//selector de la pagina y de las cajas
const pagina=document.querySelector("body");
const cubos=document.querySelectorAll(".cuadrado");
//agrega listeners a cada caja
for(cubo of cubos){    
    cubo.addEventListener("click",cambiaColorFondo);
}

//Seleccion de colores segun selector de color
const selectorColor=(event)=>{
    pagina.style.backgroundColor=event.target.value;
}
const selector=document.querySelector(".selector");
selector.addEventListener("change",selectorColor);

//Contador de caracteres de textarea
const contarCaracteres=(event)=>{
    let contenido=event.target.value;
    let array=Array.from(contenido);    
    for(cubo of cubos){    
        agregarTexto("."+cubo.classList.item(1),"H3",array.length);
    }
}
const areaTexto=document.querySelector(".areaTexto");
areaTexto.addEventListener('input',contarCaracteres);




