export default class Pessoa {
    static get className() {
        return "Pessoa";
    }

    constructor(object = {}) {
        this.id = object.id;
        this.nome = object.nome;
        this.idade = object.idade;
    }
}
