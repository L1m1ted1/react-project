const baseURL = 'https://api.themoviedb.org/3'
const imgURL = 'https://image.tmdb.org/t/p'

// https://api.themoviedb.org/3/search/movie?query=world
const movie = '/movie'

const urls = {
    movies: {
        base: () => `/discover${movie}?language=en-US`,
        byId: (id) => `${movie}/${id}`,
        gender: () => `/genre${movie}/list`,
        searchByTitle: (params) => `/search${movie}?query=${params}`
    },
    img:{
        base: (path) => `/w500/${path}`
    }
}

export {
    baseURL,
    imgURL,
    urls
}