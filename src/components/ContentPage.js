'use client'

import { Component } from "react";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Logo from "../../public/logo.svg?react";
import Image from 'next/image';
import DockerImg from "../../public/technologies/Docker.png?react"
import TerraformImg from "../../public/technologies/Terraform.png?react"
import WolfiImg from "../../public/technologies/Wolfi.png?react"


class ContentPage extends Component {
    compLogo = Logo;
    content = "Lorem ipsum odor amet, consectetuer adipiscing elit. Ex euismod ultricies hendrerit leo malesuada finibus ipsum sapien vivamus. Inceptos cubilia sed sem pulvinar commodo commodo malesuada urna. Pharetra eros etiam ut; placerat ad mus. Felis faucibus diam natoque dictum interdum habitasse aenean aliquet. Egestas commodo conubia faucibus dictumst tristique nisl ullamcorper tortor eget. Sem parturient himenaeos natoque magna ex neque. Ipsum scelerisque erat consequat metus massa a cras.";
    technologies = [];

    render()  {
        return (
            <Container
                fluid="md"
                style={{
                    paddingBottom: "50px"
                }}
            >
                <Row>
                    <Col 
                        xs={12}
                        md={4}
                        lg={3}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image 
                            src={this.compLogo}
                            alt="Company Logo"
                            style={{
                                width: "auto",
                                height: "auto",
                            }}
                        />
                    </Col>
                    <Col
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        xs={12}
                        md={8}
                        lg={6}
                    >
                        <div>
                            {this.content}
                        </div>
                    </Col>
                    <Col
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        xs={12}
                        md={12}
                        lg={3}
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
                                        alignItems: "center"
                                    }}
                                    xs={12}
                                >
                                    Relavent technologies
                                </Col>
                                {this.technologies.map((number, index) => (
                                    <Col
                                        lg={6}
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