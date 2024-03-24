import {useState} from "react";
import {Navigate, Outlet, useNavigate} from "react-router-dom";

import useAppContext from "../../hooks/useAppContext";
import style from './MoviesPage.module.css'

const MoviesPage = () => {

    const [search, setSearch] = useState({})

    const {trigger} = useAppContext();

    const confirm = (e) => {
        e.preventDefault()
        setSearch(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const {value} = search

    return (
        <div>
            <div className={`${style.searchBar} + ${trigger ? style.dark : style.light}`}>
                <h1>MOVIES</h1>
                <p>Search for your favorite movies</p>
                <div className={style.search}>
                    <input type="text" placeholder={'Search Movies'} name={'value'} onChange={confirm}/>
                </div>
            </div>
            {value ? <Navigate to={`search/${search.value}`}/> : <Navigate to={''}/>}
            <Outlet/>
        </div>
    );
};

export {MoviesPage};
