import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {  useNavigate } from 'react-router-dom';

function Shows(props) {
    const [shows, setShows] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setShows(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleShowDetails = (showId) => {
        navigate(`/showdetails/${showId}`);
      };

    return (
        <>
        <h1 className='headingtag'>Welcome To TvMaze </h1>
        <Row xs={1} md={2} lg={5} className="g-4">
            {shows.map((s, idx) => (
                <Col key={idx}>
                    <Card style={{padding:'0'}} border="dark" className='card-detail'>
                        <Card.Img style={{padding:'0'}} variant="top" src={s.show.image?.medium} alt={s.show.name} />
                        <Card.Body style={{padding:'8px'}}>
                            <Card.Title style={{padding:'0', marginBottom:'0'}}>{s.show.name}</Card.Title>
                            <Card.Text style={{padding:'0'}}>
                                <p className='showDet'>Language: {s.show.language}</p>
                                <p className='showDet'>Genres: {s.show.genres?.join(', ')}</p>
                            </Card.Text>
                            <Button style={{padding:'0'}} className='btn btn-dark' onClick={() => handleShowDetails(s.show.id)}>Show More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        </>
    );
}

export default Shows;
