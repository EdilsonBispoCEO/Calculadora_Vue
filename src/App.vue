<script setup>
import { reactive } from 'vue';
import Cabecalho from './components/Cabecalho.vue';
import Operacao from './components/Operacao.vue';
import Resultado from './components/Resultado.vue';

  const estado = reactive({
    operation: '+',
    num1: '',
    num2: ''
  })

  const resultado = ()=> {
    const {operation} = estado
    switch(operation) {
      case'-': 
        return parseFloat(estado.num1) - parseFloat(estado.num2)
      case'*': 
        return parseFloat(estado.num1) * parseFloat(estado.num2) 
      case'/': 
        return parseFloat(estado.num1) / parseFloat(estado.num2) 
      default:
        return parseFloat(estado.num1) + parseFloat(estado.num2)
    }
  }
</script>

<template>
  <body>
    <div class="container">
      <Cabecalho />
      <Operacao :operacao="evento => estado.operation = evento.target.value"  :num1="evento => estado.num1 = evento.target.value" :num2="evento => estado.num2 = evento.target.value" />
      <Resultado :num1="estado.num1" :num2="estado.num2" :result="resultado()" />
    </div>
  </body>
</template>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    padding-top: 1px;
    height: 100vh;
    background-color: rgb(41, 48, 63);
  }

  .container {
    max-width: 700px;
    margin: 210px auto;
    text-align: center;
    background-color: rgb(98, 112, 108);
  }
</style>
