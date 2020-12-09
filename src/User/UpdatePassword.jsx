import React, { Fragment, Component } from 'react';
import '../User/login.css';
import Logo from "./mainlogo.png";
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import Navbar from '../Navbar1';
import axios from 'axios';

export default class Forget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			opass: '',
			npass: '',
			npass1: ''
		};
	}

	handleInputChange = (event) => {
		const { value, name } = event.target;
		this.setState({
			[name]: value
		});
	};

	onSubmit = (event) => {
		event.preventDefault();
		if (!this.state.opass) alert('Please enter old password');
		else if (!this.state.npass || !this.state.npass1) alert('Please enter new Password');
		else if (this.state.npass !== this.state.npass1) alert('Password not match..!!');
		else {
			let formData = new FormData();
			formData.append('old_password', this.state.opass);
			formData.append('new_password', this.state.npass);
			formData.append('confirm_new_password', this.state.npass1);
			axios
				.put('https://parthshah.pythonanywhere.com/api/account/change_password/', formData, {
					headers: {
						Authorization: 'Token ' + localStorage.getItem('token')
					}
				})
				.then((response) => {
					if (response.status === 200) {
						console.log(response.data);
						if (response.data['response'] === 'successfully changed password') {
							alert('successfully changed password');
							this.props.history.push('/logout');
						} else if (response.data['old_password'] === 'Wrong password.') {
							alert('Wrong password.');
						} else {
							alert('Please try again..!!');
						}
					} else if (response.status === 400) {
						if (response.data['old_password'] === 'Wrong password.') {
							alert('Wrong password.');
						} else {
							alert('Please try again..!!');
						}
					} else {
						const error = new Error(response.error);
						throw error;
					}
				})
				.catch((errors) => {
					alert('Wrong password.');
					console.log(errors);
				});
		}
	};

	render() {
		return (
			<Fragment>
				{/*<Navbar />*/}
				<div className="Login-component">
					<div className="account-pages1">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-lg-5">
									<div className="card">
										<div className="card-header pt-4 pb-4 text-center bg-primary">
										<NavLink to="/userhome">
											<img src={Logo} alt="" height="80" />
										</NavLink>
										</div>
										<div className="card-body p-4">
											<div className="text-center w-75 m-auto">
												<h4 className="text-dark-50 text-center mt-0 font-weight-bold">
													Update Password
												</h4>
												<br/>
											</div>
											<form onSubmit={this.onSubmit}>
												<div className="form-group">
													<label htmlFor="opass">Enter Old Password</label>
													<input
														className="form-control"
														type="password"
														name="opass"
														value={this.state.opass}
														onChange={this.handleInputChange}
														placeholder="Enter Old Password"
													/>
													<br/>
												</div>
												<div className="form-group">
													<label htmlFor="npass">Enter New Password</label>
													<input
														className="form-control"
														type="password"
														name="npass"
														value={this.state.npass}
														onChange={this.handleInputChange}
														placeholder="Enter New Password"
													/>
													<br/>
												</div>

												<div className="form-group">
													<label htmlFor="npass1">Confirm new Password</label>
													<input
														className="form-control"
														type="password"
														name="npass1"
														value={this.state.npass1}
														onChange={this.handleInputChange}
														placeholder="Confirm new Password"
													/>
												</div>
												<br />
												<div className="form-group mb-0 text-center">
													<button className="btn btn-danger" type="submit" name="submit">
														Update Password
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
