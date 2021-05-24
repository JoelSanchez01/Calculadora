const container = document.querySelector('.container');
const input = document.querySelector('input.texto');
const borrar = container.querySelector('#borrar');
const reiniciar = container.querySelector('#reiniciar');
const ArregloNodos = [...container.querySelectorAll('button')];

const operaciones = [...container.querySelectorAll('div .operacion')];


//FILTRAR NODOS
const NumBotones = ArregloNodos.filter((nodos) => {
    return nodos.id < 10;
})

//AGREGAR NUMEROS AL INPUT
const AgregarNumero = (evento) => {
    const num = evento.target.innerText;
    if (input.value.length < 10) {
        input.value += num;
    } else {
        alert("Solo se permite 10 valores");
    }
}

//BORRAR ELEMENTO DEL INPUT
borrar.addEventListener('click', () => {
    let num = input.value.slice(0, input.value.length - 1);
    input.value = num;
});




//AGREGAR EVENTO A LOS NUMEROS NUMERO
NumBotones.forEach(boton => {
    boton.addEventListener('click', AgregarNumero);
})

let valor = [], operador = [];

const Operacion = (event) => {
    if (input.value == '') return alert('Cuadro Vacio!');
    
    valor.push(input.value);
    input.value = '';
    operador.push(event.target.innerText);

    if (valor.length > 1){
        
        switch (operador[0]) {
            case '+':
                input.value = parseInt(valor[0]) + parseInt(valor[1]);
                break;
            case '-':
                input.value = parseInt(valor[0]) - parseInt(valor[1]);
                break;
            case 'x':
                input.value = parseInt(valor[0]) * parseInt(valor[1]);
                breakl
            case '/':
                input.value = parseInt(valor[0]) / parseInt(valor[1]);
                break;
        }
        operador.shift();
        valor.shift();
        valor.shift();
        valor.push(input.value);
    }
}

operaciones.forEach(boton => {
    boton.addEventListener('click', Operacion);
})