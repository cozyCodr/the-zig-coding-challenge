import React, {useState, useEffect} from 'react'
import {getMovieDetails} from './Client'
import { Root } from './MovieDetailsInterfaces'

type Props = {}

const Details = (props: Props) => {
  const [details, setDetails] = useState<Root | null>(null)
  const [isFetching, setIsFetching] = useState(false);

  const imgurl = `https://image.tmdb.org/t/p/w500`
  const movieId = window.location.pathname.split('/')[2]

  useEffect(() => {

    getMovieDetails(movieId)
    .then(res => res.json()
    .then(mvDetails => {
      setDetails(mvDetails[0])
      setIsFetching(false)
    }))
  }, [])

  console.log(details)
  return (
    <div  className="d-flex justify-content-center bg-black">
      {
        details ?
        <div className="d-flex flex-column p-4 w-75 justify-content-center">
          <div className="p-3">
            <img id="details-page-img" className="w-25" src={imgurl+details.poster_path} alt=""  />
          </div>
          <div className="p-3 text-white">
            <div>
              <h1 className="">{details.title}</h1>
            </div>
            <div className="text-secondary">{details.genres.map(genre => genre.name + " ")}</div>
            <div className=""><p>{details.overview}</p></div>
            <div className="bg-success rounded-1 p-1 my-1 d-inline-block">{details.runtime}min</div>
            <div className='text-secondary'><p>Release Date: {details.release_date}</p></div>
          </div>
      
        </div>
        : 
        <div className="d-flex justify-content-center align-items-center h-full" style={{height: "100vh"}}>
          <h1>loading...</h1>
        </div>
      }
    </div>

  )
}

export default Details