<script setup>
import { ref, watch } from "vue";
import MostrarNaTela from "./components/1 - Básico/MostrarNaTela.vue";
import Contador from "./components/1 - Básico/Contador.vue";
import Propriedades from "./components/1 - Básico/Propriedades.vue";
import ComputedEEmissao from "./components/1 - Básico/ComputedEEmissao.vue";
import Slots from "./components/1 - Básico/Slots.vue";
import SlotsAvancados from "./components/1 - Básico/SlotsAvancados.vue";
import MostraOuNao from "./components/2 - Condicionais/MostraOuNao.vue";
import Boletim from "./components/3 - Lacos/Boletim.vue";

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
    <!-- <hr /> -->
    <!-- <ComputedEEmissao
        :veiculo="veiculo"
        v-model:proprietario="proprietario"
        v-model="kmRodados"
        :media="media"
    /> -->
    <!-- <hr /> -->
    <!-- <h1>Filhos / Slots</h1> -->

    <!-- <Slots> Eu sou um botão </Slots> -->

    <!-- <Slots></Slots> -->

    <!-- <hr /> -->

    <!-- <SlotsAvancados>
        <template #nome>
            <span class="cor-vermelha">
                {{ pessoa.nome }}
            </span>
        </template>

        <template #idade>
            <span class="fundo-vermelho">
                {{ pessoa.idade }}
            </span>
        </template>

        <p>Gosto de gatos!</p>

        <template #dadosDoInstagram="{ seguidores, segue, fotos }">
            <h1>Eu sigo {{ segue }} pessoas!</h1>
            <h1>Eu tenho {{ seguidores }} seguidores!</h1>
            <h1>Eu publiquei {{ fotos }} fotos!</h1>
        </template>
    </SlotsAvancados> -->

    <!-- <hr /> -->

    <!-- <MostraOuNao /> -->

    <hr />

    <Boletim />
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

.cor-vermelha {
    color: red;
}

.fundo-vermelho {
    background-color: red;
}
</style>
