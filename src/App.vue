<script setup>
import { ref, watch } from "vue";
import MostrarNaTela from "./components/MostrarNaTela.vue";
import Contador from "./components/Contador.vue";
import Propriedades from "./components/Propriedades.vue";
import ComputedEEmissao from "./components/ComputedEEmissao.vue";

const pessoa = ref({
    nome: "Nathan",
    idade: 29,
    irmaos: ["Joaozinho", "Mariazinha"],
    caracteristicas: {
        corDoCabelo: "Castanho",
    },
});

const outraPessoa = ref({});

const veiculo = ref("Palio");
const proprietario = ref("Roberio");
const kmRodados = ref(0);
const media = ref(0);
const qtdeQueDirigiu = ref(0);

watch(kmRodados, (novoValor) => {
    console.log(novoValor);
    qtdeQueDirigiu.value += 1;
    media.value = novoValor / qtdeQueDirigiu.value;
});
</script>

<template>
    <!-- <MostrarNaTela /> -->
    <!-- <hr /> -->
    <!-- <Contador /> -->
    <!-- <hr /> -->
    <!-- <Propriedades
        :nome="pessoa.nome"
        :idade="pessoa.idade"
        :irmaos="pessoa.irmaos"
        :outraPessoa="outraPessoa"
    /> -->
    <hr />
    <ComputedEEmissao
        :veiculo="veiculo"
        v-model:proprietario="proprietario"
        v-model="kmRodados"
        :media="media"
    />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
