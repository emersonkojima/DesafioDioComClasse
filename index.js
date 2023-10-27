

class personagem{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }
    atacar(){
        if(this.tipo == "guerreiro")
        console.log(`O ${this.tipo} usando espada`)
        else if(this.tipo == "mago")
        console.log(`O ${this.tipo} usando magia`)
        else if(this.tipo == "monge")
        console.log(`O ${this.tipo} usando artes marciais`)
        else if(this.tipo == "ninja")
        console.log(`O ${this.tipo} usando shuriken`)
        else
        console.log("Classe desconhecida O_O")
        
    }
}


let char = new personagem("Mario", "34", "ninja")

char.atacar()










