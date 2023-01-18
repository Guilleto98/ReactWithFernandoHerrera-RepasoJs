const apikey = 'yG8isSdgLrmmth28wblF935EKICNx44F';

const fetchApi = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)

fetchApi
    .then( res => res.json())
    .then( ({data}) =>{
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    
    .catch(console.warn)
