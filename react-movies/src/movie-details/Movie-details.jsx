import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function MovieDetails() {
    let { id } = useParams();
    const [movie, setMovies] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3004/movies/${id}`)
        .then((response) => response.json())
        .then((movieFromServer) => setMovies(movieFromServer));
    }, [])

    function onSubmit(event){
        event.preventDefault();
        // console.log(event)
        // console.log(event.target.url.value);
        const {url, yearOfRelease, genre, pg, title} = event.target;

        const updatedMovie = {
            ...movie,
            image: url.value,
            yearOfRelease: yearOfRelease.value,
            genre: genre.value,
            pg: pg.value,
            title: title.value
        };

        fetch(`http://localhost:3004/movies/${id}`, {
            headers: {'content-type': 'application/json'},
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            
        })
            .then((response) => response.json())
            .then((movieFromServer) => setMovies(movieFromServer));
      
    }

    return (
        <section>
            <article className="movie">
                <div className="movie__image-container">
                    <img src={movie?.image} alt="Movie" />
                </div>
                 <p className='movie__footer'>
                    <span className="movie__year">{movie?.yearOfRelease}</span>
                    <span className="movie__genre">{movie?.genre}</span>
                    <span className="movie__pg">{movie?.pg}</span>
                </p>
                <h5 className="movie__title">{movie?.title}</h5>
            </article>

            {/* <form onSubmit={(event) => onSubmit(event)}> */}
            <form onSubmit={(onSubmit)}>
                <fieldset>
                    <label htmlFor="url">URL:</label>
                    <input id="url" type="text" name="url" defaultValue={movie?.image}/>
                </fieldset>

                <fieldset>
                    <label htmlFor="yor">Year of release:</label>
                    <input id="yor" type="number" name="yearOfRelease" min={1800} max={3000} defaultValue={movie?.yearOfRelease}/>
                </fieldset>
                
                <fieldset>
                    <label htmlFor="genre">Genre:</label>
                    <select id="genre" name="genre" defaultValue={movie?.genre}>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                    </select>
                </fieldset>

                <fieldset>
                    <label htmlFor="pg">PG:</label>
                    <select id="pg" name="pg" defaultValue={movie?.pg}>
                        <option value="PG">PG</option>
                        <option value="18+">18+</option>
                        <option value="14+">14+</option>
                    </select>
                </fieldset>

                <fieldset>
                    <label htmlFor="title">Title:</label>
                    <input id="title" name="title" type="text" defaultValue={movie?.title} />
                </fieldset>

                <button>Submit</button>
            </form>
        </section>
        
    );
}