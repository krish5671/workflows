import React from 'react'
import { Container,Row,Button } from 'react-bootstrap'
import Navbar from './Navbar'
export default function About() {
  return (
    <div>
     <Navbar />
         <Container className='w-75 shadow p-5 mt-5'>
        <Row>
            <div className='col-md-5'>
                <img src='https://cdn.dribbble.com/users/144388/screenshots/1515241/about-us-gif.gif' alt='photo' className='img-fluid' />
            </div>
            <div className='col-md-7'>
                <h1>About us Page</h1>
                <p>In our page we can book a travels for marrige and picnic</p>
                <p>for more information please</p>

                <Button> Contact us</Button>
            </div>

        </Row>
      </Container>
    </div>
  )
}