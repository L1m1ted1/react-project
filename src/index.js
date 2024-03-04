import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {ContextProvider} from "./hoc";

import router from "./router";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <RouterProvider router={router}/>
    </ContextProvider>
);
