import axios from 'axios';

// delay, espera tudo executar para que mmostre 
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    await delay()
    console.log("1s")

    await delay()
    console.log("2s")

    await delay()
    console.log("3s")
}

umPorSegundo()

//esata função asincrona espera pegar os usuarios no github, se caso tiver erro o catch vai mostrar

// funcition normal
async function getUserFromGithub(user) {
    
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log("usuário da function normal")
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
//passando os usuarios
getUserFromGithub('JN513');

//na busca pelo respositório, se ele existir apareçe um obj no console, senão mostra o erro
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log("repositório")
            console.log(response)
        } catch (error) {
            console.log("esse repositorio não existe")
        }
    }
}

//passando os repositórios
Github.getRepositories('JN513/Ana')

// uma arrow function de buscar users
const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log("usuário da arrow function")
        console.log(response )
    } catch (error) {
        console.log('esse usuarios não existe')
    } 
}
buscaUsuario('JN513');