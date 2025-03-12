'use client';
import NavigationBar from "@/components/NavigationBar";
import { Component } from "react";
import '../../styling/styles.css';
import EopticContent from "@/components/companies/EopticContent";

class Eoptic extends Component {

    render() {
        return (
            <div>
                <NavigationBar />
                <EopticContent/>
            </div>
        );
    }
}

export default Eoptic;