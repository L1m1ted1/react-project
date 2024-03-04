import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {ErrorPage} from "./pages";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {GenresPage} from "./pages/GenresPage";
import {MovieInfoPage} from "./pages/MovieInfoPage/MovieInfoPage";
import movieService from "./services/movieService";

const router =  createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/> , children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path: 'details/:id', element: <MovieInfoPage/>, loader: ({params: {id}}) => movieService.getById(id)

            },
            {
                path: 'genres', element: <GenresPage/>
            }
        ]
    }
])

export default router