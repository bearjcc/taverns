// ============================================================================
// Language: JavaScript React
// Path: src\Login.jsx
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import React from "react";
import Form from "./Form";

// Create a basic sign in form for React.
// Allow for the option to sign up if the user does not have an account
// Allow for Google, Facebook, and Twitter sign in
export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			signup: false,
		};
	}

	// Handle the change of the username
	handleUsernameChange = (event) => {
		this.setState({
			username: event.target.value,
		});
	};

	// Handle the change of the password
	handlePasswordChange = (event) => {
		this.setState({
			password: event.target.value,
		});
	};

	// Handle the submission of the form
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.handleSubmit(this.state);
		this.setState({
			username: "",
			password: "",
		});
	};

	// Handle the sign up button
	handleSignup = (event) => {
		event.preventDefault();
		this.setState({
			signup: true,
		});
	};

	// Handle the sign in button
	handleSignin = (event) => {
		event.preventDefault();
		this.setState({
			signup: false,
		});
	};

	// Handle the sign out button
	handleSignout = (event) => {
		event.preventDefault();
		this.props.handleSignout();
	};

	// Handle the Continue with Google button
	handleContinueWithGoogle = (event) => {
		event.preventDefault();
		this.props.handleContinueWithGoogle();
	};

	// Handle the Continue with Facebook button
	handleContinueWithFacebook = (event) => {
		event.preventDefault();
		this.props.handleContinueWithFacebook();
	};

	// Handle the Continue with Twitter button
	handleContinueWithTwitter = (event) => {
		event.preventDefault();
		this.props.handleContinueWithTwitter();
	};

	render() {
		return (
			<div className="container">
				{!this.props.signedIn && (
					// Only show the sign in form if the user is not signed in
					<Signin />
				)}
				{this.props.signedIn && (
					// Only show the sign out button if the user is signed in
					<Signout />
				)}
				{this.state.signup ? (
					<Form handleSubmit={this.handleSubmit} />
				) : (
					<div />
				)}
			</div>
		);
	}
}

class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			signup: false,
		};
	}
	
	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="username">
							Username
						</label>
						<input
							type="text"
							className="form-control"
							id="username"
							value={this.state.username}
							onChange={this.handleUsernameChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							value={this.state.password}
							onChange={this.handlePasswordChange}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
					<button
						type="button"
						className="btn btn-secondary"
						onClick={this.handleSignup}
					>
						Sign Up
					</button>
					<button
						type="button"
						className="btn btn-secondary"
						onClick={this.handleSignin}
					>
						Sign In
					</button>
				</form>
				<GoogleSignin />
				<FacebookSignin />
				<TwitterSignin />
			</div>
		);
	}
}

class Signout extends React.Component {
	render() {
		return(
			<div>
				<button
					type="button"
					className="btn btn-secondary"
					onClick={this.handleSignout}
				>
					Sign Out
				</button>
			</div>
		);
	}
}

class GoogleSignin extends React.Component {
	render() {
		return(
			<div>
				<button
					type="button"
					className="btn btn-secondary"
					onClick={this.handleContinueWithGoogle}
				>
					Continue with Google
				</button>
			</div>
		);
	}
}

class FacebookSignin extends React.Component {
	render() {
		return(
			<div>
				<button
					type="button"
					className="btn btn-secondary"
					onClick={this.handleContinueWithFacebook}
				>
					Continue with Facebook
				</button>
			</div>
		);
	}
}

class TwitterSignin extends React.Component {
	render() {
		return(
			<div>
				<button
					type="button"
					className="btn btn-secondary"
					onClick={this.handleContinueWithTwitter}
				>
					Continue with Twitter
				</button>
			</div>
		);
	}
}
