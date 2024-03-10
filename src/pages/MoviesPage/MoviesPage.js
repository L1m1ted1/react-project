import {MoviesList} from "../../components";
import style from './MoviesPage.module.css'
import useAppContext from "../../hooks/useAppContext";
import {useState} from "react";
import {Navigate, Outlet, useNavigate} from "react-router-dom";
;

const MoviesPage = () => {

    const [search, setSearch] = useState({})

    const {trigger} = useAppContext();

    const navigate = useNavigate();

    const confirm = (e) => {
        e.preventDefault()
        setSearch(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const {value} = search


    return (
        <div>
            <div className={`${style.searchBar} + ${trigger ? style.dark : style.light}`}>
                <h1>MOVIES</h1>
                <p>Шукайте свої улюблені фільми</p>
                <div className={style.search}>
                    <input type="text" placeholder={'Search Movies'} name={'value'} onChange={confirm}/>
                    {/*<button>Search</button>*/}
                </div>
            </div>
            {search.value ? <Navigate to={`search/${search.value}`}/> : <Navigate to={''}/>}
            <Outlet/>
            {/*{search.value ? <SearchComponents search={search.value}/> :  <MoviesList/>}*/}

        </div>
    );
};

export {MoviesPage};
