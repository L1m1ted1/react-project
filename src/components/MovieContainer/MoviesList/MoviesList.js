import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import movieService from "../../../services/movieService";
import {MoviesListCards} from "../MoviesListCards/MoviesListCards";
import useAppContext from "../../../hooks/useAppContext";
import {NoResults} from "../../NoResults/NoResults";

const MoviesList = () => {

    const {trigger} = useAppContext();
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        movieService.getAll(query.get('page')).then(({data}) => setMovies(data.results))
    }, [query.get('page')]);

    return (
        <div>
            {movies ?  <MoviesListCards movies={movies}/> : <NoResults/>}
        </div>
    );
};

export {MoviesList};
