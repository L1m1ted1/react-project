import useAppContext from "../../hooks/useAppContext";
import style from './MainLayout.module.css'
import {Header} from "../../components";

import {Outlet} from "react-router-dom";

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
