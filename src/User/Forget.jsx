import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../User/login.css';
import Logo1 from './logo1.png';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import Navbar from '../Navbar';
import axios from 'axios';

export default class Forget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			token: '',
			otp: '',
			otp1: '',
			otp2: '',
			pass: '',
			btnName: 'Forget Password',
			v1: true,
			v2: false,
			v3: false
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

		let formData = new FormData();
		formData.append('email', this.state.email);
		axios
			.post('https://parthshah.pythonanywhere.com/api/account/check_if_account_exists/', formData)
			.then((response) => {
				if (response.status === 200) {
					if (response.data['response'] === 'Account does not exist') {
						alert('Account does not exist');
					} else {
						localStorage.setItem('ftoken', response.data['token']);
						this.props.history.push('/forget1');
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
										<div className="card-body p-4">
											<div className="mb-3 d-flex justify-content-center">
											<NavLink to="/">
												<img src={Logo1} alt="" height="80" />
												</NavLink>
											</div>
											<hr className="mx-5 px-5 mb-3 text-center"/>
											<div className="text-center w-75 m-auto">
												<h4 className="text-dark-50 text-center mt-0 font-weight-bold">
													Forget Password
												</h4>
												
												<h5>
													<br/>Please verify your email address.<vr/>
												</h5>
											</div>
											<form onSubmit={this.onSubmit}>
												<div className="form-group mt-3">
													<label htmlFor="email" class="ml-5 px-1">Email address</label><br/>
													<i class="fas fa-user fa-2x"></i>
													<input
														className="form-control d-inline w-75 ml-4"
														type="email"
														name="email"
														value={this.state.email}
														onChange={this.handleInputChange}
														placeholder="Enter your email"
													/>
												</div>
												<br />
												<div className="form-group mb-0 text-center">
													
													<button className="explore_btn1" type="submit" name="submit" style={{marginBottom:'10px'}}>
														Check Email
													</button>
													&nbsp;
													<NavLink to="/">
														<button className="explore_btn0">
															Back to Home
														</button>
													</NavLink>
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
