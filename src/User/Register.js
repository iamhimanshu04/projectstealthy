import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import logo from "./mainlogo.png";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import '../User/ForgetPass.css';
import Logo1 from './logo1.png';
import Navbar from '../Navbar';

// axios.defaults.withCredentials = true;

export default class ForgetPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			cpassword: '',
			modalShow:false
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
		if (this.state.password != this.state.cpassword) alert("Password doesn't match..!");
		else if (this.state.name && this.state.email && this.state.password && this.state.cpassword) {
			axios
				.post('https://parthshah.pythonanywhere.com/api/account/register', {
					email: this.state.email,
					username: this.state.name,
					password: this.state.password,
					password2: this.state.cpassword
				})
				.then((response) => {
					if (response.status === 200) {
						if (response.data['response']) {
							if (response.data['response'] === 'successfully registered new user.') {
								this.setState({modalShow:true})
								// localStorage.setItem('token', response.data['token']);
								// localStorage.setItem('pk', response.data['pk']);
								// localStorage.setItem('username', response.data['username']);
								// localStorage.setItem('email', response.data['email']);
								
							} else if (response.data['response'] === 'Error') {
								alert(response.data['error_message']);
							} else alert(response.data['response']);
						} else {
							alert('Please try again..!!');
						}
					} else {
						alert('Please try again..!');
					}
				})
				.catch((errors) => {
					alert('Please try again..!');
				});
		} else if (this.state.name) alert('Please enter name');
		else if (this.state.email) alert('Please enter email');
		// fetch('user/authinticate', {
		// 	method: 'POST',
		// 	body: JSON.stringify(this.state),
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// })
		// 	.then((res) => {
		// 		if (res.status === 200) {
		// 			toast.success('🦄 Login Successful..!!', {
		// 				position: 'top-right',
		// 				autoClose: 5000,
		// 				hideProgressBar: false,
		// 				closeOnClick: true,
		// 				pauseOnHover: true,
		// 				draggable: true
		// 			});
		// 			this.props.history.push('/userhome');
		// 		} else {
		// 			const error = new Error(res.error);
		// 			throw error;
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		toast.error('🦄 Please try again!', {
		// 			position: 'top-right',
		// 			autoClose: 5000,
		// 			hideProgressBar: false,
		// 			closeOnClick: true,
		// 			pauseOnHover: true,
		// 			draggable: true
		// 		});
		// 	});
	};

	render() {
		return (
			<Fragment>
				    <Modal show={this.state.modalShow} onHide={() =>this.props.history.push('/login')} centered>
					<Modal.Body>
						<Modal.Title>You have been Successfully Registered ! </Modal.Title>
							<Button style={{marginTop:30+"px",position:"relative",right:-140+"px"}} variant="danger" onClick={()=>this.props.history.push('/login')}>
								Sign In
							</Button>
						</Modal.Body>
					</Modal>
				<div className="Login-component row">
					<div className="account-pages col-lg-4">
						<div class="container">
							<div class="row justify-content-center">
								<div class="col">
									<div class="card">
										

										<div class="card-body p-4">
											<div className="mb-3 d-flex justify-content-center">
											<NavLink to="/">
												<img src={Logo1} alt=""  height="80" />
											</NavLink>
											</div>
											<hr className="mx-5 px-5 mb-3 text-center"/>
											<div class="text-center w-75 m-auto">
												<h4 class="text-dark-50 text-center mt-0 font-weight-bold">Register</h4>
												<p class="text-muted mb-4" />
											</div>

											<form method="post" onSubmit={this.onSubmit}>
												<div className="form-group mt-3">
													<label htmlFor="emailaddress" class="ml-5 px-1">Username</label><br/>
													<i class="fas fa-user fa-2x"></i>
													<input
														className="form-control d-inline w-75 ml-4"
														type="text"
														name="name"
														required=""
														value={this.state.name}
														onChange={this.handleInputChange}
														placeholder="Enter your Username"
													/>
												</div>
												<div className="form-group mt-3">
													<label htmlFor="emailaddress" class="ml-5 px-1">Email address</label><br/>
													<i class="fas fa-envelope-open-text fa-2x"></i>
													<input
														className="form-control d-inline w-75 ml-4"
														type="email"
														name="email"
														required=""
														value={this.state.email}
														onChange={this.handleInputChange}
														placeholder="Enter your email"
													/>
												</div>
												<div className="form-group mt-3">
													<label htmlFor="password" class="ml-5 px-1">Password</label><br/>
													<i class="fas fa-unlock-alt fa-2x"></i>
													<input
														className="form-control d-inline w-75 ml-4"
														type="password"
														name="password"
														required=""
														value={this.state.password}
														onChange={this.handleInputChange}
														placeholder="Enter your password"
													/>
												</div>
												<div className="form-group mt-3">
													<label htmlFor="password" class="ml-5 px-1">Confirm Password</label><br/>
													<i class="fas fa-unlock-alt fa-2x"></i>
													<input
														className="form-control d-inline w-75 ml-4"
														type="password"
														name="cpassword"
														required=""
														value={this.state.cpassword}
														onChange={this.handleInputChange}
														placeholder="Confirm password"
													/>
												</div>
												<br />
												<div class="form-group mb-0 px-1 text-center">
													<button
														class="explore_btn1"
														type="submit"
														id="submit"
														name="submit"
													>
														Submit
													</button>
												</div>
												<div class="row mt-3">
													<div class="col-12 text-center">
														<p class="text-muted">
															Already a user? { }
															<a href="/login" class="text-muted ml-1">
																<span className="regt">Log In</span>
															</a>
														</p>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-8 d-none d-lg-flex mx-auto my-5 py-5 ">
							<div>
								<div className="col-lg-26 col-10 mx-auto">
									<img className="img-fluid rounded mb-4" src={logo} alt="" />
								</div>
								<vr/>
								<div className="text-right">
								<h3 className="lrtxt">
								&emsp;&emsp;&emsp;With Stealthy keep your data clean!
								</h3>
								<p>
									Register and start your journey with stealthy.
								</p>
								</div>
							</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
