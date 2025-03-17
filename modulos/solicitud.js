const solicitud = async url => {// se crea una constante asincrona y se agrega url como parametro 
    const peticion = await fetch(url);// se realiza una peticion con fetch, await pausa la ejecucion hasta que la peticion de una respuesta y peticion almacena dicha respuesta
    const data = await peticion.json();// se convierte la respuesta en un archivo .json y se almacena en la variable data
    return data//devuelve el arreglo con los datos obtenidos 
}

export default solicitud // exporta la funcion solicitud de forma predeterminada
