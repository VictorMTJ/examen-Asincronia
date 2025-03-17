import solicitud from "./solicitud.js";//importamos la funcion solicitud 
export  const getUsuarios=async(URL,id)=>{//exportamos la funcion getusuarios
    
    let ruta="";//declara la variable  que alacena la url y con "" se inicializa con una cadena vacia
    if(id){
     ruta=`${URL}/users?id=${id}`;  
    }else{
        ruta=`${URL}/users`;
    }// se crea un if, si el id esta definido se encontrara ese usuario, de lo contrario el url obtendra todos los usuarios
  
    const usuarios = await solicitud(ruta);// se llama la funcion importada para realizar una peticion GET a la api, se usa la constante para almacenar el resultado
    return usuarios;// devuelve el resultado obtenido 

}
