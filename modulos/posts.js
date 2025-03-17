import solicitud from "./solicitud.js";//importamos el modulo solicitud
export const getPost= async(URL,usuario)=>{//exportamos y declaramos como asincrona la funcion getcommets
    return  await    solicitud(`${URL}/posts?userId=${usuario.id}`) //se llama la funcion importada, se inserta la url proporcionada y se piden post de los usuarios
    
}