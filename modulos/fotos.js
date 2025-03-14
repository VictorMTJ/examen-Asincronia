import solicitud from "./solicitud.js";
export const getFotos= async(URL,album)=>{
    return await solicitud(`${URL}/fotos?albumId=${album.id}`)

}