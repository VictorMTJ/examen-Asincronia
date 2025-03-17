import {getUsuarios,getPost,getCommets,getAlbums,getFotos} from "../modulos/index.js";//importamos las funciones que se encuentran en un modulo separado
const URL = "https://jsonplaceholder.typicode.com";//almacenamos la url base en donde se envuentra nuestra API
const usuarioId=3;//guardamos el id del usuario

const getusuarioId= async (usuarioId)=>{//usamos async para declarar nuestra funcion como aincrona y usamos el parametro usuarioId para que reciba el id del usuario a consultar
    let usuario= await getUsuarios(URL,usuarioId);
    let post =await getPost(URL,usuario[0]);
    let album = await getAlbums(URL,usuario[0])
}

getusuarioId(usuarioId);//llamamos la funcion gteusuarioId para iniciar la ejecucion de los procesos para obtener los usuarios, los post y los albums


const manejardatos = async () => {//definimos la funcion manejar datos como asincrona para manejar varias peticiones
    const usuarios =  await getUsuarios(URL);//usamos await para esperar una respuesta de grtusuarios y almacena el arreglo de usuarios en la variable usuarios
    return await Promise.all(usuarios.map(async(usuario)=>{//usamos promise.all para ejecutar todas la primesas en paralelo y con usuario.map recorremos la funcion 
        const posts = await getPost(URL,usuario);//busca los posts del usuario actual
        const comentPost = await Promise.all( posts.map(async(post)=>{//usamos .map para recorrer las funciones y en paralelo usando promise.all
            const coments = await getCommets(URL,post);//obtenemos los comentarios de cada publicacion
            return {...post,coments};//agregamos las funciones para ser vistas en la consola

        }));
        const albums = await getAlbums(URL,usuario);//obtenemos los albums de los usuarios
        const fotosAlbum = await Promise.all(albums.map(async(album)=>{//recorremos sobre los albums
            const fotos = await getFotos(URL,album);//obtenemos las fotos de cada album
            return {...album,fotos};//devuelve un nuevo objetos con sus albums y sus fotos
        }));
        return {...usuario,fotosAlbum,comentPost};//crea un nuevo objeto que combina y entrega los usuarios, sus posts con comentarios y los albums con sus fotos
    }));
};
manejardatos().then((data)=>{//lama la funcion manejar datos y usa then para manejar la respuesta asincrona
    console.log(data[0]);// muestra los datos del primer usuario
});

