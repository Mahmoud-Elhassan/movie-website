import { useEffect, useState } from "react";
import axios from "axios";
// components
import Movie from "./components/Movie";
import Hero from "./components/Hero";
// style
import "./styles/App.scss";

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.themoviedb.org/3/discover/movie?api_key=def2afbc35651c0879afe050c9bb4f99&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
            )
            .then((res) => {
                setMovies(res.data.results);
            })

            .catch((error) => console.log(error));
    }, []);
    //
    const changeHandler = (e) => {
        if (e.target.value !== "") {
            axios
                .get(
                    "https://api.themoviedb.org/3/search/movie?api_key=def2afbc35651c0879afe050c9bb4f99&language=en-US&page=1&include_adult=false&query=" +
                        e.target.value
                )
                .then((res) => {
                    setMovies(
                        res.data.results.filter(
                            (e) =>
                                e.poster_path !== null &&
                                e.backdrop_path !== null
                        )
                    );
                })
                .catch((error) => console.log(error));
        }
    };

    console.log(movies);

    return (
        <div className="App">
            <Hero changeHandler={changeHandler} />
            <div className="container">
                {movies.length === 0 && <p className="no-match">No Results</p>}
                <div className="movies">
                    {movies.length !== 0 && (
                        <div className="trend">Trending</div>
                    )}
                    {movies.length > 0 &&
                        movies.map((movie) => (
                            <Movie key={movie.id} {...movie} />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
