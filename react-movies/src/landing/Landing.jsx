import './Landing.css';

import BookmarkIcon from '../icons/Bookmark';

import { MovieItem } from './models.js';
import { useState } from 'react';

const initialMovies = [
    new MovieItem(1, 'The Great Lands', 2019, 'movie', 'https://picsum.photos/300/200', 'PG', false),
    new MovieItem(2, 'The Great Lands', 2019, 'movie', 'https://picsum.photos/300/200', 'PG', false),
    new MovieItem(3, 'The Great Lands', 2019, 'movie', 'https://picsum.photos/300/200', 'PG', false),
    new MovieItem(4, 'The Great Lands', 2019, 'movie', 'https://picsum.photos/300/200', 'PG', false),
    new MovieItem(5, 'The Great Lands', 2019, 'movie', 'https://picsum.photos/300/200', 'PG', false),
    new MovieItem(6, 'The Great Lands', 2019, 'series', 'https://picsum.photos/300/200', 'PG', false),
    new MovieItem(7, 'The Great Lands', 2019, 'movie', 'https://picsum.photos/300/200', 'PG', false),
    new MovieItem(8, 'The Great Lands', 2019, 'movie', 'https://picsum.photos/300/200', 'PG', false),  
];

export default function Landing() {
    const [movies, setMovies] = useState(initialMovies);
    
    function bookmark(movie, bookmarked) {
        movie.bookmarked = !bookmarked;
        setMovies(movies);
    }

    return(
        <main className='main'>
            <header>
                <h3>Recommended for you</h3>
            </header>

            <section className='movie-container'>
                {
                    // movies.map(
                    //     (movie) => (
                    //         <article className="movie">
                    //             <div className="movie__image-container">
                    //                 <img src={movie.image} alt="Movie image" />
                    //                 <span className="movie__bookmark">
                    //                     <BookmarkIcon></BookmarkIcon>
                    //                 </span>
                    //             </div>
                    //             <p className='movie__footer'>
                    //                 <span className="movie__year">{movie.yearOfRelease}</span>
                    //                 <span className="movie__genre">{movie.genre}</span>
                    //                 <span className="movie__pg">{movie.pg}</span>
                    //             </p>
                    //             <h5 className="movie__title">{movie.title}</h5>
                    //         </article>
                    //     )
                    // )

                        // cu destructurare de obiecte

                    movies.map(
                        (movie) => {
                            const { title, yearOfRelease, pg, genre, image, bookmarked } = movie;
                            return (
                                <article className="movie">
                                    <div className="movie__image-container">
                                        <img src={image} alt="Movie image" />
                                        <span className="movie__bookmark" onClick={() => bookmark(movie, bookmarked)}> 
                                            <BookmarkIcon></BookmarkIcon>
                                        </span>
                                    </div>
                                    <p className='movie__footer'>
                                        <span className="movie__year">{yearOfRelease}</span>
                                        <span className="movie__genre">{genre}</span>
                                        <span className="movie__pg">{pg}</span>
                                    </p>
                                    <h5 className="movie__title">{title}
                                      Bookmarkerd: {JSON.stringify(bookmarked)}</h5>
                                </article>
                            );
                        }   
                    )


                        // destructurare direct ca si argument
                    // movies.map(
                    //     ({ title, yearOfRelease, pg, genre, image, bookmarked }) => {
                    //         return (
                    //             <article className="movie">
                    //                 <div className="movie__image-container">
                    //                     <img src={image} alt="Movie image" />
                    //                     <span className="movie__bookmark">
                    //                         <BookmarkIcon></BookmarkIcon>
                    //                     </span>
                    //                 </div>
                    //                 <p className='movie__footer'>
                    //                     <span className="movie__year">{yearOfRelease}</span>
                    //                     <span className="movie__genre">{genre}</span>
                    //                     <span className="movie__pg">{pg}</span>
                    //                 </p>
                    //                 <h5 className="movie__title">{title}</h5>
                    //             </article>
                    //         )
                    //     }   
                    // )
                }
            </section>
        </main>
    );
}