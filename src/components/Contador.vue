<script setup>
import { ref, watch } from "vue";

const contador = ref(0);
const contadorWatch = ref(0);

watch(contador, (novo, antigo) => {
    contadorWatch.value = novo * -1;

    console.log(`Contador: ${novo}`);
    console.log(`Contador watch: ${contadorWatch.value}`);
});
</script>

<template>
    <input type="button" value="x 4" @click="contador *= 4" />
    <input type="button" value="x 2" @click="contador *= 2" />
    <input type="button" value="+ 1" @click="contador += 1" />
    <input type="button" value="- 1" @click="contador -= 1" />
    <input type="button" value="/ 2" @click="contador /= 2" />
    <input type="button" value="/ 4" @click="contador /= 4" />
    <h1>O número atual é {{ contador }}</h1>
    <h1>O número do watch atual é {{ contadorWatch }}</h1>
</template>

<style scoped lang="scss">
h1 {
    color: white;
}

input {
    font-size: 24px;
    margin: 20px;
}
</style>
