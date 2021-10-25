import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
//
import star from "../images/star-solid.svg";

const Movie = ({
    title,
    poster_path,
    overview,
    vote_average,
    backdrop_path,
    release_date,
}) => {
    const moImg = "https://image.tmdb.org/t/p/w780";
    const [open, setOpen] = useState(false);

    return (
        <div className="movie">
            <div className="movie-card" onClick={() => setOpen(!open)}>
                <img className="moimg" src={moImg + poster_path} alt={title} />
                <p className="title">{title} </p>
                <p className="rate">{vote_average} </p>
                <img className="star" src={star} alt="star" />
            </div>
            <Popup
                open={open}
                closeOnDocumentClick
                onClose={() => setOpen(!open)}
            >
                <div className="popup-card">
                    <img
                        className="popup-card-img"
                        src={moImg + backdrop_path}
                        alt={title}
                    />
                    <div className="popup-mask"></div>
                    <div className="popup-card-inf">
                        <img
                            className="poPopImg"
                            src={moImg + poster_path}
                            alt={title}
                        />
                        <div className="pop-upper-inf">
                            <div className="pop-title">{title}</div>
                            <div className="pop-date-rate">
                                <div>Release date : {release_date}</div>
                                <div>Rating : {vote_average}</div>
                            </div>
                        </div>
                        <div className="pop-overview">{overview}</div>
                    </div>
                </div>
            </Popup>
        </div>
    );
};

export default Movie;
