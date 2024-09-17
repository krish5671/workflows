import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Navbar from './Navbar'
export default function Contact() {
  return (
    <div>
    <Navbar />
         <Container className='w-75 shadow p-5 mt-5'>
        <Row>
            <div className='col-md-5'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZy8NncS3I1f9I-Fq4OocYlAL0aQ4JDTCmMg&s' alt='photo' className='img-fluid' />
            </div>
            <div className='col-md-7'>
                <h1>Contact us</h1>
                <p>welcome to Contact us Page</p>
            </div>

        </Row>
      </Container>
    </div>
  )
}