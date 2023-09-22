import BookmarkFilledIcon from '../../icons/bookmark-filled/Bookmark-filled';
import BookmarkIcon from '../../icons/bookmark/Bookmark';

import { Link } from 'react-router-dom';

export function Movie(props) {

    const { movie, bookmark } = props;
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
    const { id, title, yearOfRelease, pg, genre, image, bookmarked } = movie;
    return (
        <article className="movie">
            <div className="movie__image-container">
                <Link to= {`movie/${id}`}>
                    <img src={image} alt="Movie image" />
                </Link>
               
                <span className="movie__bookmark" onClick={() => bookmark(movie, bookmarked)}>

                    {bookmarked ? (
                        <BookmarkFilledIcon></BookmarkFilledIcon>
                        
                    ):(
                        <BookmarkIcon></BookmarkIcon>
                    )}
                </span>
            </div>
            <p className='movie__footer'>
                <span className="movie__year">{yearOfRelease}</span>
                <span className="movie__genre">{genre}</span>
                <span className="movie__pg">{pg}</span>
            </p>
            <h5 className="movie__title">{title}</h5>
        </article>
    );

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
