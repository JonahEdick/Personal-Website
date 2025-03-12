'use client'

import { Container } from "postcss";
import { Component } from "react"
import { Col } from "react-bootstrap";

class PositionContent extends Component {

    constructor(props){
        super(props);
        this.title = props.title;
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col
                    xs = {12}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingBottom: "50px"
                    }}
                    >
                        <div>
                            Position
                            Title
                        </div>
                    </Col>
                    <Col>
                        <div>
                            {this.title}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}