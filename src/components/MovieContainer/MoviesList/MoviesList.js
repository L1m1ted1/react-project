import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import movieService from "../../../services/movieService";
import {MoviesListCards} from "../MoviesListCards/MoviesListCards";
import style from './MoviesList.module.css'
import useAppContext from "../../../hooks/useAppContext";
const MoviesList = () => {
    const [movies, setMovies] = useState([])
    const {trigger} = useAppContext();
    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        movieService.getAll(query.get('page')).then(({data}) => setMovies(data.results))
    }, [query.get('page')]);

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())

            return prev
        })
    }
    const next = () => {
        setQuery(next => {
            next.set('page', (+next.get('page') + 1).toString())

            return next
        })
    }
    const page = query.get('page')

    console.log(page)

    return (
        <div>
            <MoviesListCards movies={movies}/>
            <div className={style.buttons}>
                <button className={trigger?style.dark:style.light} disabled={page === '1'} onClick={prev}>Back</button>
                <button className={trigger?style.dark:style.light} disabled={page === '500'} onClick={next}>Forward</button>
            </div>
        </div>
    );
};

export {MoviesList};
