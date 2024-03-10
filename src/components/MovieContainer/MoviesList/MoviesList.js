import {useEffect, useState} from "react";
import {Outlet, useSearchParams} from "react-router-dom";

import movieService from "../../../services/movieService";
import {MoviesListCards} from "../MoviesListCards/MoviesListCards";
import style from './MoviesList.module.css'
import useAppContext from "../../../hooks/useAppContext";

const MoviesList = () => {

    const {trigger} = useAppContext();


    const [movies, setMovies] = useState([])
    // const [query, setQuery] = useSearchParams({page:'1'});
    //
    // useEffect(() => {
    //     movieService.getAll(query.get('page')).then(({data}) => setMovies(data.results))
    // }, [query.get('page')]);
    //
    // const prev = () => {
    //     setQuery(prev => {
    //         prev.set('page', (+prev.get('page') - 1).toString())
    //
    //         return prev
    //     })
    // }
    // const next = () => {
    //     setQuery(next => {
    //         next.set('page', (+next.get('page') + 1).toString())
    //
    //         return next
    //     })
    // }
    //
    // const page = query.get('page')

    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        movieService.getAll(query.get('page')).then(({data}) => setMovies(data.results))
    }, [query.get('page')]);

    return (
        <div>
            <MoviesListCards movies={movies}/>

            {/*<div className={`${style.buttons} + ${trigger?style.dark:style.light}`}>*/}
            {/*    <button disabled={page === '1'} onClick={prev}>Back</button>*/}
            {/*    <div className={trigger?style.dark:style.light}><p>{page}</p></div>*/}
            {/*    <button disabled={page === '500'} onClick={next}>Forward</button>*/}
            {/*</div>*/}



        </div>
    );
};

export {MoviesList};
