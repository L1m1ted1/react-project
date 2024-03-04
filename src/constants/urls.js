const baseURL = 'https://api.themoviedb.org/3'
const imgURL = 'https://image.tmdb.org/t/p'

// https://api.themoviedb.org/3/movie/273477
const movie = '/movie'

const urls = {
    movies: {
        base: () => `/discover${movie}`,
        byId: (id) => `${movie}/${id}`,
        gender: () => `/genre${movie}/list`
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