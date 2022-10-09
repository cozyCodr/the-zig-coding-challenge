import React from 'react'
import { Card } from 'react-bootstrap'
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
        <Link to={cardDetailsUrl} className="bg-black mx-3 my-3" style={{textDecoration: "none", height: "fit-content"}}>
            <Card className="bg-black text-white" style={{ cursor: "pointer", width: '12rem', height: 'fit-content'}}>
                <Card.Img className="bg-black" src={imgurl} alt="Card image" />
        
                <Card.Body className="d-flex justify-content-between p-0">
                    <Card.Title className="">{props.title}</Card.Title>
                    <Card.Text className="text-secondary">{props.vote_average.toFixed(1)}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Movie