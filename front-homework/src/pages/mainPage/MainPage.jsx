import React from 'react';
import { Col, Row, Container, Image, Button } from 'react-bootstrap'


import './css/MainPage.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function MainPage() {
    const Buy = function () {
        alert('You bought THIS!');
    };

    return (
        <>
            <Header />
            <main className='bg-dark main pb-3 pt-3 p-0'>
                <Container className='container border border-3 border-primary'>
                <h1>Welcome to THIS Shop</h1>
                <p className='start_text'>Look at our best products:</p>
                        <Row className='row'>
                            <Col xs={12} md={6} className='p-1 mb-3'>
                                <div className='bg-light product rounded p-2'>
                                    <div className="product__image">
                                        <Image className='image' src='img/Product.jpg' alt='Bad-connection' rounded></Image>
                                    </div>
                                    <div className="product__description mt-2 mb-2">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde corrupti consequuntur aut error dolores magni incidunt! Temporibus maiores esse incidunt eos ducimus quis pariatur, minima nam totam at sequi?</p>
                                    </div>
                                    <div className='product__buy'>
                                        <p> 300$ </p>
                                        <Button className='button bg-success border border-2 border-primary' onClick={Buy}><p>Buy</p></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className='p-1 mb-3'>
                                <div className='bg-light product rounded p-2'>
                                    <div className="product__image">
                                        <Image className='image' src='img/Product.jpg' alt='Bad-connection' rounded></Image>
                                    </div>
                                    <div className="product__description mt-2 mb-2">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde corrupti consequuntur aut error dolores magni incidunt! Temporibus maiores esse incidunt eos ducimus quis pariatur, minima nam totam at sequi?</p>
                                    </div>
                                    <div className='product__buy'>
                                        <p> 300$ </p>
                                        <Button className='button bg-success border border-2 border-primary' onClick={Buy}>Buy</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='row'>
                            <Col xs={12} md={6} className='p-1 mb-3'>
                                <div className='bg-light product rounded p-2'>
                                    <div className="product__image">
                                        <Image className='image' src='img/Product.jpg' alt='Bad-connection' rounded></Image>
                                    </div>
                                    <div className="product__description mt-2 mb-2">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde corrupti consequuntur aut error dolores magni incidunt! Temporibus maiores esse incidunt eos ducimus quis pariatur, minima nam totam at sequi?</p>
                                    </div>
                                    <div className='product__buy'>
                                        <p> 300$ </p>
                                        <Button className='button bg-success border border-2 border-primary' onClick={Buy}>Buy</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className='p-1 mb-3'>
                                <div className='bg-light product rounded p-2'>
                                    <div className="product__image">
                                        <Image className='image' src='img/Product.jpg' alt='Bad-connection' rounded></Image>
                                    </div>
                                    <div className="product__description mt-2 mb-2">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde corrupti consequuntur aut error dolores magni incidunt! Temporibus maiores esse incidunt eos ducimus quis pariatur, minima nam totam at sequi?</p>
                                    </div>
                                    <div className='product__buy'>
                                        <p> 300$ </p>
                                        <Button className='button bg-success border border-2 border-primary' onClick={Buy}>Buy</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='row'>
                            <Col xs={12} md={6} className='p-1 mb-3'>
                                <div className='bg-light product rounded p-2'>
                                    <div className="product__image">
                                        <Image className='image' src='img/Product.jpg' alt='Bad-connection' rounded></Image>
                                    </div>
                                    <div className="product__description mt-2 mb-2">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde corrupti consequuntur aut error dolores magni incidunt! Temporibus maiores esse incidunt eos ducimus quis pariatur, minima nam totam at sequi?</p>
                                    </div>
                                    <div className='product__buy'>
                                        <p> 300$ </p>
                                        <Button className='button bg-success border border-2 border-primary' onClick={Buy}>Buy</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className='p-1 mb-3'>
                                <div className='bg-light product rounded p-2'>
                                    <div className="product__image">
                                        <Image className='image' src='img/Product.jpg' alt='Bad-connection' rounded></Image>
                                    </div>
                                    <div className="product__description mt-2 mb-2">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde corrupti consequuntur aut error dolores magni incidunt! Temporibus maiores esse incidunt eos ducimus quis pariatur, minima nam totam at sequi?</p>
                                    </div>
                                    <div className='product__buy'>
                                        <p> 300$ </p>
                                        <Button className='button bg-success border border-2 border-primary' onClick={Buy}>Buy</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='row'>
                            <Col xs={12} md={6} className='p-1 mb-3'>
                                <div className='bg-light product rounded p-2'>
                                    <div className="product__image">
                                        <Image className='image' src='img/Product.jpg' alt='Bad-connection' rounded></Image>
                                    </div>
                                    <div className="product__description mt-2 mb-2">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde corrupti consequuntur aut error dolores magni incidunt! Temporibus maiores esse incidunt eos ducimus quis pariatur, minima nam totam at sequi?</p>
                                    </div>
                                    <div className='product__buy'>
                                        <p> 300$ </p>
                                        <Button className='button bg-success border border-2 border-primary' onClick={Buy}>Buy</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className='p-1 mb-3'>
                                <div className='bg-light product rounded p-2'>
                                    <div className="product__image">
                                        <Image className='image' src='img/Product.jpg' alt='Bad-connection' rounded></Image>
                                    </div>
                                    <div className="product__description mt-2 mb-2">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde corrupti consequuntur aut error dolores magni incidunt! Temporibus maiores esse incidunt eos ducimus quis pariatur, minima nam totam at sequi?</p>
                                    </div>
                                    <div className='product__buy'>
                                        <p> 300$ </p>
                                        <Button className='button bg-success border border-2 border-primary' onClick={Buy}>Buy</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='row'>
                            <Col xs={12} md={6} className='p-1 mb-3'>
                                <div className='bg-light product rounded p-2'>
                                    <div className="product__image">
                                        <Image className='image' src='img/Product.jpg' alt='Bad-connection' rounded></Image>
                                    </div>
                                    <div className="product__description mt-2 mb-2">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde corrupti consequuntur aut error dolores magni incidunt! Temporibus maiores esse incidunt eos ducimus quis pariatur, minima nam totam at sequi?</p>
                                    </div>
                                    <div className='product__buy'>
                                        <p> 300$ </p>
                                        <Button className='button bg-success border border-2 border-primary' onClick={Buy}>Buy</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className='p-1'>
                                <div className='bg-light product rounded p-2'>
                                    <div className="product__image">
                                        <Image className='image' src='img/Product.jpg' alt='Bad-connection' rounded></Image>
                                    </div>
                                    <div className="product__description mt-2 mb-2">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde corrupti consequuntur aut error dolores magni incidunt! Temporibus maiores esse incidunt eos ducimus quis pariatur, minima nam totam at sequi?</p>
                                    </div>
                                    <div className='product__buy'>
                                        <p> 300$ </p>
                                        <Button className='button bg-success border border-2 border-primary' onClick={Buy}>Buy</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default MainPage
