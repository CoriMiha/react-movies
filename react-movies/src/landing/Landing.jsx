import './Landing.css';

import { cloneDeep } from 'lodash'
import { useEffect, useState } from 'react';
import { Movie } from './movie/Movie';


export default function Landing() {
    const [initialMovies, setInitialMovies] = useState([]);
    const [movies, setMovies] = useState(initialMovies);
    const [searchTerm, setSearchTerm] = useState();
    
    function bookmark(movie, bookmarked) {
        movie.bookmarked = !bookmarked;
        setMovies(structuredClone(movies));
    }

    useEffect(() => {
        fetch('http://localhost:3004/movies')
            .then((response) => response.json())
            .then((fetchedMovies) => {
                setMovies(fetchedMovies)
                setInitialMovies(fetchedMovies)
            });
    }, []);

    useEffect(() => {
        if (searchTerm){
            const filteredList = initialMovies.filter((movie) => {
                return movie.title.toLowerCase().includes(searchTerm);
            });

            setMovies(filteredList);
        } else{
            setMovies(initialMovies);
        }
    }, [searchTerm]);
    

    return(
        <main className='main'>
            <header>
                <h3>Recommended for you</h3>
            </header>


            <section>
                <input 
                placeholder='Search for a movie' 
                onKeyUp={(event) => setSearchTerm(event.target.value.toLowerCase().trim())}
                ></input>
            </section>

            <section className='movie-container'>
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} bookmark={bookmark}></Movie>
                ))}
            </section>
        </main>
    );
}


