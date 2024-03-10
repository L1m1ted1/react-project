import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {
    getAll: (page = '1') => apiService.get(urls.movies.base(), {params:{page}}),
    getById: (id) => apiService.get(urls.movies.byId(id)),
    getGenres: () => apiService.get(urls.movies.gender()),
    getByTitle: (params, page = '1') => apiService.get(urls.movies.searchByTitle(params), {params:{page}})
}

export default movieService