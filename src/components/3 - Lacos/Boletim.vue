<script setup>
import { ref } from "vue";

const boletins = ref([]);

const materias = ref([
    "Português",
    "Matemática",
    "História",
    "Geografia",
    "Física",
    "Química",
    "Biologia",
    "Ed. física",
    "Línguas estrangeiras",
]);

function cadastraNovoBoletim() {
    const index = boletins.value.length + 1;

    const boletim = {
        id: index,
        nome: `Aluno ${index}`,
        notas: {
            portugues: (Math.random() * 10).toFixed(2),
            matematica: (Math.random() * 10).toFixed(2),
            historia: (Math.random() * 10).toFixed(2),
            geografia: (Math.random() * 10).toFixed(2),
            fisica: (Math.random() * 10).toFixed(2),
            quimica: (Math.random() * 10).toFixed(2),
            biologia: (Math.random() * 10).toFixed(2),
            edFisica: (Math.random() * 10).toFixed(2),
            linguasEstrangeiras: (Math.random() * 10).toFixed(2),
        },
        passou: Math.random() * 100 > 50,
    };

    boletins.value.push(boletim);
    console.log(boletim);
}
</script>

<template>
    <button @click="cadastraNovoBoletim">Novo boletim</button>
</template>

<style scoped lang="scss"></style>
