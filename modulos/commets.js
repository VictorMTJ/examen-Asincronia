import solicitud from "./solicitud.js";//importamos el modulo solicitud 
export const getCommets=async(URL,post)=>{//exportamos y declaramos como asincrona la funcion getcommets
    return  await solicitud(`${URL}/comments?postId=${post.id}`)//se llama la funcion importada, se inserta la url proporcionada y se piden los comentarios del post
}