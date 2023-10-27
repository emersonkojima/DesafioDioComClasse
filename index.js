/*Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )  */

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


let char = new personagem("Mario", "34", "ni33nja")

char.atacar()






//if (guerreiro.tipo == "guerreiro")
  //  console.log("test")


/*além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)
*/




