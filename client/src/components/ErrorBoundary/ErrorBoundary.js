import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({ error: true })
    }

    render() {
        if (this.state.error) return <p>Something goes wrong...</p>;

        return this.props.children
    }
}

export default ErrorBoundary;
