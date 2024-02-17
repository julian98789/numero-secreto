let numSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numMaximo = 100;

function asiganrTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verficarIntento(){

    let numUsuario = parseInt(document.getElementById('id').value);
   
    if(numUsuario === numSecreto){
        asiganrTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else if(numUsuario > numSecreto){
        //si es mas de un intento 
        asiganrTextoElemento('p', 'El numero es menor');

        }else{
            asiganrTextoElemento('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    
    return;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensajes de intervalo de numeros
    //generar un nuevo numero secreto
    //inicializar los intentos
    condicionesIniciales();
    //desabilitar el boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}

function condicionesIniciales(){
    asiganrTextoElemento('h1', 'Juego del numero secreto');
    asiganrTextoElemento('p', `Indica un numero del 1 al ${numMaximo}`);
    numSecreto = obtenerNumeroRandom();
    intentos = 1;
}

function limpiarCaja(){
    document.querySelector('#id').value = '';
    return;
}

function obtenerNumeroRandom(){
    let numeroGenerado = Math.floor(Math.random() * numMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si sorteamos todos los numeros

    if(listaNumerosSorteados.length === numMaximo){
        asiganrTextoElemento('p', 'Se sortearon todos los numeros');
    }else{

        //si en numero sorteado esta incluido en la lista de numeros sorteados
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return obtenerNumeroRandom();
   
        }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
 
}

condicionesIniciales();



