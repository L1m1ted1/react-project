import {createBrowserRouter, Navigate} from "react-router-dom";

import {ErrorPage, GenresPage, MovieInfoPage, MoviesPage} from "./pages";
import {MoviesList, SearchComponents} from "./components";
import {MainLayout} from "./layouts";
import movieService from "./services/movieService";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>, children: [
                    {
                        path: '', element: <MoviesList/>
                    },
                    {
                        path: 'search/:query', element: <SearchComponents/>
                    },
                    {
                        path: ':id', element: <MovieInfoPage/>, loader: ({params: {id}}) => movieService.getById(id)
                    }
                ]
            },
            {
                path: 'details/:id', element: <MovieInfoPage/>, loader: ({params: {id}}) => movieService.getById(id)
            },
            {
                path: 'genres', element: <GenresPage/>
            }
        ]
    }
]);

export default router