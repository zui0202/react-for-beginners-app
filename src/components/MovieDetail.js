import PropTypes from "prop-types";
import {Link } from "react-router-dom";
import styles from "./MovieDetail.module.css";

function MovieDetail({id, large_cover_image, title, year, rating, description, genres, url}){
    return (
        <div>
            <Link to={`/`}>
                <button className={styles.backBtn}>
                    &lt; &nbsp; Back To List
                </button>
            </Link>
            <div className={styles.movie}>
                <h2 className={styles.title}>{title}</h2>
                <img className={styles.img} src={large_cover_image} alt={title} />
                <p className={styles.year}>{year}</p>
                <p className={styles.rating}>{rating} / 10.0</p>
                <p className={styles.description}>{description}</p>
                <ul className={styles.genre}>
                    {genres&&genres.map((g) => (
                    <li className={styles.genreList} key={g}>#{g}</li>
                    ))}
                </ul>
                <a className={styles.url} href={url} target="_blank">{url}</a>
            </div>
        </div>
      );
}

MovieDetail.propTypes = {
    large_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number,
    rating: PropTypes.number,
    url: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
};


export default MovieDetail;