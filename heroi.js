class Heroi {

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "Mago":
                ataque = "Magia";
                break;

            case "Guerreiro":
                ataque = "Espada";
                break;

            case "Monge":
                ataque = "Artes Marciais";
                break;

            case "Ninja":
                ataque = "Shuriken";
                break;

            default:
                ataque = "Um ataque indefinido";



        }

        return ataque

    }
}

const h = new Heroi('Valdmort', 40, 'Mago')

console.log(`O ${h.tipo} ${h.nome} atacou usando ${h.atacar()}`);