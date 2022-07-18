<script setup>
import { ref } from "vue";
import MostrarNaTela from "./components/MostrarNaTela.vue";
import Contador from "./components/Contador.vue";
import Propriedades from "./components/Propriedades.vue";

const pessoa = ref({
    nome: "Nathan",
    idade: 29,
});
</script>

<template>
    <!-- <MostrarNaTela /> -->
    <!-- <hr /> -->
    <!-- <Contador /> -->
    <hr />
    <Propriedades :nome="pessoa.nome" />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
