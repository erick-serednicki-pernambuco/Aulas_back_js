const prompt = require('prompt-sync')();


let idades = [];

for(let i =0 ; i < 10; i++)
{
    var idade = prompt("Digite um idade: ")
    idades[i] = idade;
}


for(let i =0 ; i < 10; i++)
{
    console.log(idades[i]);
}
