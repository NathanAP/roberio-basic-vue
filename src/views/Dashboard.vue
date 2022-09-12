<script setup>
import { useRoute, useRouter } from "vue-router";
import {
    buscarPessoa,
    criarPessoa,
    editarPessoa,
    deletarPessoa,
} from "../services/pessoas/requisicoes";

const rota = useRoute();
const rotador = useRouter();

async function buscarListaDePessoa() {
    const resposta = await buscarPessoa();
}
</script>

<template>
    <div>
        <v-col>
            <v-row justify="center">
                <v-btn @click="buscarPessoa"> Buscar pessoa</v-btn>
            </v-row>
        </v-col>
        <v-col>
            <v-row justify="center">
                <v-btn @click="criarPessoa"> Criar pessoa</v-btn>
            </v-row>
        </v-col>
        <v-col>
            <v-row justify="center">
                <v-btn @click="editarPessoa"> Editar pessoa</v-btn>
            </v-row>
        </v-col>
        <v-col>
            <v-row justify="center">
                <v-btn @click="deletarPessoa"> Deletar pessoa</v-btn>
            </v-row>
        </v-col>
    </div>
</template>

<style scoped lang="scss"></style>
