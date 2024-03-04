import {MoviesList} from "../../components";
import style from './MoviesPage.module.css'
import useAppContext from "../../hooks/useAppContext";

const MoviesPage = () => {

    const {trigger} = useAppContext();

    return (
        <div>
            <div className={`${style.searchBar} + ${trigger?style.dark:style.light}`}>
                <h1>MOVIES</h1>
                <input type="text"/>
            </div>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};
