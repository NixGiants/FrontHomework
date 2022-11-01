import React from 'react';

import './css/PaginationPage.css';
import './scripts/PaginationPage.js';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function PaginationPage() {

    return (
        <>
            <Header />
                <div class="container">
                <h1 class="title">Pagination</h1>
                <div class="posts"></div>
                <div class="pagination"></div>
                </div>
            <Footer />
        </>
    )
}

export default PaginationPage
