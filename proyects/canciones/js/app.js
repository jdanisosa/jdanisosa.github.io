import * as UI from './interfaz.js'
import API from './api.js'

UI.formularioBuscar.addEventListener('submit', buscarCancion)


function buscarCancion(e){
    e.preventDefault()

    // Obtener datos
    const artista = document.querySelector('#artista').value
    const cancion = document.querySelector('#cancion').value

    if(artista === '' || cancion === ''){
        UI.divMensaje.textContent = 'Error! Todos los campos son obligatorios'
        UI.divMensaje.classList.add('error')

        setTimeout(()=>{
            UI.divMensaje.textContent = ''
            UI.divMensaje.classList.remove('error')
        }, 3000)

        return
    }

    //consultar la API
    const busqueda = new API(artista, cancion)
    busqueda.consultarAPI()

}

export function spinner(){
    limpiarHTML()

    const spinner = document.createElement("div")
    spinner.classList.add('spinner')
    
    UI.divResultado.appendChild(spinner)
}

export function limpiarHTML(){
    while(UI.divResultado.firstChild){
        UI.divResultado.removeChild(UI.divResultado.firstChild)
    }
}