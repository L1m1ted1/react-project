import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import style from './MoviesListCards.module.css'

const MoviesListCards = ({movies}) => {

    console.log(movies)

    return (
        <div className={style.container}>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesListCards};
