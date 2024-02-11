import React, { Component } from 'react';
import NavBar from '../Components/navBar';
import HomeContent from '../Components/homeContent';

class HomePage extends Component {

    render() {
        return (
            <>
                <NavBar></NavBar>
                <HomeContent></HomeContent>
            </>
        );
    }
}

export default HomePage;