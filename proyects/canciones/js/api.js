import * as UI from './interfaz.js'
import {limpiarHTML, spinner} from './app.js'

class API{
    constructor(artista, cancion){
        this.artista = artista,
        this.cancion = cancion
    }

    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`
        
        spinner()
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                limpiarHTML()
                if(respuesta.lyrics){
                    const { lyrics } = respuesta
                    UI.divResultado.textContent = lyrics
                    UI.headingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`
                }else{
                    UI.divMensaje.textContent = 'La cancion no existe, prueba con otra busqueda' 
                    UI.divMensaje.classList.add('error')

                    setTimeout(() => {
                        UI.divMensaje.textContent = ''
                        UI.divMensaje.classList.remove('error') 
                    }, 3000)
                }
                
            })
    }
}


export default API