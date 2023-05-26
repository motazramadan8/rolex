import React from 'react'
import NavBar from './NavBar'
import { Container , Row , Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';




import './homedark.css'
import Footer from './Footer';


const HomeDark = () => {
  return (
    <div style={{backgroundColor: 'hsl(0, 0%, 12%)' , color: '#fff'}}>
        
        <Navbar id='firnav' style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="img\favicon.png" alt="" /> <b style={{marginTop: '40px' , color: '#fff'}}>ROLEX</b>
                </Navbar.Brand>
                <Navbar.Toggle style={{border: 'none'}} aria-controls="basic-navbar-nav">
                    <img src="img/grid.svg" alt="" />
                </Navbar.Toggle>
                
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className='link' to="/dark"><b style={{color: 'hsl(31, 100%, 70%)'}}>Home</b></Link>
                    <Link className='link' to="#link"><b>Featured</b></Link>
                    <Link className='link' to="#home"><b>Products</b></Link>
                    <Link className='link' to="#link"><b>New</b></Link>
                </Nav>

                <Nav className="ms-auto">
                    <Link className='link' to="/"><b><img src="img/sun-icon-design-free-png.webp" width="30" /></b></Link>
                    <Link className='link' to="#home"><b><img src="img/shopping-bag-xxl.png" width="30" /></b></Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <section className='herobig'>
          
            <Container>
              <Container>
              <Row>
                  <Col xxl={6} xl={6} lg={6} md={6} sm={12} className='fircol'>
                    <div style={{marginTop: '200px'}}>
                    <h1 style={{fontWeight: '700' , width: '400px'}
                  }>
                      NEW WATCH
                      COLLECTIONS B720
                    </h1>
                      <br />
                    <p style={{fontWeight: '400' , width: '300px'}}>
                      Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.
                    </p>
                    <br />
                    <h3 style={{ color: 'hsl(31, 100%, 70%)' }}>$1245</h3>
                    <br />
                    <div className='d-flex'>
                        <button style={{width: '100px' , height: '50px' , marginTop:' 5px' , backgroundColor: 'hsl(0, 0%, 75%)' , border: 'none' }}className='discoverd'><b>Discover</b></button>

                        <button style={{width: '150px' , height: '60px' , backgroundColor: 'hsl(0, 0%, 17%)' , color: 'white' , border: 'none'}}><b>ADD TO CART</b></button>
                    </div>
                    </div>
                    
                  </Col>

                  <Col className='secondcol' xxl={6} xl={6} lg={6} md={6} sm={12}> 
                      <img src="img/Untitled-1.png" width="600" />
                      
                  </Col>
              </Row>
              </Container>
            </Container>

        </section>
        
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br /> 

        <section>
          <div style={{display: 'flex' , justifyContent: 'space-around'}}>
            <div>
            <div style={{width: '100px' , height: '2px' , backgroundColor: 'gray' , marginLeft: '23px' , marginBottom: '5px' }}></div>
            <h2>FEATURED</h2>
            </div>
          </div>

          <div>
            <br />
            <br />
            <Container>
              <Row>
                  <Col  lg={4} md={6} sm={6} xs={12}>
                    <div >
                      <Card className='carddd' style={{ width: '18em' , borderColor: 'hsl(0, 0%, 20%)' , transition: '.5s' , height: '350px' , backgroundColor: 'hsl(0, 0%, 16%)'}}>
                        <div className='d-flex'>
                          <h5 style={{backgroundColor: 'hsl(31, 100%, 70%)' , height: '30px' , width: '80px' , transform: 'rotate(-90deg)' , padding: '0 0 0 12px' , color: 'white' , position: 'absolute' , left: '-1.6rem' , top: '6rem'  }}>SALE</h5>
                          <img variant="top" style={{margin: '0 auto'}} src="img/featured1.png" width="150" />
                        </div>
                        <Card.Body>
                          <Card.Title><b style={{marginLeft: '60px' , fontSize: '20px'}}>JAZZMASTER</b></Card.Title>
                          <Card.Text>
                            <b style={{marginLeft: '100px' , color: 'hsl(31, 100%, 70%)'}}>$1050</b>
                          </Card.Text>
                          <button className='hide'>ADD TO CART</button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>




                  <Col lg={4} md={6} sm={6} xs={12}>
                    <div >
                    <Card className='carddd' style={{ width: '18em' , borderColor: 'hsl(0, 0%, 20%)' , transition: '.5s' , height: '350px' , backgroundColor: 'hsl(0, 0%, 16%)'}}>
                        <div className='d-flex'>
                          <h5 style={{backgroundColor: 'hsl(31, 100%, 70%)' , height: '30px' , width: '80px' , transform: 'rotate(-90deg)' , padding: '0 0 0 12px' , color: 'white' , position: 'absolute' , left: '-1.6rem' , top: '6rem'  }}>SALE</h5>
                          <img variant="top" style={{margin: '0 auto'}} src="img/featured2.png" width="150" />
                        </div>
                        <Card.Body>
                          <Card.Title><b style={{marginLeft: '60px' , fontSize: '20px'}}>INGERSOLL</b></Card.Title>
                          <Card.Text>
                            <b style={{marginLeft: '100px' , color: 'hsl(31, 100%, 70%)'}}>$250</b>
                          </Card.Text>
                          <button className='hide'>ADD TO CART</button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>




                  <Col lg={4} md={6} sm={6} xs={12}>
                    <div >
                    <Card className='carddd' style={{ width: '18em' , borderColor: 'hsl(0, 0%, 20%)' , transition: '.5s' , height: '350px' , backgroundColor: 'hsl(0, 0%, 16%)'}}>
                        <div className='d-flex'>
                          <h5 style={{backgroundColor: 'hsl(31, 100%, 70%)' , height: '30px' , width: '80px' , transform: 'rotate(-90deg)' , padding: '0 0 0 12px' , color: 'white' , position: 'absolute' , left: '-1.6rem' , top: '6rem'  }}>SALE</h5>
                          <img variant="top" style={{margin: '0 auto'}} src="img/featured3.png" width="150" />
                        </div>
                        <Card.Body>
                          <Card.Title><b style={{marginLeft: '60px' , fontSize: '20px'}}>INGERSOLL</b></Card.Title>
                          <Card.Text>
                            <b style={{marginLeft: '100px' , color: 'hsl(31, 100%, 70%)'}}>$890</b>
                          </Card.Text>
                          <button className='hide'>ADD TO CART</button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
              </Row>
            </Container>
          </div>
        </section> 

                  <br />
                  <br />
                  <br />


        <section>

            <Container>
              <Row>
                <Col lg={6} md={12} sm={12}>
                  <img src="img/story2.png" width="700" />
                </Col>
                  
                <Col lg={6} md={12} sm={12} style={{marginTop: '100px'}}>
                <div style={{display: 'flex' , justifyContent: 'space-around'}}>
                  <div>
                    <div style={{width: '100px' , height: '2px' , backgroundColor: 'gray' , marginLeft: '12px' , marginBottom: '5px' , alignItems: 'center' }}></div>
                    <h4>OUR STORY</h4>
                      <br />
                    <h1 style={{ width: '350px'}}>Inspirational Watch of this year</h1>
                    <br />
                    <p style={{width: '300px'}}> 
                    The latest and modern watches of this year, is available in various presentations in this store, discover them now.
                    </p>
                    <br />
                    <button style={{width: '100px' , height: '50px' , marginTop:' 5px' , backgroundColor: 'hsl(0, 0%, 17%)' , border: 'none' , color: 'white' }}className='discoverd'><b>Discover</b></button>

                  </div>
                </div>
                </Col>
              </Row>
            </Container>

        </section>     


        <section>
          
          <div style={{display: 'flex' , justifyContent: 'space-around'}}>
            <div>
            <div style={{width: '100px' , height: '2px' , backgroundColor: 'gray' , marginLeft: '23px' , marginBottom: '5px' }}></div>
            <h2>PRODUCTS</h2>
            </div>
          </div>
          
          
                  <Container>
                    <Row>
                      <Col  lg={4} md={6} sm={6} xs={12}>
                        <div >
                          <Card className='carddddd' style={{ width: '16em' , borderColor: 'hsl(0, 0%, 20%)' , transition: '.5s' , height: '350px' , backgroundColor: 'hsl(0, 0%, 16%)'}}>
                            <div className='d-flex'>
                              <img className='prodimg' variant="top" style={{margin: '0 auto'}} src="img/product1.png" width="150" />
                            </div>
                            <Card.Body>
                              <Card.Title><b style={{marginLeft: '45px' , fontSize: '20px'}}>JAZZMASTER</b></Card.Title>
                              <Card.Text>
                                <b style={{marginLeft: '85px' , color: 'hsl(31, 100%, 70%)'}}>$1050</b>
                              </Card.Text>
                              <button className='addddd'><img src="img/shopping-bag.svg" alt="" /></button>
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>



                      <Col  lg={4} md={6} sm={6} xs={12}>
                        <div >
                        <Card className='carddddd' style={{ width: '16em' , borderColor: 'hsl(0, 0%, 20%)' , transition: '.5s' , height: '350px' , backgroundColor: 'hsl(0, 0%, 16%)'}}>
                            <div className='d-flex'>
                              <img className='prodimg' variant="top" style={{margin: '0 auto'}} src="img/product2.png" width="150" />
                            </div>
                            <Card.Body>
                              <Card.Title><b style={{marginLeft: '45px' , fontSize: '20px'}}>JAZZMASTER</b></Card.Title>
                              <Card.Text>
                                <b style={{marginLeft: '85px' , color: 'hsl(31, 100%, 70%)'}}>$1050</b>
                              </Card.Text>
                              <button className='addddd'><img src="img/shopping-bag.svg" alt="" /></button>
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>



                      <Col  lg={4} md={6} sm={6} xs={12}>
                        <div >
                        <Card className='carddddd' style={{ width: '16em' , borderColor: 'hsl(0, 0%, 20%)' , transition: '.5s' , height: '350px' , backgroundColor: 'hsl(0, 0%, 16%)'}}>
                            <div className='d-flex'>
                              <img className='prodimg' variant="top" style={{margin: '0 auto'}} src="img/product3.png" width="150" />
                            </div>
                            <Card.Body>
                              <Card.Title><b style={{marginLeft: '45px' , fontSize: '20px'}}>JAZZMASTER</b></Card.Title>
                              <Card.Text>
                                <b style={{marginLeft: '85px' , color: 'hsl(31, 100%, 70%)'}}>$1050</b>
                              </Card.Text>
                              <button className='addddd'><img src="img/shopping-bag.svg" alt="" /></button>
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>


                      <Col  lg={4} md={6} sm={6} xs={12}>
                        <div >
                        <Card className='carddddd' style={{ width: '16em' , borderColor: 'hsl(0, 0%, 20%)' , transition: '.5s' , height: '350px' , backgroundColor: 'hsl(0, 0%, 16%)'}}>
                            <div className='d-flex'>
                              <img className='prodimg' variant="top" style={{margin: '0 auto'}} src="img/product4.png" width="150" />
                            </div>
                            <Card.Body>
                              <Card.Title><b style={{marginLeft: '45px' , fontSize: '20px'}}>JAZZMASTER</b></Card.Title>
                              <Card.Text>
                                <b style={{marginLeft: '85px' , color: 'hsl(31, 100%, 70%)'}}>$1050</b>
                              </Card.Text>
                              <button className='addddd'><img src="img/shopping-bag.svg" alt="" /></button>
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>



                      <Col  lg={4} md={6} sm={6} xs={12}>
                        <div >
                        <Card className='carddddd' style={{ width: '16em' , borderColor: 'hsl(0, 0%, 20%)' , transition: '.5s' , height: '350px' , backgroundColor: 'hsl(0, 0%, 16%)'}}>
                            <div className='d-flex'>
                              <img className='prodimg' variant="top" style={{margin: '0 auto'}} src="img/product5.png" width="150" />
                            </div>
                            <Card.Body>
                              <Card.Title><b style={{marginLeft: '45px' , fontSize: '20px'}}>JAZZMASTER</b></Card.Title>
                              <Card.Text>
                                <b style={{marginLeft: '85px' , color: 'hsl(31, 100%, 70%)'}}>$1050</b>
                              </Card.Text>
                              <button className='addddd'><img src="img/shopping-bag.svg" alt="" /></button>
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>



                      



                    </Row>
                  </Container>


        </section>     


                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />


        <section>
          <div style={{display: 'flex' , justifyContent: 'space-around'}}>
            <div>
            <div style={{width: '100px' , height: '2px' , backgroundColor: 'gray' , marginLeft: '65px' , marginBottom: '5px' }}></div>
            <h2>NEW ARRIVALS</h2>
            </div>
          </div>

          <div>
            <br />
            <br />
            <Container>
              <Row>
                  <Col  lg={3} md={6} sm={6} xs={12}>
                    <div >
                        
                      <Card className='carrrrddd' style={{ backgroundColor: 'hsl(0, 0%, 16%)' , width: '18em' , borderColor: 'hsl(0, 0%, 20%)' , transition: '.5s' , height: '350px' , color: '#fff '}}>
                        <div className='d-flex'>
                        <h5 style={{backgroundColor: '#000' , height: '30px' , width: '80px' , padding: '3px 0 0 16px' , color: 'white' , position: 'absolute' , left: '-0.1rem' , top: '2rem'  }}>NEW</h5>

                          <img variant="top" style={{margin: '0 auto'}} src="img/featured1.png" width="150" />
                        </div>
                        <Card.Body>
                          <Card.Title><b className='bbbb' style={{marginLeft: '60px' , fontSize: '20px'}}>JAZZMASTER</b></Card.Title>
                          <Card.Text>
                            <b style={{marginLeft: '100px'}}>$1050</b>
                          </Card.Text>
                          <button className='hide'>ADD TO CART</button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>




                  <Col lg={3} md={6} sm={6} xs={12}>
                    <div >
                    <Card className='carrrrddd' style={{ backgroundColor: 'hsl(0, 0%, 16%)' , width: '18em' , borderColor: 'hsl(0, 0%, 20%)' , transition: '.5s' , height: '350px' , color: '#fff '}}>
                        <div className='d-flex'>
                        <h5 style={{backgroundColor: '#000' , height: '30px' , width: '80px' , padding: '3px 0 0 16px' , color: 'white' , position: 'absolute' , left: '-0.1rem' , top: '2rem'  }}>NEW</h5>

                          <img variant="top" style={{margin: '0 auto'}} src="img/featured2.png" width="150" />
                        </div>
                        <Card.Body>
                          <Card.Title><b className='bbbb' style={{marginLeft: '60px' , fontSize: '20px'}}>INGERSOLL</b></Card.Title>
                          <Card.Text>
                            <b style={{marginLeft: '100px'}}>$250</b>
                          </Card.Text>
                          <button className='hide'>ADD TO CART</button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>




                  <Col lg={3} md={6} sm={6} xs={12}>
                    <div >
                    <Card className='carrrrddd' style={{ backgroundColor: 'hsl(0, 0%, 16%)' , width: '18em' , borderColor: 'hsl(0, 0%, 20%)' , transition: '.5s' , height: '350px' , color: '#fff '}}>
                        <div className='d-flex newww'>
                        <h5 style={{backgroundColor: '#000' , height: '30px' , width: '80px' , padding: '3px 0 0 16px' , color: 'white' , position: 'absolute' , left: '-0.1rem' , top: '2rem'  }}>NEW</h5>

                          <img variant="top" style={{margin: '0 auto'}} src="img/featured3.png" width="150" />
                        </div>
                        <Card.Body>
                          <Card.Title><b className='bbbb' style={{marginLeft: '60px' , fontSize: '20px'}}>INGERSOLL</b></Card.Title>
                          <Card.Text>
                            <b style={{marginLeft: '100px'}}>$890</b>
                          </Card.Text>
                          <button className='hide'>ADD TO CART</button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>



                  <Col lg={3} md={6} sm={6} xs={12}>
                    <div >
                    <Card className='carrrrddd' style={{ backgroundColor: 'hsl(0, 0%, 16%)' , width: '18em' , borderColor: 'hsl(0, 0%, 20%)' , transition: '.5s' , height: '350px' , color: '#fff '}}>
                        <div className='d-flex'>
                        <h5 style={{backgroundColor: '#000' , height: '30px' , width: '80px' , padding: '3px 0 0 16px' , color: 'white' , position: 'absolute' , left: '-0.1rem' , top: '2rem'  }}>NEW</h5>

                          <img variant="top" style={{margin: '0 auto'}} src="img/featured3.png" width="150" />
                        </div>
                        <Card.Body>
                          <Card.Title><b className='bbbb' style={{marginLeft: '60px' , fontSize: '20px'}}>INGERSOLL</b></Card.Title>
                          <Card.Text>
                            <b style={{marginLeft: '100px'}}>$890</b>
                          </Card.Text>
                          <button className='hide'>ADD TO CART</button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
              </Row>
            </Container>
          </div>
        </section> 






<br />
<br />
<br />
<br />
<br />






<Footer />
<br />

        

    </div>
  )
}

export default HomeDark
