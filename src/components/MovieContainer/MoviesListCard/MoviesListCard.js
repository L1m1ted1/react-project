import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {StarsRating} from "../../StarsRating/StarsRating";
import style from './MoviesListCard.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import useAppContext from "../../../hooks/useAppContext";

const MoviesListCard = ({movie}) => {
    
    const {id,  backdrop_path, original_title, poster_path, vote_average, overview, genre_ids} = movie;

    const {trigger} = useAppContext();

    return (
        <div className={`${style.block} + ${trigger?style.dark:style.light}`}>
            <NavLink to={`/details/${id}`}>
                <PosterPreview poster_path={poster_path} title={original_title}/>
                <StarsRating/>
                <h3>{original_title}</h3>
            </NavLink>
        </div>
    );
};

export {MoviesListCard};
