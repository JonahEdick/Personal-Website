'use client';
import NavigationBar from "@/components/NavigationBar";
import { Component } from "react";
import '../../styling/styles.css';
import VuzixContent from "@/components/companies/VuzixContent";

class Vuzix extends Component {

    render() {
        return (
            <div>
                <NavigationBar/>
                <VuzixContent/>
            </div>
        );
    }
}

export default Vuzix;