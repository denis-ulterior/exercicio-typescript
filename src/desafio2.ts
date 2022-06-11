// Como podemos melhorar o esse código usando TS? 
enum ProfissaoT{
    Atriz,
    Padeiro
}
class Trabalhador{
    nome:string
    idade:number
    profissao:ProfissaoT
    constructor(nome:string,idade:number,profissao:ProfissaoT){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
}

let pessoa1 =new Trabalhador("maria",29,ProfissaoT.Atriz)

let pessoa2 = new Trabalhador("Roberto",19,ProfissaoT.Padeiro)

let pessoa3 = new Trabalhador("Laura",32,ProfissaoT.Atriz)

let pessoa4 = new Trabalhador("Carlos",19,ProfissaoT.Padeiro)