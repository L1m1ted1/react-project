import {Header} from "../../components";
import style from './MainLayout.module.css'

import {Outlet} from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";

const MainLayout = () => {

    let {trigger} = useAppContext();

    return (
        <div className={trigger ? style.black : style.white}>
            <div className={style.container}>
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};
