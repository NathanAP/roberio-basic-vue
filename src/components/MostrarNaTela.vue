<script setup>
const nome = "Nathan";
const idade = 29;
const generoMasculino = true;

function anoDoNascimento(fizAniversario = false) {
    if (fizAniversario) return new Date().getFullYear() - idade;
    else return new Date().getFullYear() - idade - 1;
}
</script>

<template>
    <h1>Meu nome é {{ nome }}</h1>
    <h1 class="bg-vermelho">{{ `Tenho ${idade} anos!` }}</h1>
    <h1>{{ generoMasculino ? "Sou homem" : "Sou mulher" }}</h1>
    <h1 class="minha-cor-favorita">Nasci em {{ anoDoNascimento() }}</h1>
</template>

<style scoped lang="scss">
@import "../assets/teste.scss";

$minha-cor-favorita: blue;

h1 {
    color: $teste;
    margin: $padding-global;
}

.bg-vermelho {
    background-color: red;
}

.minha-cor-favorita {
    color: $minha-cor-favorita;
}
</style>
