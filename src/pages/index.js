'use client';
import { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import '../styling/styles.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContentPage from "@/components/CompanyContent";
import {Container, Row, Col} from 'react-bootstrap';

class Home extends Component {

    render() {
        return (
            <div>
                <NavigationBar/>
                <Container
                    fluid="md"
                    style={{
                        paddingBottom: "50px",
                        paddingLeft: "50px",
                        paddingRight: "50px"
                    }}
                >
                <Row>
                    <Col
                    xs={12}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingBottom: "50px",
                        minHeight: "300px"
                    }}
                    >
                        <p
                            style={{
                                fontSize: "10vw",
                                color: "#D3BC8D"
                            }}
                        >
                            Welcome!
                        </p>
                    </Col>
                    <Col
                    xs={12}
                    md={6}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "top",
                        paddingBottom: "50px"
                    }}
                    >
                        <p
                            style={{
                                color: "#D3BC8D"
                            }}
                        >
                            My Name is Jonah C. Edick. I am a up and coming software Engineer and this is where you can find
                            out about me! 
                        </p>
                    </Col>
                    <Col
                    xs={12}
                    md={6}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "top",
                        paddingBottom: "50px"
                    }}
                    >
                        <p
                            style={{
                                color: "#D3BC8D"
                            }}
                        >
                            This website is currently a work in progress so if you have any questions about any of my experiences, projects, or
                            are interested in me, please feel free to email me at jonah.edick@gmail.com! 
                        </p>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}

export default Home;