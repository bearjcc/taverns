// ============================================================================
// Language: Javascript React
// Path: src\App.jsx
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Login from './Login';
import Splash from './Splash';
import Sidebar from './Sidebar';

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <Splash />
                <Login />
                <Sidebar />
            </div>
        );
    }
}

export default App;