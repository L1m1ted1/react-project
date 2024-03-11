import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import style from './MoviesListCards.module.css'
import {useSearchParams} from "react-router-dom";
import useAppContext from "../../../hooks/useAppContext";

const MoviesListCards = ({movies, total_pages}) => {

    const {trigger} = useAppContext()
    const [query, setQuery] = useSearchParams({page:'1'});

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())

            return prev
        });
    };
    const next = () => {
        setQuery(next => {
            next.set('page', (+next.get('page') + 1).toString())

            return next
        });
    };

    const page = query.get('page')

    return (
        <div className={style.container}>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie} total_pages={total_pages}/>)}
            <div className={style.prevNext}>
                <div className={`${style.buttons} + ${trigger ? style.dark : style.light}`}>
                    <button
                        disabled={page === '1'}
                        onClick={prev}>Back
                    </button>
                    <div className={trigger ? style.dark : style.light}>
                        <p>{page}</p>
                    </div>
                    <button
                        disabled={total_pages ? page === `${total_pages}` : page === '500'}
                        onClick={next}>Forward
                    </button>
                </div>
            </div>
        </div>
    );
};

export {MoviesListCards};
