'use client';
import { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import '../styling/styles.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Home extends Component {

    render() {
        return (
            <div>
                <NavigationBar />
                <h1>Test Home</h1>
                <p>This is a test for the home page</p>
            </div>
        );
    }
}

export default Home;