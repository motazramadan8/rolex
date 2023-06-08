import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'


const Footer = () => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={3} md={6} sm={12}>
                <h3>Our information</h3>
                <br />
                <ul style={{listStyleType: 'none'}}>
                    <li>1234 - Peru</li>
                    <li>La Libertad 43210</li>
                    <li>123-456-789</li>
                </ul>
            </Col>

            <Col lg={3} md={6} sm={12}>
                <h3>About Us</h3>
                <br />
                <ul style={{listStyleType: 'none'}}>
                    <li>Support Center</li>
                    <li>Customer Support</li>
                    <li>About Us</li>
                    <li>Copy Right</li>

                </ul>
            </Col>

            <Col lg={3} md={6} sm={12}>
                <h3>Product</h3>
                <br />
                <ul style={{listStyleType: 'none'}}>
                    <li>Road bikes</li>
                    <li>Mountain bikes</li>
                    <li>Electric</li>
                    <li>Accesories</li>
                </ul>
            </Col>

            <Col lg={3} md={6} sm={12}>
                <h3>Social</h3>
                <br />
                <div className="d-flex">
                    <img style={{marginRight: '10px'}} src="img\facebook.svg" alt="" />
                    <img style={{marginRight: '10px'}} src="img\twitter.svg" alt="" />
                    <img style={{marginRight: '10px'}} src="img\instagram.svg" alt="" />
                </div>
            </Col>
        </Row>
      </Container>


      <hr />
        <br />
      <h5 style={{ textAlign: 'center' }}>© <a style={{textDecoration: 'none' , color: '#000'}} href="https://motaz.vercel.app/">Motaz Ramadan.</a> All rigths reserved</h5>
    </>
  )
}

export default Footer
