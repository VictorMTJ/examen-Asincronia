import {getUsuarios,getPost,getCommets, getAlbums, getFotos} from "../modulos/index";
const URL = "https://jsonplaceholder.typicode.com";
const usuarioId=3;

const getusuarioId= async (usuarioId)=>{
    let usuario= await getUsuarios(URL,usuarioId);
    let post =await getPost(URL,usuario[0]);
    let album = await getAlbum(URL,usuario[0])
}

getusuarioId(usuarioId);


const manejardatos = async () => {
    const usuarios =  await getUsuarios(URL);
    return await Promise.all(usuarios.map(async(usuario)=>{
        const posts = await getPost(URL,usuario);
        const comentPost = await Promise.all( posts.map(async(post)=>{
            const coments = await getCommets(URL,post);
            return {...post,coments};

        }));
        const albums = await getAlbums(URL,usuario);
        const fotosAlbum = await Promise.all(albums.map(async(album)=>{
            const fotos = await getFotos(URL,album);
            return {...album,fotos}
        }));
        return {...usuario,comentPost};
    }));
};
manejardatos().then((data)=>{
    console.log(data[0]);
});

