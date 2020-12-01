import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function BareNavigation(){

    return (

<Navbar bg="light" expand="sm">
           
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer to="/" exact>
                <Nav.Link >Accueil</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/a-propos">
                <Nav.Link >À propos </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/liste-articles">
                <Nav.Link >Articles </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/jeu_de_dragon">
                <Nav.Link >Jeu de dragons  </Nav.Link>
                </LinkContainer>
           </Nav>
               
    </Navbar.Collapse>
</Navbar>
    )
}

export default BareNavigation;