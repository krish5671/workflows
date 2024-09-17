import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Navbar from './Navbar'
export default function Feedback() {
  return (
    <div>
      <Navbar />
         <Container className='w-75 shadow p-5 mt-5'>
        <Row>
            <div className='col-md-5'>
                <img src='https://media4.giphy.com/media/rminyWgjsI69peN5CO/giphy.gif?cid=6c09b952kmjjq38l61gtebaiusghmkufzr1x9cunal7wwizn&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s' alt='photo' className='img-fluid' />
            </div>
            <div className='col-md-7'>
                <h1>Feedback page</h1>
                <p>welcome to Our Feedback Page</p>
            </div>

        </Row>
      </Container>
    </div>
  )
}