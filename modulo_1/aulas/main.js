// Object Short Syntax (Sintaxe curta de objetos)

const nome = 'Bhryan'
const idade = 15

// Quando o nome da propriedade é igual ao nome da variavel dentro do objeto podemos deixar apenas um deles
// ou seja, ao ivés de fazer isso
//const usuario = {
   // nome: nome,
    //idade: idade,
    //empresa: 'notfound'
//}

// faz isso

const usuario = {
    nome,
    idade,
    empresa: 'notfound'
}

console.log(usuario)