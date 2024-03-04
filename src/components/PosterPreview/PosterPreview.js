import style from './PosterPreview.module.css'
import {imgURL, urls} from "../../constants";

const PosterPreview = ({poster_path, title}) => {

    return (
        <div className={style.poster}>
            <img src={imgURL + urls.img.base(poster_path)} alt={title}/>
        </div>
    );
};

export {PosterPreview};
