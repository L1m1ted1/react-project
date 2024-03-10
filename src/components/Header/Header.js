import style  from './Header.module.css'
import {NavLink} from "react-router-dom";
import {UserInfo} from "../UserInfo/UserInfo";
import useAppContext from "../../hooks/useAppContext";


const Header = () => {

    const {trigger ,switcher} = useAppContext();


    return (
        <div className={`${style.header} + ${trigger ? style.dark : style.light}`}>
            <div className={style.logo}>
                <NavLink to={''}>
                    <img src='/logo.svg' alt="Logo"/>
                    <h4>MovieHub</h4>
                </NavLink>
            </div>
            <div className={style.navBar}>
                <NavLink to={'genres'}><h6>Genres</h6></NavLink>
                <button onClick={() => switcher()}>Switch theme</button>
                <UserInfo/>
            </div>
        </div>
    );
};

export {Header};
