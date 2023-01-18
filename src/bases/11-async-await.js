const getImg = async ()=>{ 

    try {
        const apiKey = 'yG8isSdgLrmmth28wblF935EKICNx44F';

        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        // El await hace que no se ejecute la siguiente linea de codigo hasta que se resuelva la promesa

        const {data} = await res.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        console.warn(error)
    }
    
    
}


getImg();