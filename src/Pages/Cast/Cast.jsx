import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetch from "API/API";
import Loader from "components/Loader/Loader";

const Cast = () => {
    const {movieId} = useParams()
    const [cast, setCast] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const onCastOfMovie = async () => {
            setLoading(true)
            try {
                const cast = await fetch.fetchCast(movieId)
                setCast(cast)
            }catch (error) {
                console.log(error)
            }finally {
                setLoading(false)
            }
        }
        onCastOfMovie()
    }, [movieId])

    return (
        <div>
          {loading && <Loader />}
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>
                <img
                  width="200px"
                  src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
                  alt={actor.original_name}
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        </div>
      );
};

export default Cast;