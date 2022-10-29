import React from 'react'
import './css/Header.css';

function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">E-shop</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Main page
                                    <span class="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Categories</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Hot sales</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sign in</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-sm-2 search_input" type="text" placeholder="Search" />
                            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
