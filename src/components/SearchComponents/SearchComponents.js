import {useEffect, useState} from "react";
import movieService from "../../services/movieService";
import {MoviesListCards} from "../MovieContainer/MoviesListCards/MoviesListCards";
import {useLocation, useParams, useSearchParams} from "react-router-dom";

const SearchComponents = () => {

    // const {search} = useLocation();
    //
    // console.log(search)


    const {query} = useParams();

    const [movies, setMovies] = useState([])
    const [pages, setPages] = useState(null)
    const [queryPage, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        movieService.getByTitle(query,queryPage.get('page')).then(({data})  => {
            setMovies(data.results);
            setPages(data.total_pages)
        })
    }, [query,queryPage.get('page')]);


    return (
        <div>
            <MoviesListCards movies={movies} total_pages={pages}/>
        </div>
    );
};


export {SearchComponents};
