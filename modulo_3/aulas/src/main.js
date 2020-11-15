//AULA 1

/*const minhaPromise = () => new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve("ok")
    }, 2000)
})
*/
// o then é usado para pegar o resultado e o catch é usado para pegar o erro
/*
minhaPromise()
    .then(response => {
        console.log(response)
    })

    .catch(e =>{
        console.log(e)
    })
*/

/*apartir do Es8 podemos usar o async e await, precisamos ter uma função em volta  */

/*
async function PromiseExe(){ 
    const response = await minhaPromise()

    console.log(response)
}

PromiseExe()
*/

/* se deu erro você ira instalar @babel/plugin-transform-async-to-generator @babel/polyfill -D 
depois de onstalado vc altere o webpack, ajustando ele para rodar o @babel/polyfill
*/

//podemos usar arrow function também

/*
const exePromise = async () =>{
    console.log( await minhaPromise())
    console.log( await minhaPromise())
    console.log( await minhaPromise())
}

exePromise()

*/

//AULA 2

//instale o axios = yarn add axios

//importe o axios
import axios from 'axios'

// crie uma classe
/*class Api {
    //use o metodo estatico
    static async getUserInfo(user){
        //a constante response espera até que o axios pegue as informações
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response)
    }
}

Api.getUserInfo('bhryanS2')
*/
// desta maneira acima, se der erro vai aparecer um monte de coisa no console, então uso um try catch

class Api {
    static async getUserInfo(user){
        try {  
            const response = await axios.get(`https://api.github.com/users/${user}`)
            console.log(response)
        } catch (error) {
           alert('usuário não existe')
        }
    }
}

Api.getUserInfo('bhryanS2')