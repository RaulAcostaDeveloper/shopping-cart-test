export const postData = async(data) => {
    console.log(data);
    try {
        const respuesta = await fetch('url', { // url del servicio aquí
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify(data)
        });
        if (!respuesta.ok) {
            switch (respuesta.status) {
                case 404:
                    console.error(respuesta.status + ': No se encontró url');
                    break;
                default:
                    break;
            }
            throw new Error('La solicitud falló con el estado ' + respuesta.status);
        } const resultado = await respuesta.json();
    } catch (error) { console.error('Error durante la solicitud:', error); }
}