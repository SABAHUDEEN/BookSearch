// About.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from './About.module.css';

const About = () => {
    const navigate = useNavigate();
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

            <div className={styles.aboutbody}>
                <section id={styles.aboutUs}>
                    <div className={styles.image}>
                        <img src="./images/about.jpg" alt="library" loading="lazy" />
                    </div>
                    <div className={styles.content}>
                        <h2>About Us</h2>
                        <h4>"I have always imagined that Paradise will be a kind of library"</h4>
                        <p className={styles.description}>
                            A library is a collection of sources of information and similar resources, made accessible to a defined community for reference or borrowing. It provides physical or digital access to material and may be a physical building or room, or a virtual space, or both. A library's collection can include books, periodicals, newspapers, manuscripts, films, maps, prints, documents, microform, CDs, cassettes, videotapes, DVDs, Blu-ray Discs, e-books, audiobooks, databases, and other formats. Libraries range in size from a few shelves of books to several million items. Sidney Sheldon perfectly describes: “Libraries store the energy that fuels the imagination. They open up windows to the world and inspire us to explore and achieve, and contribute to improving our quality of life.”
                        </p>
                        <button className={styles.btn}>More</button>
                    </div>
                </section>
            </div>
        </>
    );
}

export default About;
