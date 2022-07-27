<script setup>
import { ref } from "vue";

const alternar = ref(1);

function temporizador() {
    setTimeout(() => {
        if (alternar.value === 1) alternar.value = 2;
        else if (alternar.value === 2) alternar.value = 3;
        else alternar.value = 1;

        console.log(alternar.value);
        temporizador();
    }, 1000);
}

temporizador();
</script>

<template>
    <h1 v-if="alternar === 1" class="primeiro">Eu sou o primeiro! 😎</h1>
    <h1 v-else-if="alternar === 2" class="segundo">Eu sou o segundo! 🤩</h1>
    <h1 v-else class="terceiro">Eu sou o último! 😥</h1>

    <h1 v-show="alternar === 1" class="primeiro">Eu sou o primeiro! 😎</h1>
    <h1 v-show="alternar === 2" class="segundo">Eu sou o segundo! 🤩</h1>
    <h1 v-show="alternar === 3" class="terceiro">Eu sou o último! 😥</h1>
</template>

<style scoped lang="scss">
.primeiro {
    background-color: red;
    color: white;
}

.segundo {
    background-color: blue;
    color: white;
}

.terceiro {
    background-color: green;
    color: white;
}
</style>
