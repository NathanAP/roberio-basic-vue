<script setup>
import { ref } from "vue";

const dadosDoInstagram = ref({
    seguidores: 700,
    segue: 290,
    fotos: 30,
});

dadosDoInstagram.value.seguidores = 800;
</script>

<template>
    <h1>
        Meu nome é
        <slot name="nome" />
        !
    </h1>

    <h1>
        Tenho
        <slot name="idade" />
        anos
    </h1>

    <h1>Um pouco sobre mim:</h1>
    <h1 class="cor-azul">
        <slot class="cor-roxa" />
    </h1>

    <h1>Dados do Insta</h1>
    <slot name="dadosDoInstagram" v-bind="dadosDoInstagram" />
</template>

<style scoped lang="scss">
h1 {
    color: green;
}

.cor-azul {
    color: blue;
}

.cor-roxa {
    color: purple;
}
</style>
