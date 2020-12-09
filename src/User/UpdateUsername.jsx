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
			email: '',
			uname: ''
		};
	}

	componentDidMount() {
		if (localStorage.getItem('token')) {
			let formData = new FormData();
			axios
				.post('https://parthshah.pythonanywhere.com/api/account/properties', formData, {
					headers: {
						Authorization: 'Token ' + localStorage.getItem('token')
					}
				})
				.then((response) => {
					if (response.status === 200) {
						this.setState({
							email: response.data['email'],
							uname: response.data['username']
						});
					} else {
						alert('Please try again..!');
						this.props.history.push('/logout');
					}
				})
				.catch((errors) => {
					alert('Please try again..!');
					this.props.history.push('/logout');
				});
		} else {
			this.props.history.push('/logout');
		}
	}

	handleInputChange = (event) => {
		const { value, name } = event.target;
		this.setState({
			[name]: value
		});
	};

	onSubmit = (event) => {
		event.preventDefault();
		if (this.state.uname) {
			let formData = new FormData();
			formData.append('email', this.state.email);
			formData.append('username', this.state.uname);
			axios
				.put('https://parthshah.pythonanywhere.com/api/account/properties/update', formData, {
					headers: {
						Authorization: 'Token ' + localStorage.getItem('token')
					}
				})
				.then((response) => {
					if (response.status === 200) {
						console.log(response.data);
						if (response.data['response'] === 'Account update success') {
							alert('Account update success');
							this.props.history.push('/UserHome');
						} else {
							alert('Please try again..!!');
						}
					} else {
						const error = new Error(response.error);
						throw error;
					}
				})
				.catch((errors) => {
					alert('Please try again');
					console.log(errors);
				});
		} else {
			alert('Please enter username..!!');
		}
	};

	render() {
		return (
			<Fragment>
				{/*<Navbar />*/}
				<div className="Login-component">
					<div className="account-pages0"> 
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
													Update Username
												</h4>
												
											</div>
											<br />
											<form onSubmit={this.onSubmit}>
												<div className="form-group">
													<label htmlFor="uname">Enter new Username</label>
													<input
														className="form-control"
														type="text"
														name="uname"
														value={this.state.uname}
														onChange={this.handleInputChange}
														placeholder="Enter new username"
													/>
													<br/>
												</div>
												<br />
												<div className="form-group mb-0 text-center">
													<button className="btn btn-danger" type="submit" name="submit">
														Update Username
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
