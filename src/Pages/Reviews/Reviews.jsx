import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "components/Loader/Loader";
import fetch from "API/API";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const onActorsOfMovie = async () => {
            setLoading(true)
            try{
                const review = await fetch.fetchReviews(movieId)
                setReviews(review)
            }catch (error){
                console.log(error)
            }finally {
                setLoading(false)
            }
        }
        onActorsOfMovie();
    }, [movieId])

    return(
        <>
      {loading && <Loader />}
      {reviews.length !== 0 && (
        <div>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
    )
}

export default Reviews