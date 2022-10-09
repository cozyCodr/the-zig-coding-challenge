import React, {useState, useEffect} from 'react'

import { getPopularMovies } from './Client';
import { Result } from './PopularMoviesInterfaces';
import Movie from './Movie';


const Movies = () => {

    const [topMovies, setTopMovies] = useState<Result[]>([]);
    const [isFetching, setIsFetching] = useState(false);


    useEffect(() => {
        fetchPopularMovies();
    }, [])

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
    
    return (
        <div className='container-fluid mx-auto  bg-black'>            
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
                <div className="h-100">
                    <h1 style={{color: "black"}}>Loading</h1>
                </div>
                }
            </div>
        </div>
    )
}

export default Movies
