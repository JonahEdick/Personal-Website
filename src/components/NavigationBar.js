'use client';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../public/logo.svg?react";
import Toggler from "../../public/toggler.svg?react"
import Image from 'next/image';
class NavigationBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            internDropdown: false,
        };
        if(typeof window !== "undefined"){
            window.addEventListener("resize", this.handleResize)
        }   
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
            <Navbar expand="lg" className="NavigationBar" sticky='top' variant='dark'>
                <Container>
                    <Navbar.Brand href="/" className='Brand'>
                    <Image
                        src={Logo}
                        height={75}
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={() => {this.expanded()}}
                        style={{border: "#D3BC8D"}}
                    >
                        <Image 
                            src={Toggler}
                            height={50}
                        />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="me-auto"
                    >
                        <Nav.Link 
                            href="/about"
                            className="NavLink"
                        >
                            About
                        </Nav.Link>
                        <NavDropdown
                            title={
                                <text className="NavLink">Experiences</text>
                            }
                            id="basic-nav-dropdown"
                            show={this.state.internDropdown}
                            onMouseEnter={() => {this.interact(true)}}
                            onMouseLeave={() => {this.interact(false)}}
                            onClick={() => {this.goto("/experiences")}}
                            menuVariant='dark'
                        >
                            <Nav.Link
                            href="/experiences/chainguard"
                            className="NavLink"
                            >
                                Chainguard
                            </Nav.Link>
                            <Nav.Link
                            href="/experiences/luminous"
                            className="NavLink"
                            >
                                Luminous Psychiatric
                            </Nav.Link>
                            <Nav.Link
                            href="/experiences/eoptic"
                            className="NavLink"
                            >
                                EOPTIC Inc.
                            </Nav.Link>
                        </NavDropdown>
                        <NavDropdown
                            title={
                                <text className="NavLink">Projects</text>
                            }
                            id="basic-nav-dropdown"
                            show={this.state.internDropdown}
                            onMouseEnter={() => {this.interact(true)}}
                            onMouseLeave={() => {this.interact(false)}}
                            onClick={() => {this.goto("/projects")}}
                            menuVariant='dark'
                        >
                            <Nav.Link
                            href="/projects/tbd"
                            className="NavLink"
                            >
                                TBD Game Studios
                            </Nav.Link>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavigationBar;