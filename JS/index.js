const requestURL = '../JSON/peliculas.json';


async function fetchMoviesJSON(){  
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;

}



fetchMoviesJSON().then(movies =>{
    for(let index=0; index < movies.peliculas.length; index++){
        const moviesSection = document.getElementById('moviesSection');
        

        let id = movies.peliculas[index].id;
        let img = movies.peliculas[index].caratula;
        let title = movies.peliculas[index].nombre;
        let director = movies.peliculas[index].director;
        let gender = movies.peliculas[index].clasificacion;
        let sinopsis = movies.peliculas[index].sinopsis;
        let imdb= movies.peliculas[index].imdbLink;
        

        moviesSection.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${ img }" class="card-img-top" alt="Imagen">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${sinopsis}</p>
                <button onclick="window.location.href='${imdb}';" type="button" class="btn btn-info">Más info</button>
            </div>
        </div>

        `
        
    }
})
