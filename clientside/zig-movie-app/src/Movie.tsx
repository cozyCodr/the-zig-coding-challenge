import React from 'react'
import {Button, Card} from 'react-bootstrap'

type Props = {
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    overview: string;
    poster_path: string;
    popularity: number;
    release_date: string;
    vote_average: number;
}

const Movie = (props: Props) => {
    return (
        <div>
            <Button variant="primary">Click Me!</Button>
        </div>
    )
}

export default Movie