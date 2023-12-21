import logo from './logo.svg';
import './App.css';
// import { Card } from 'react-bootstrap';
import React,{ useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './header';
import Banner from './banner';
import axios from 'axios';

function App() {
    const[photos,setPhotos]=useState([]);

    useEffect(()=>{
      axios.get("https://api.tvmaze.com/shows/1/episodes")
      
      .then((res)=>setPhotos(res.data));
    })

  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Container className='card-container' >
       
{
   <Row className='row'>
   <Col>
         { 
                photos.map((photo)=>(
          <div className='card-section'>
           
        <Card style={{ width: '15rem' }} className='card-content'>
            <Card.Img variant="top" src={photo.image.medium} />
            <Card.Body>
              <Card.Title>{photo.name}  -  Season:{photo.season}</Card.Title>
              <Card.Text>Rating:{photo.rating.average}</Card.Text>
              <Card.Text>{photo.type}</Card.Text>
            </Card.Body>
            </Card>
                        
          </div>
         
        ))}
        </Col>
        </Row>
                 }
        
      </Container>
      
    </div>
  );
}

export default App;
