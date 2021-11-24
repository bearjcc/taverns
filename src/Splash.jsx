// ============================================================================
// Language: Javascript React
// Path: src\Splash.jsx
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import React from 'react';

//Create a basic splash screen for React.
//Scrolling down will remove the splash screen and show the main app.

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSplash: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showSplash: false
            });
        }, 3000);
    }

    render() {
        return (
            <div className="splash">
                <div className="splash-content">
                    <h1>Taverns and Treasures</h1>
                    <p>An open world text based skilling RPG</p>
                </div>
            </div>
        );
    }
}