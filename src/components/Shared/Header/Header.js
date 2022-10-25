import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../../assets/skill.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const [mood, setMood] = useState(true);
    const { user, logOut } = useContext(AuthContext);

    const handleMood = () => {
        setMood(!mood);
    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <Link to='/' className='text-decoration-none text-warning'>Grow Your Skill</Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='me-lg-3 text-decoration-none text-light' to='/courses'>Courses</Link>
                            <Link className='me-lg-3 text-decoration-none text-light' to='/courses'>FAQ</Link>
                            <Link className='me-lg-3 text-decoration-none text-light' to='/blog'>Blog</Link>
                            {
                                mood ?
                                    <Button onClick={handleMood} variant="light">Light mood</Button>
                                    : <Button onClick={handleMood} variant="dark">Dark mood</Button>
                            }
                        </Nav>
                        <Nav>
                            {
                                user?.uid ?
                                    <Button onClick={handleLogOut} variant="light">Logout</Button>
                                    : <Link to='/login'><Button variant="primary">Login</Button></Link>

                            }
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;