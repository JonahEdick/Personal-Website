'use client';
import NavigationBar from "@/components/NavigationBar";
import { Component } from "react";
import '../../styling/styles.css';

class About extends Component {

    render() {
        return (
            <div>
                <NavigationBar />
                <h1>Test About</h1>
                <p>This is a test for the home page</p>
            </div>
        );
    }
}

export default About;