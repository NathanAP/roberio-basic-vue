<script setup>
import { useRoute, useRouter } from "vue-router";

const rota = useRoute();
const rotador = useRouter();

async function irParaDashboard() {
    await rotador.push({ name: "dashboard" });
}
</script>

<template>
    <v-col>
        <v-row justify="center">
            <v-btn @click="irParaDashboard">Logar</v-btn>
        </v-row>
    </v-col>
</template>

<style scoped lang="scss"></style>
