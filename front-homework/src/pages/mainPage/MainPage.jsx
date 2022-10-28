import React from 'react';
import {Col, Row, Container} from 'react-bootstrap'


import './css/MainPage.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function MainPage() {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Row>
                        <Col sm={8} className='bg-light border border-primary rounded border-5 pg-3 mt-3'>sm=8</Col>
                        <Col sm={4} className='bg-light '>sm=4</Col>
                    </Row>
                    <Row>
                        <Col sm className='bg-light '>sm=true</Col>
                        <Col sm className='bg-light '>sm=true</Col>
                        <Col sm className='bg-light '>sm=true</Col>
                    </Row>
                </Container>
                <article>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae quos adipisci fugiat enim cupiditate quibusdam a dignissimos ipsam sunt ratione in vel necessitatibus, ut quas sapiente reprehenderit sed magnam.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae quos adipisci fugiat enim cupiditate quibusdam a dignissimos ipsam sunt ratione in vel necessitatibus, ut quas sapiente reprehenderit sed magnam.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae quos adipisci fugiat enim cupiditate quibusdam a dignissimos ipsam sunt ratione in vel necessitatibus, ut quas sapiente reprehenderit sed magnam.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae quos adipisci fugiat enim cupiditate quibusdam a dignissimos ipsam sunt ratione in vel necessitatibus, ut quas sapiente reprehenderit sed magnam.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae quos adipisci fugiat enim cupiditate quibusdam a dignissimos ipsam sunt ratione in vel necessitatibus, ut quas sapiente reprehenderit sed magnam.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae quos adipisci fugiat enim cupiditate quibusdam a dignissimos ipsam sunt ratione in vel necessitatibus, ut quas sapiente reprehenderit sed magnam.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae quos adipisci fugiat enim cupiditate quibusdam a dignissimos ipsam sunt ratione in vel necessitatibus, ut quas sapiente reprehenderit sed magnam.</p>
                    </div><div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae quos adipisci fugiat enim cupiditate quibusdam a dignissimos ipsam sunt ratione in vel necessitatibus, ut quas sapiente reprehenderit sed magnam.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae quos adipisci fugiat enim cupiditate quibusdam a dignissimos ipsam sunt ratione in vel necessitatibus, ut quas sapiente reprehenderit sed magnam.</p>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    )
}

export default MainPage
