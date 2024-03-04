import {useLoaderData} from "react-router-dom";
import {imgURL, urls} from "../../constants";
import style from './MovieInfoPage.module.css'
import useAppContext from "../../hooks/useAppContext";

const MovieInfoPage = () => {

    const {data} = useLoaderData();

    const {backdrop_path, poster_path, original_title, overview, vote_average, genres, release_date, spoken_languages} = data

    const {trigger} = useAppContext();

    return (
        <div className={trigger?style.dark:style.light}>
            <div className={style.poster}>
                <img src={imgURL + urls.img.base(backdrop_path)} alt="Backdrop"/>
                <div className={`${style.name} + ${trigger?style.dark:style.light}`}>
                    <h2>{original_title}</h2>
                </div>
            </div>
            <div className={style.avatar}>
                <img src={imgURL + urls.img.base(poster_path)} alt="Poster"/>
                <div className={style.title}>
                    <h2>Короткий опис</h2>
                    <p>{overview}</p>
                    <h2>Жанри</h2>
                    {genres.map(genre => <p>{genre.name}</p>)}
                    <h2>Дата релізу</h2>
                    <p>{release_date}</p>
                    <h2>Мова(и)</h2>
                    {spoken_languages.map(languages => <p>{languages.english_name}</p>)}
                </div>
            </div>
        </div>
    );
};

export {MovieInfoPage};
