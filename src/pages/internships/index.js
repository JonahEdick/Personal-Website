'use client';
import NavigationBar from "@/components/NavigationBar";
import { Component } from "react";
import '../../styling/globals.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class Internships extends Component {

    render() {
        return (
            <div>
                <NavigationBar />
                <h1>Test Internships</h1>
                <p>This is a test for the home page</p>
            </div>
        );
    }
}

export default Internships;