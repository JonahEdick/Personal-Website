'use client';
import NavigationBar from "@/components/NavigationBar";
import { Component } from "react";
import '../../styling/styles.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class Tbd extends Component {

    render() {
        return (
            <div>
                <NavigationBar />
                <h1>Test Tbd</h1>
                <p>This is a test for the home page</p>
            </div>
        );
    }
}

export default Tbd;