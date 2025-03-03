'use client';
import { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import '../styling/styles.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContentPage from "@/components/ContentPage";

class Home extends Component {

    render() {
        return (
            <div>
                <NavigationBar/>
                <ContentPage/>
            </div>
        );
    }
}

export default Home;