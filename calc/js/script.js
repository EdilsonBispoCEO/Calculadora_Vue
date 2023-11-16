function calcular(num1, operador, num2){
    // const numero1 = document.getElementById('numero1').value;
    // const numero2 = document.getElementById('numero2').value;

    var numero1Convertido = parseFloat(num1) // float -> numero decimais 
    var numero2Convertido = parseFloat(num2)  // Int -> numeros naturais (inteiros)

    var resultado = 0

    if(operador == '+'){
        resultado = numero1Convertido + numero2Convertido    
    } else if ( operador == '-'){
        resultado = numero1Convertido - numero2Convertido    
    } else if (operador == '*'){
        resultado = numero1Convertido * numero2Convertido
    } else if (operador == '/'){
        resultado = numero1Convertido / numero2Convertido
    }

    const numero1 = document.getElementById('numero1')
    numero1.value = resultado
    
    // alert( 'a soma do calculo: ' + resultado )

    // alert( 'a soma do calculo: ' + numero1 + ' ' + operador + ' ' + numero2 + ' = ' + resultado )

}

function digito(numero){
    const numero1 = document.getElementById('numero1')
    numero1.value += numero
}

function apagar() {
    const numero1 = document.getElementById('numero1')
    numero1.value = '' 
}

var primeiroNumero = 0
var segundoNumero = 0
var operadorDigitado = ''

function operadoresDigitado (op) {
    const numero1 = document.getElementById('numero1')
    primeiroNumero = numero1.value

    apagar()

    operadorDigitado = op
}

function botaoIgual() {
    const numero1 = document.getElementById('numero1')
    segundoNumero = numero1.value

    apagar()


    calcular(primeiroNumero, operadorDigitado, segundoNumero)
}