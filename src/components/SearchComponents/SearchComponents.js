import movieService from "../../services/movieService";
import {NoResults} from "../NoResults/NoResults";

import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import {MoviesListCards} from "../MovieContainer/MoviesListCards/MoviesListCards";

const SearchComponents = () => {
    const {query} = useParams();

    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState(null);
    const [queryPage, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        movieService.getByTitle(query, queryPage.get('page')).then(({data}) => {
            setMovies(data.results);
            setPages(data.total_pages)
        });
    }, [query,queryPage.get('page')]);


    return (
        <div>
            {movies[0] ? <MoviesListCards movies={movies} total_pages={pages}/> : <NoResults result={query}/>}
        </div>
    );
};


export {SearchComponents};
