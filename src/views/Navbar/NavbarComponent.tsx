import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

class NavbarComponent extends React.Component {
    render() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary"  data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">ReactApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="todo">Todo</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavbarComponent

