import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import MovieDetail from '../components/MovieDetail';
import styles from "./Detail.module.css";

function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    console.log(movie);
    return (
        <div className={styles.container}>
            {loading ?
            <div className={styles.loader}>
                <h1>Loading...</h1>
            </div>
            : (
                <div className={styles.movieDetail}>
                    <MovieDetail
                    key={movie.id}
                    large_cover_image={movie.large_cover_image}
                    title={movie.title}
                    year={movie.year}
                    rating={movie.rating}
                    description={movie.description_full}
                    genres={movie.genres}
                    url={movie.url} />
                </div>
            )}
        </div>
    ); 
}

export default Detail;