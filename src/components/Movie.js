import PropTypes from "prop-types";
import { useState } from "react";
import {Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, medium_cover_image, title, summary, genres}){
    const [titleOn, setTitleOn] = useState(false);
    return (
        <div className={styles.movie}>
            <h2 className={styles.title}
            onMouseOver={() => setTitleOn(true)}
            onMouseOut={() => setTitleOn(false)}
            >
                <Link 
                className={titleOn ? styles.titleLinkOn : styles.titleLink}
                to={`/movie/${id}`}
                >
                    {title}
                </Link>
            </h2>
            <img className={styles.img} src={medium_cover_image} alt={title} />
            <p className={styles.summary}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            <ul className={styles.genre}>
                {genres&&genres.map((g) => (
                <li className={styles.genreList} key={g}>#{g}</li>
                ))}
            </ul>
        </div>
      );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
};


export default Movie;