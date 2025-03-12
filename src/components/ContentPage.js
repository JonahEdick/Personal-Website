'use client'

import { Component } from "react";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Logo from "../../public/logo.svg?react";
import Image from 'next/image';

class ContentPage extends Component {
    compLogo = Logo;
    compInfo = `
    Lorem ipsum odor amet, consectetuer adipiscing elit.
    Ex euismod ultricies hendrerit leo malesuada finibus ipsum sapien vivamus.
    Inceptos cubilia sed sem pulvinar commodo commodo malesuada urna.
    Pharetra eros etiam ut; placerat ad mus.
    Felis faucibus diam natoque dictum interdum habitasse aenean aliquet.
    Egestas commodo conubia faucibus dictumst tristique nisl ullamcorper tortor eget.
    Sem parturient himenaeos natoque magna ex neque.
    Ipsum scelerisque erat consequat metus massa a cras.`
    jobDesc = ``
    technologies = [];

    render()  {
        return (
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
                            paddingBottom: "50px"
                        }}
                    >
                        <Image 
                            src={this.compLogo}
                            alt="Company Logo"
                            style={{
                                width: "auto",
                                height: "auto",
                                maxHeight: "125px",
                            }}
                        />
                    </Col>
                    <Col
                        xs={12}
                        md={6}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "top",
                            paddingBottom: "50px",
                        }}
                    >
                        <Col>
                            <div>
                                {this.compInfo}
                            </div>
                        </Col>
                    </Col>
                    <Col
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "top",
                            paddingBottom: "50px",
                        }}
                        xs={12}
                        md={6}
                    >
                        <div>
                            {this.jobDesc}
                        </div>
                    </Col>
                    <Col
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        xs={12}
                    >
                        <Container
                            fluid="md"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Row
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <Col
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        paddingBottom: "25px",
                                    }}
                                    xs={12}
                                >
                                    Relevant Technologies
                                </Col>
                                {this.technologies.map((number, index) => (
                                    <Col
                                        md={2}
                                        xs={6}
                                        
                                    >
                                        <Image
                                            src={this.technologies[index]}
                                            alt="Technology Logo"
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ContentPage;