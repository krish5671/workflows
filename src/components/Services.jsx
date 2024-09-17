import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Navbar from './Navbar'

export default function Services() {
  return (
    <div>
    <Navbar />
         <Container className='w-75 shadow p-5 mt-5'>
        <Row>
            <div className='col-md-5'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-KI5L839-GgaklKhEZtwTll-N4tsHE6DLvQ&s' alt='photo' className='img-fluid' />
            </div>
            <div className='col-md-7'>
                <h1>Our services</h1>
                <p>welcome to Our services Page</p>
            </div>

        </Row>
      </Container>
    </div>
  )
}