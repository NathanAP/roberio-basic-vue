<script setup>
import { computed } from "vue";

const props = defineProps({
    veiculo: { type: String, required: true },
    proprietario: { required: true },
    modelValue: { required: true },
    media: { required: true },
});

const emit = defineEmits(["update:proprietario", "update:modelValue"]);

const proprietario = computed({
    get() {
        return props.proprietario;
    },
    set(novoProprietario) {
        emit("update:proprietario", novoProprietario);
    },
});

const kmRodados = computed({
    get() {
        return props.modelValue;
    },
    set(novosKms) {
        emit("update:modelValue", novosKms);
    },
});

function dirigir() {
    const dirigiuKms = Math.floor(Math.random() * 100);
    kmRodados.value += dirigiuKms;
    // console.log(dirigiuKms);
}
</script>

<template>
    <h1>Veículo: {{ props.veiculo }}</h1>
    <h1>Proprietário: {{ proprietario }}</h1>
    <h1>KMs rodados: {{ kmRodados }}</h1>
    <h1>Media: {{ props.media }}</h1>

    <input type="text" v-model="proprietario" />
    <br />
    <input type="button" value="Dirigir" @click="dirigir" />
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
