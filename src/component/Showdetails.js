import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function Showdetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowDetails(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleBack = () => {
    navigate('/');
  };
  const handleBookMovie = () => {
    setShowBookingModal(true);
  };

  const handleCloseBookingModal = () => {
    setShowBookingModal(false);
  };

  return (
    <>
      {showDetails && (
        <div className='showdetails-info'>
          <img src={showDetails.image?.medium} alt={showDetails.name} className='showdetail-img'/>
              <h2>Show Details for {showDetails.name}</h2>
              <p><b>Language :</b>{showDetails.language}</p>
              <p><b>Status :</b>{showDetails.status}</p>
              <p><b>Premiered :</b>{showDetails.premiered}</p>
              <p><b>Official website :</b>{showDetails.rating.average}</p>
              <h5>Summary:</h5>
              <p>{showDetails.summary}</p>
              <div className='btn-cont'>
                <button onClick={handleBack} className='showdetails-btn'> Back</button>
                <button onClick={handleBookMovie} className='movie-btn'>Book this movie</button>
              </div>
        </div>  
      )}
       <Modal show={showBookingModal} onHide={handleCloseBookingModal}>
        <Modal.Header closeButton>
          <Modal.Title>Book Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Movie Name: {showDetails?.name}</p>
          <form>
            <label for='fname'>Your Name</label>
            <input type='text' placeholder='Enter Your Name' required></input>
            <label for='nos'>Enter No of Tickets</label>
            <input type='text' placeholder='Enter No of Ticketse' required></input>
            <Button variant="primary" type="submit" style={{marginTop:'8px'}}>
              Submit
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseBookingModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  );
}

export default Showdetails;
