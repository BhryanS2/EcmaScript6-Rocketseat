/* 
A  partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
2.1 Utilizando o map
Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
2.2 Utilizando o filter
Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
2.3 Utilizando o find
Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
2.4 Unindo operações
Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:
// Resultado:
[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]
*/
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
//mostrando idade dos usuários
const idadeUser = usuarios.map(item => item.idade)
console.log(idadeUser)

//mostrando quem trabalha na rocket e são maiores de 18 anos
const rocket = usuarios.filter(item => item.empresa == 'Rocketseat' && item.idade >= 18)
console.log(rocket)

//usuario que trabalha no google
const trabalhaGoogle = usuarios.find(item => item.empresa == 'Google')
console.log(trabalhaGoogle)

//multiplicar idade por dois e mostrar a idade de quem tem até 50 anos
const idadeMultiplicadaEMenorQue50 = usuarios
    .map(user => ({
        ...user,
        idade: user.idade * 2 
    }))

    .filter(user => user.idade <= 50)

console.log(idadeMultiplicadaEMenorQue50)