import React, {useState, useEffect} from 'react'
import {getMovieDetails} from './Client'
import { Root } from './MovieDetailsInterfaces'

type Props = {}

const Details = (props: Props) => {
  const [details, setDetails] = useState<Root | null>(null)
  const [isFetching, setIsFetching] = useState(false);

  const movieId = window.location.pathname.split('/')[2]
  useEffect(() => {

    getMovieDetails(movieId)
    .then(res => res.json()
    .then(mvDetails => {
      setDetails(mvDetails[0])
      setIsFetching(false)
    }))
  }, [])

  return (
    <div className=" h-100">
      {
        details ? 
        <ul>
          <li>{details.title}</li>
          <li>{details.genres.map(genre => genre.name + " ")}</li>
          <li>{details.overview}</li>
          <li>{details.popularity}</li>
          <li>{details.release_date}</li>
        </ul>
        : 
        <div className="h-full">
          <h1>loading</h1>
        </div>
      }
    </div>

  )
}

export default Details