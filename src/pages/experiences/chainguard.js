'use client';
import NavigationBar from "@/components/NavigationBar";
import { Component } from "react";
import '../../styling/styles.css';
import ChainguardContent from "@/components/companies/ChainguardContent";

class Chainguard extends Component {

    render() {
        return (
            <div>
                <NavigationBar />
                <ChainguardContent />
            </div>
        );
    }
}

export default Chainguard;