<script setup>
const props = defineProps({
    nome: { type: String, required: true },
});
</script>

<template>
    <h1>Meu nome é {{ props.nome }}</h1>
</template>

<style scoped lang="scss">
h1 {
    color: green;
}
</style>
