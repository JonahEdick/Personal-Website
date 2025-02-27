'use client';
import NavigationBar from "@/components/NavigationBar";
import { Component } from "react";
import '../../styling/styles.css';

class Vuzix extends Component {

    render() {
        return (
            <div>
                <NavigationBar />
                <h1>Test Vuzix</h1>
                <p>This is a test for the home page</p>
            </div>
        );
    }
}

export default Vuzix;