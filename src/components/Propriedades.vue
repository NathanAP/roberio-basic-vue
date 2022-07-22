<script setup>
import { toRef } from "vue";

const props = defineProps({
    nome: { type: String, required: true },
    idade: { type: Number, required: true },
    irmaos: { type: Array, default: [] },
    outraPessoa: { type: Object },
});

const outraPessoa = toRef(props, "outraPessoa");
</script>

<template>
    <h1>Meu nome é {{ props.nome }}</h1>
    <h1>Tenho {{ props.idade }} anos</h1>
    <h1>Tenho {{ props.irmaos.length }} irmão(s)</h1>
    <br />
    <h1>O nome da outra pessoa é: {{ outraPessoa.nome }}</h1>
    <input type="text" v-model="outraPessoa.nome" />

    <h1>O nome da outra pessoa é: {{ props.outraPessoa.nome }}</h1>
    <input type="text" v-model="props.outraPessoa.nome" />
</template>

<style scoped lang="scss">
h1 {
    color: green;
}
</style>
