import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error,info) {
		// if there are any errors, trigger render h1 tag
		this.setState({hasError: true})
	}

	render() {
		if (this.state.hasError) {
			return <h1>Oops. Something went wrong.</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary;