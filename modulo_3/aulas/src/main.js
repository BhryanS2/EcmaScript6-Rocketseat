const minhaPromise = () => new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve("ok")
    }, 2000)
})
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
*/

/* se deu erro você ira instalar @babel/plugin-transform-async-to-generator @babel/polyfill -D 
depois de onstalado vc altere o webpack, ajustando ele para rodar o @babel/polyfill
*/

//podemos usar arrow function também

const exePromise = async () =>{
    console.log( await minhaPromise())
    console.log( await minhaPromise())
    console.log( await minhaPromise())
}

exePromise()
