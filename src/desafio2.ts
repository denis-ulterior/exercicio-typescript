// Como podemos melhorar o esse código usando TS? 
enum Profissao{
    Atriz,
    Padeiro
}
class Trabalhador{
    nome:string
    idade:number
    profissao:Profissao
    constructor(nome:string,idade:number,profissao:Profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
}

let pessoa1 =new Trabalhador("maria",29,Profissao.Atriz)

let pessoa2 = new Trabalhador("Roberto",19,Profissao.Padeiro)

let pessoa3 = new Trabalhador("Laura",32,Profissao.Atriz)

let pessoa4 = new Trabalhador("Carlos",19,Profissao.Padeiro)