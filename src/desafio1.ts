///////////Primeira forma
let employee : {code:number,name:string}={
    code:0,
    name:''
}

employee.code = 10;
employee.name = "John";
let teste = ''

///////////Segunda forma 
class Funcionario{
    constructor(code:number,name:string){
        this.code = code
        this.name = name
    }
}
const joao = new Funcionario(9,"João")


//////////Terceira forma
interface Funcionario{
code:number,
name:string
}
const jose:Funcionario={
    code:10,
    name:"José"
}

