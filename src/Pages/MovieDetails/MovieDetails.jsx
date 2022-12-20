import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useLocation  } from "react-router-dom";
import fetch from "API/API";
import Loader from "components/Loader/Loader";
import style from "./MovieDetails.module.css"

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState(null)
    const [loading, setLoading] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const onDetailsMovie = async () => {
            setLoading(true)
            try {
                const detailMovie = await fetch.fetchMovieDetails(movieId)
                setMovieInfo(detailMovie)
            }catch (error) {
                console.log(error)
            }finally {
                setLoading(false)
            }
        }
        onDetailsMovie()
    }, [movieId])

    return (
      <>
        <Link to={location?.state?.from}> 
            <button type="button">
                Go back
            </button>
        </Link>
        {loading && <Loader />}
        {movieInfo && (
            <div className={style.movieDetails}>
                <img 
                    width="300px"
                    src={'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path}
                    alt={movieInfo.original_title} 
                />
                <div>
                    <h1>
                        {movieInfo.title} ({movieInfo.release_date.slice(0, 4)})
                    </h1>
                    <p>User score: {movieInfo.popularity}</p>
                    <h2>Overview</h2>
                    <p>{movieInfo.overview}</p>
                    <h2>Genres</h2>
                    <ul className={style.genreList}>
                        {movieInfo.genres.map(genre =>(
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )}
        <hr />
        <div>
            <h3>Additional information</h3>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <hr />
            <Outlet/>
        </div>
      </>
    )
}

export default MovieDetails;