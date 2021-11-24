// ============================================================================
// Language: Javascript React
// Path: src\Encyclopedia.jsx
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import React from 'react';

export default class Encyclopedia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        search: '',
        results: [],
        };
    }
    
    componentDidMount() {
        this.setState({
        results: this.props.results,
        });
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
        results: nextProps.results,
        });
    }
    
    render() {
        const { results } = this.state;
        const { search } = this.state;
        return (
        <div className="encyclopedia">
            <div className="encyclopedia-search">
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => {
                this.setState({
                    search: e.target.value,
                });
                }}
            />
            </div>
            <div className="encyclopedia-results">
            {results.map((result) => {
                return (
                <div className="encyclopedia-result" key={result.id}>
                    <div className="encyclopedia-result-title">
                    {result.title}
                    </div>
                    <div className="encyclopedia-result-description">
                    {result.description}
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        );
    }
}

class EncyclopediaSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        search: '',
        results: [],
        };
    }

    componentDidMount() {
        this.setState({
        results: this.props.results,
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
        results: nextProps.results,
        });
    }

    render() {
        const { results } = this.state;
        const { search } = this.state;
        return (
        <div className="encyclopedia">
            <div className="encyclopedia-search">
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => {
                this.setState({
                    search: e.target.value,
                });
                }}
            />
            </div>
            <div className="encyclopedia-results">
            {results.map((result) => {
                return (
                <div className="encyclopedia-result" key={result.id}>
                    <div className="encyclopedia-result-title">
                    {result.title}
                    </div>
                    <div className="encyclopedia-result-description">
                    {result.description}
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        );
    }
}

class EncyclopediaResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        search: '',
        results: [],
        };
    }

    componentDidMount() {
        this.setState({
        results: this.props.results,
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
        results: nextProps.results,
        });
    }

    render() {
        const { results } = this.state;
        const { search } = this.state;
        return (
        <div className="encyclopedia">
            <div className="encyclopedia-search">
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => {
                this.setState({
                    search: e.target.value,
                });
                }}
            />
            </div>
            <div className="encyclopedia-results">
            {results.map((result) => {
                return (
                <div className="encyclopedia-result" key={result.id}>
                    <div className="encyclopedia-result-title">
                    {result.title}
                    </div>
                    <div className="encyclopedia-result-description">
                    {result.description}
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        );
    }
}

class EncyclopediaEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        search: '',
        results: [],
        };
    }

    componentDidMount() {
        this.setState({
        results: this.props.results,
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
        results: nextProps.results,
        });
    }

    render() {
        const { results } = this.state;
        const { search } = this.state;
        return (
        <div className="encyclopedia">
            <div className="encyclopedia-search">
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => {
                this.setState({
                    search: e.target.value,
                });
                }}
            />
            </div>
            <div className="encyclopedia-results">
            {results.map((result) => {
                return (
                <div className="encyclopedia-result" key={result.id}>
                    <div className="encyclopedia-result-title">
                    {result.title}
                    </div>
                    <div className="encyclopedia-result-description">
                    {result.description}
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        );
    }
}

