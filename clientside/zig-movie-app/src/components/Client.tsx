import fetch from "unfetch"

// ex: proxied API request to -> api/popular
export function getPopularMovies(){
    return fetch('/api/popular')
}

// ex: proxied API request to -> api/movie/1145
export function getMovieDetails(id: number){
    fetch(`/api/movie/${id}`)
}

// ex: proxied API request to -> api/search?query="Cruella"
export function searchMovie(substring: string){
    fetch(`/api/search?query=${substring}`)
}