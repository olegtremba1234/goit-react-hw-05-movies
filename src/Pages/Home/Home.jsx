import { useState, useEffect } from 'react'
import  fetch  from "API/API";
import Loader from 'components/Loader/Loader';
import EditorList from 'components/EditorList/EditorList';

const HomePage = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTrendingFilms = async () => {
            setLoading(true)
            try {
                const trendingFilms = await fetch.fetchTrendings()
                setFilms(trendingFilms)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchTrendingFilms();
    },[]);

    return (
        <main>
            <h1>Trending today</h1>
            {films && <EditorList films={films} />}
            {loading && <Loader/>}
        </main>
    )
}

export default HomePage;