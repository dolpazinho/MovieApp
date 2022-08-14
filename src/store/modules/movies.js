import movieList from '../../assets/movie-list'

const state = {
    movies: movieList
}

const mutation = {

}

const actions = {

}

const getters = {
    getMovies: state => {
        return state.movies
    }
}

export default {
    state,
    mutation,
    actions,
    getters
}