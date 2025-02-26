'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
class NavigationBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            internDropdown: false,
        };
        window.addEventListener("resize", this.handleResize)
    }

    handleResize = async () => {
        if(window.innerWidth >= 992){
            this.setState({internDropdown: false});
        }else{
            this.setState({internDropdown: true});
        }
    }

    async interact(newState){
        if(window.innerWidth >= 992){
            this.setState({internDropdown: newState});
        }else{
            this.setState({internDropdown: true});
        }
    }

    async goto(url) {
        window.location.href = url;
    }

    async expanded(){
        this.setState({internDropdown: true})
    }

    render(){
        return(
            <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
                <Container>
                    <Navbar.Brand href="/">Jonah C. Edick</Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={() => {this.expanded()}}
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="me-auto"
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown
                            title="Internships"
                            id="basic-nav-dropdown"
                            show={this.state.internDropdown}
                            onMouseEnter={() => {this.interact(true)}}
                            onMouseLeave={() => {this.interact(false)}}
                            onClick={() => {this.goto("/internships")}}
                        >
                            <Nav.Link href="/internships/chainguard">Chainguard</Nav.Link>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavigationBar;