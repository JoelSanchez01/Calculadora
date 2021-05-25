const container = document.querySelector('.container');
const input = document.querySelector('input.texto');
const borrar = container.querySelector('#borrar');
const reiniciar = container.querySelector('#reiniciar');
const ArregloNodos = [...container.querySelectorAll('button')];

const operaciones = [...container.querySelectorAll('div .operacion')];

const igual = container.querySelector('#igual');

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


igual.addEventListener('click', () =>{

})


//AGREGAR EVENTO A LOS NUMEROS NUMERO
NumBotones.forEach(boton => {
    boton.addEventListener('click', AgregarNumero);
})


var anterior, actual, operador, calculo = 1;

const Operacion = (event) => {
    //if (input.value == '') return alert('Cuadro Vacio!');
    
        if(anterior == null){ 
            operador = event.target.innerText;
            anterior = input.value;      
            input.value = '';
        }    
        else {
            actual = input.value;
        
            input.value = '';
            
            switch (operador) {
            case '+':
                calculo = parseInt(anterior) + parseInt(actual);
                input.value = '';
                break;
            case '-':
                calculo = parseInt(anterior) - parseInt(actual);
                input.value = '';
                break;
            case 'x':
                calculo = parseInt(anterior) * parseInt(actual);
                input.value = '';
                break;
            case '/':
                calculo = parseInt(anterior) / parseInt(actual);
                input.value = '';
                break;
            case '=':
                input.value = calculo;
                anterior = null;
                actual = null;
                break;
        }
        input.value = calculo;
        anterior = null;
        actual = null;
    }
    


}




operaciones.forEach(boton => {
    boton.addEventListener('click', Operacion);
})
