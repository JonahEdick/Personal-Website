import React, {Component} from 'react';
import {Text, Container, Button, Row, Col} from 'reactstrap';

class MainPage extends Component{

    constructor(props){
        super(props);
        this.state={
        };
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <h1 style={{textAlign: "center"}}>
                            Jonah C. Edick
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => {console.log("Software Engineering")}}>
                            Software Engineering
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={() => {console.log("Broadcast Engineering")}}>
                            Broadcast Engineering
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={() => {console.log("3D Printing")}}>
                            3D Printing
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MainPage