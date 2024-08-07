import { useState } from "react";
import movies from "../data/movies.json";


function MovieList () {

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter( (movieObj) => {
            return movieId !== element.id;

            //if(movieObj.id !== movieId){
            //    return true;
            //} else {
            //  return false;
            //}
        });

        
        setMoviesToDisplay(newList);
    }


    return (
        <section className="MovieList">
            <h1>List of Movies:</h1>
            <h2>Number of movies: {moviesToDisplay.length}</h2>

            {moviesToDisplay.map( (movieDetails) => {
                return (
                    <div key={movieDetails.id} className="card">
                    <img src={movieDetails.imgURL} alt="Movie poster"  />
                    <h3>{movieDetails.title}</h3>
                    <p>Year: {movieDetails.year}</p>
                    <p>Rating: {movieDetails.rating}</p>
                    <p>
                        <button onClick={() => {deleteMovie(movieDetails.id)}}>Delete</button>
                    </p>
                </div>
                );
            })}

        </section>
    );
}

export default MovieList;

