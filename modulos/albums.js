import solicitud from "./solicitud.js";// importamos el modulo solicitud 
export const getAlbums= async(URL,usuario)=>{//exportamos y declaramos como asincrona la funcion getAlbums 
    return await solicitud(`${URL}/albums?userId=${usuario.id}`)//se llama la funcion importada, se inserta la url proporcionada y piden los albums de el usuario
    
}