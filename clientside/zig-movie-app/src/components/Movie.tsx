import React from 'react'
import {Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
    const imgurl = `https://image.tmdb.org/t/p/w500${props.poster_path}`
    const cardDetailsUrl = `/m/${props.id}/details`
    return (
        <Link to={cardDetailsUrl}>
            <Card className="bg-dark text-white" style={{ cursor: "pointer", width: '12rem', height: '16rem', margin: "3rem 1rem"}}>
                <Card.Img src={imgurl} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.release_date}</Card.Text>
                    <Card.Text>{props.vote_average}</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Link>
    )
}

export default Movie