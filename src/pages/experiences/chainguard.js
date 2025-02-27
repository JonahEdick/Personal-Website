'use client';
import NavigationBar from "@/components/NavigationBar";
import { Component } from "react";
import '../../styling/styles.css';

class Chainguard extends Component {

    render() {
        return (
            <div>
                <NavigationBar />
                <h1>Test Chainguard</h1>
                <p>This is a test for the home page</p>
            </div>
        );
    }
}

export default Chainguard;