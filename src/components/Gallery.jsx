import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Navbar from './Navbar'
export default function Gallery() {
  return (
    <div>
    <Navbar />
         <Container className='w-75 shadow p-5 mt-5'>
        <Row>
            <div className='col-md-5'>
                <img src='https://media0.giphy.com/media/0xCUGn70qR9m8l6n7e/200w.gif?cid=6c09b952acbkxbl5brqxy90d3vuvdw9312y7odvg4p7f2s09&ep=v1_gifs_search&rid=200w.gif&ct=g' alt='photo' className='img-fluid' />
            </div>
            <div className='col-md-7'>
                <h1>Our Gallery</h1>
                <p>welcome to Our Gallery Page</p>
            </div>

        </Row>
      </Container>
    </div>
  )
}