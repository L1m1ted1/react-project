import style  from './Header.module.css'
import {NavLink} from "react-router-dom";
import {UserInfo} from "../UserInfo/UserInfo";
import useAppContext from "../../hooks/useAppContext";


const Header = () => {

    const {trigger ,switcher} = useAppContext();


    return (
        <div className={`${style.header} + ${trigger?style.dark:style.light}`}>

            <NavLink to={''}>
                <img src='/logo.svg' alt="Logo"/>
                MovieHub
            </NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <button onClick={() => switcher()}>Switch theme</button>
            <UserInfo/>
        </div>
    );
};

export {Header};
