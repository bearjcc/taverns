// ============================================================================
// Language: JavaScript React
// Path: src\Account.jsx
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import React from "react";

// Make a React based page to show the account information
export default class Account extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			email: "",
			firstName: "",
			lastName: "",
			accountCreationDate: "",
			membershipStatus: "",
			accountBalance: "",
		};
	}

	componentDidMount() {
		this.setState({
			username: this.props.username,
			password: this.props.password,
			email: this.props.email,
			firstName: this.props.firstName,
			lastName: this.props.lastName,
			accountCreationDate: this.props.accountCreationDate,
			membershipStatus: this.props.membershipStatus,
			accountBalance: this.props.accountBalance,
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1>Account Information</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title">Account Information</h3>
							</div>
							<div className="panel-body">
								<div className="row">
									<div className="col-md-12">
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label htmlFor="username">Username</label>
													<input
														type="text"
														className="form-control"
														id="username"
														value={this.state.username}
														readOnly
													/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label htmlFor="password">Password</label>
													<input
														type="text"
														className="form-control"
														id="password"
														value={this.state.password}
														readOnly
													/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label htmlFor="email">Email</label>
													<input
														type="text"
														className="form-control"
														id="email"
														value={this.state.email}
														readOnly
													/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label htmlFor="firstName">First Name</label>
													<input
														type="text"
														className="form-control"
														id="firstName"
														value={this.state.firstName}
														readOnly
													/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label htmlFor="lastName">Last Name</label>
													<input
														type="text"
														className="form-control"
														id="lastName"
														value={this.state.lastName}
														readOnly
													/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label htmlFor="accountCreationDate">
														Account Creation Date
													</label>
													<input
														type="text"
														className="form-control"
														id="accountCreationDate"
														value={this.state.accountCreationDate}
														readOnly
													/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label htmlFor="membershipStatus">
														Membership Status
													</label>
													<input
														type="text"
														className="form-control"
														id="membershipStatus"
														value={this.state.membershipStatus}
														readOnly
													/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label htmlFor="accountBalance">
														Account Balance
													</label>
													<input
														type="text"
														className="form-control"
														id="accountBalance"
														value={this.state.accountBalance}
														readOnly
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
