// DESAFIO 1 - Como podemos rodar isso em um arquivo .ts sem causar erros? 
// Toda e qualquer propriedade deve-se ser "tipada". Pois faz parte das boas práticas e torna o código mais consistente e de fácil leitura.

let employee = {};
employee.code = 10;
employee.name = "John";


const funcionario = {
    codigo: 10,
    nome: 'João'
};

const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}



    
