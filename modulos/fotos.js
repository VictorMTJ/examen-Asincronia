import solicitud from "./solicitud.js";//importamos el modulo solicitud 
export const getFotos= async(URL,album)=>{//exportamos y declaramos como asincrona la funcion getcommets
    return await solicitud(`${URL}/photos?albumId=${album.id}`)//se llama la funcion importada, se inserta la url proporcionada y se piden las fotos de los albums

}