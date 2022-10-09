import React, {useState, useEffect} from 'react'

import { getPopularMovies, searchMovie } from './Client';
import { Result } from './PopularMoviesInterfaces';
import Movie from './Movie';


const Movies = () => {

    const [topMovies, setTopMovies] = useState<Result[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const [value, setValue] = useState('');

    // Fetch Popular Movies on initial Render
    useEffect(() => {
        fetchPopularMovies();
    }, [])

    // Search Movies onChange of Value
    useEffect(() => {
        setIsFetching(true)
        if (value.length < 1){
            fetchPopularMovies()
        } else {
            searchMovie(value)
            .then( res => res.json()
            .then(movies => {
                console.log(movies)
                setTopMovies(movies[0].results)
                setIsFetching(false)
            }))
        }
    }, [value])

    const fetchPopularMovies = () => 
    { 
        // Help Render appropriate loading animation while fetching
        setIsFetching(true)
        
        getPopularMovies()
        .then( res => res.json()
        .then(movies => {
            setTopMovies(movies[0].results)
            setIsFetching(false)
        }))
    }

    const onChange = (event:React.FormEvent<HTMLInputElement>): void => {
        setValue(event.currentTarget.value)
    }
    
    return (
        <div className='container-fluid mx-auto  bg-black'>
            {/* Search Component */}
            <div className="d-flex justify-content-center align-content-center py-2 rounded-3">
                <form className="w-100 d-flex justify-content-center">
                    <label className="d-flex justify-content-center w-100">
                        <input  onChange={onChange} id="search-box" className="mx-5 p-1 pl-2 pr-3 w-75 bg-black" type="text" placeholder='Search title'/>
                    </label>
                </form>
            </div>  

            {/* Movies */}
            <div className='container-fluid d-flex flex-wrap justify-content-center h-100'>
                {topMovies ?
                
                    topMovies.map((movie, key)=> {
                        return (
                                <Movie key={key}
                                    id={movie.id}
                                    title={movie.title}
                                    original_language={movie.original_language}
                                    overview={movie.overview}
                                    poster_path={movie.poster_path}
                                    backdrop_path={movie.backdrop_path}
                                    popularity={movie.popularity}
                                    release_date={movie.release_date}
                                    vote_average={movie.vote_average}
                                />
                        )})
                :
                <div className="h-100" style={{height: "100vh"}}>
                    <h1 style={{color: "black"}}>loading...</h1>
                </div>
                }
            </div>
        </div>
    )
}

export default Movies
