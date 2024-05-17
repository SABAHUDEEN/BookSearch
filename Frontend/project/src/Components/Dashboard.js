// src/Components/Dashboard.js

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Components/style.module.css';
import 'font-awesome/css/font-awesome.min.css';
import Card from "./Card";
import axios from "axios";
import { Navbar, Nav, Container } from 'react-bootstrap';
import LoadingSpinner from './LoadingSpinner';

const Dashboard = () => {
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const searchBook = (evt) => {
        if (evt.key === "Enter" || evt.type === "click") {
            setLoading(true);
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&key=AIzaSyCzeaijXCjFw4rx_xuk0Eu-FxwYagsXlIg`)
                .then(res => {
                    setBookData(res.data.items);
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                });
        }
    };

    const handleLogout = () => {
        navigate("/"); // Redirect to the login page
        window.close(); // Close all tabs
    };

    return (
        <>
            <Navbar className={styles.navbar} expand="lg">
                <Container>
                    <Navbar.Brand href="#">BookFinder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="nav-link" to="/dashboard">Home</Link>
                            <Link className="nav-link" to="/about" target="_blank">About</Link>
                            <Link className="nav-link" to="/contact" target="_blank">Contact</Link>
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className={styles.header}>
                <div className={styles.row1}>
                    <h1>A room without books is like<br /> a body without a soul.</h1>
                </div>
                <div className={styles.row2}>
                    <h2>Find your book</h2>
                    <div className={styles.search}>
                        <input
                            type="text"
                            placeholder="Enter your book name"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyDown={searchBook} // Changed from onKeyPress to onKeyDown
                        />
                        <button onClick={searchBook}><i className="fa fa-search"></i></button>
                    </div>
                    <img src="./images/bg2.png" alt="background" />
                </div>
            </div>
            <div className={styles.container}>
                {loading && <LoadingSpinner />}
                {!loading && bookData.length > 0 && <Card book={bookData} />}
            </div>
        </>
    );
};

export default Dashboard;
