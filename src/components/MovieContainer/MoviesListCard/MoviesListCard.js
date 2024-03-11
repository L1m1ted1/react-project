import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {StarsRating} from "../../StarsRating/StarsRating";
import useAppContext from "../../../hooks/useAppContext";
import style from './MoviesListCard.module.css'

import {NavLink} from "react-router-dom";


const MoviesListCard = ({movie, total_pages}) => {
    
    const {id, original_title, poster_path, vote_average} = movie;

    const {trigger} = useAppContext();

    return (
        <div className={`${style.block} + ${trigger ? style.dark : style.light}`}>
            <NavLink to={total_pages ? `/movies/${id}` : `/details/${id}`}>
                <PosterPreview poster_path={poster_path} title={original_title}/>
                <StarsRating rating={vote_average}/>
                <h3>{original_title}</h3>
            </NavLink>
        </div>
    );
};

export {MoviesListCard};
