import axios from "axios";
import Pessoa from "./classe";

async function buscarPessoa() {
    try {
        const url = "/pessoas";
        const resposta = await axios.get(url);
        return resposta;
    } catch (erro) {
        throw erro;
    }
}

async function criarPessoa(pessoa) {
    try {
        if (!(pessoa instanceof Pessoa)) return false;

        const url = "/pessoas";
        const resposta = await axios.post(url, pessoa);
        return resposta;
    } catch (erro) {
        throw erro;
    }
}

async function editarPessoa(pessoa) {
    try {
        if (!(pessoa instanceof Pessoa) || !pessoa.id) return false;

        const url = `/pessoas/${pessoa.id}`;
        const resposta = await axios.put(url, pessoa);
        return resposta;
    } catch (erro) {
        throw erro;
    }
}

async function deletarPessoa(pessoa) {
    try {
        if (!(pessoa instanceof Pessoa) || !pessoa.id) return false;

        const url = `/pessoas/${pessoa.id}`;
        const resposta = await axios.delete(url);
        return resposta;
    } catch (erro) {
        throw erro;
    }
}

export { buscarPessoa, criarPessoa, editarPessoa, deletarPessoa };
