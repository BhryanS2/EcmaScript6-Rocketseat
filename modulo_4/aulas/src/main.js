import api from './api'

class App{
    constructor(){
        //todos os repositorios ficam aqui
        this.repositores = []

        this.formEl = document.getElementById('repo-form')
        this.listEl = document.getElementById('repo-list')
        this.inputEl = document.querySelector('input[name=repository]') 

        this.registerHandlers();
    }    

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event)
    }
    //aparece uma msg de carregando
    setlaoding(loading = true) {

        if(loading === true){
            let loadingEl = document.createElement('span')

            loadingEl.appendChild(document.createTextNode('carregando...'))

            loading.setAttribute('id', 'loading')

            this.formEl.appendChild(loadingEl)
        }else{ 
            document.getElementById("loading")
        }
    }
    //busca por respositorios
    async addRepository(event){
        event.preventDefault()

        const repoInput = this.inputEl.value;

        if( repoInput.length === 0) return;

        try {
            const response = await api.get(`/repos/${repoInput}`)
            //console.log(response)

            const { name, description, html_url, owner: { avatar_url } } = response.data

            this.repositores.push({
                name,
                description,
                avatar_url,
                html_url,
            })

            //console.log(this.repositores)

            this.inputEl.value = ''

            this.render()
        } catch (error) {
            alert('não foi possível encontrar o repositório')
        }
        this.setlaoding(false)
    }

    render(){
        //apagando conteúdo
        this.listEl.innerHTML = ""

        this.repositores.forEach(repo => {
            var imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url)

            var titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))

            var descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.description))

            var linkEl = document.createElement('a')
            linkEl.setAttribute('target', '_blank')
            linkEl.setAttribute('href', repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'))

            var buttonEl = document.createElement('button')
            buttonEl.setAttribute('id', 'btnDell')
            buttonEl.appendChild(document.createTextNode('excluir'))

            const listItem = document.createElement('li')
            listItem.appendChild(imgEl)
            listItem.appendChild(titleEl)
            listItem.appendChild(descriptionEl)
            listItem.appendChild(linkEl)
            listItem.appendChild(buttonEl)


            this.listEl.appendChild(listItem)
            
            
            this.btnEl = document.getElementById('btnDell')
            this.deletar()
        })
        
    }   

    deletar(){
        this.btnEl.onclick = event => this.deletarRepo(event)
    }

    deletarRepo(event){
        let containerUl = document.querySelector("#repo-list")
        let containerLi = document.querySelector("li")
        
        containerLi.remove()
        containerUl.firstChild.remove()
        this.repositores.forEach(repo => {
           console.log(repo)
        })
    }

}

new App()