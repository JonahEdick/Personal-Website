'use client';
import NavigationBar from "@/components/NavigationBar";
import { Component } from "react";
import '../../styling/styles.css';
import LuminousContent from "@/components/companies/LuminousContent";

class Luminous extends Component {

    render() {
        return (
            <div>
                <NavigationBar />
                <LuminousContent/>
            </div>
        );
    }
}

export default Luminous;