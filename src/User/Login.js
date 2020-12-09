import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import logo from "./mainlogo.png";
import '../User/login.css';
import Logo1 from './logo1.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import Navbar from '../Navbar';
import axios from 'axios';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			isChecked: false,
			loadingL: false,
			loading: true,
			redirect: false,
			modalShow:false,
		};
	}
	componentDidMount() {
		localStorage.clear();
		this.setState({ loading: false, redirect: true });
	}

	handleInputChange = (event) => {
		const { value, name } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleChangeChk = () => {
		console.log(this.state.isChecked);
		this.setState({ isChecked: !this.state.isChecked });
	};

	onSubmit = (event) => {
		this.setState({ loadingL: true});
		event.preventDefault();
		let formData = new FormData();
		formData.append('username', this.state.email);
		formData.append('password', this.state.password);

		axios
			.post('https://parthshah.pythonanywhere.com/api/account/login', formData)
			.then((response) => {
				if (response.status === 200) {
					if (response.data['response']) {
						if (response.data['response'] === 'Successfully authenticated.') {
							this.setState({modalShow:true})
							localStorage.setItem('token', response.data['token']);
							localStorage.setItem('pk', response.data['pk']);
							 localStorage.setItem('username', response.data['username']);
							localStorage.setItem('email', response.data['email']);
							 this.props.history.push('/userhome');
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
	};

	render() {
		const { loading, redirect, loadingL } = this.state;
		if (loading) {
			return null;
		}
		if (redirect) {
			return ( 
				<Fragment>
					{/*<Modal show={this.state.modalShow} onHide={() =>this.props.history.push('/userhome')} centered>
						<Modal.Body>
						<Modal.Title>You have been Successfully Logged in! </Modal.Title>
							<Button style={{marginTop:30+"px",position:"relative",right:-140+"px"}} variant="danger" onClick={()=>this.props.history.push('/userhome')}>
								Proceed
							</Button>
						</Modal.Body>
					</Modal>*/}
					<div className="Login-component d-flex flex-row">
						<div className="account-pages col-lg-4">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col">
										<div className="card">
										{/* <div className="card-header pt-4 pb-4 text-center bg-primary">
										
											</div> */}

											<div className="card-body p-4">
												<div className="mb-3 d-flex justify-content-center">
												<NavLink to="/">
													<img src={Logo1} alt=""  height="80" />
												</NavLink>
												</div>
												<hr className="mx-5 px-5 mb-3 text-center"/>
												<div className="text-center w-75 m-auto">
													<h4 className="text-dark-50 text-center mt-0 font-weight-bold">
														Sign In
													</h4>
													<p className="text-muted mb-4"> 
														Enter your email address and password to access your panel.
													</p>
												</div>
												<form onSubmit={this.onSubmit}>
													<div className="form-group mt-3">
														
														<label htmlFor="emailaddress" class="ml-5 px-1">Email address</label><br/>
														
															<i class="fas fa-envelope-open-text fa-2x"></i>
														
															<input
																className="form-control d-inline w-75 ml-4"
																type="text"
																name="email"
																required=""
																value={this.state.email}
																onChange={this.handleInputChange}
																placeholder="Enter your email"
															/>
														
													</div>
													<div className="form-group mt-3">
														{/* <p class="text-muted float-right"><a href="ForgetPassword.js" class="text-muted ml-1"><b>Forget Your password?</b></a></p> */}
														{/* <a href="index.php" className="text-muted float-right"><small>Forgot your password?</small></a> */}
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
													<div className="form-group mb-3 mt-3">
														<a href="/forget" className="text-muted ">
															<small>&emsp;&emsp;&emsp;&emsp;<span className="regt" >Forgot your password?</span></small>
														</a>
														{/* <div className="custom-control custom-checkbox">
														<input
															type="checkbox"
															className="custom-control-input"
															id="checkbox-signin"
															checked={this.state.isChecked}
															onChange={this.handleChangeChk}
														/>
														<label
															className="custom-control-label"
															htmlFor="checkbox-signin"
														>
															Remember me
														</label>
													</div> */}
													</div>
													<div className="form-group mb-3 text-center">
													<div>
															
															<a href="/Register" className="text-muted">
															New User? <span className="regt" >Register Here</span>.
															</a>
														</div>
													</div>
													{/*<div className="form-group mb-0 mt-5 mx-5 px-1">*/}
													<div className="form-group mb-0 text-center">
														<button className="explore_btn1" type="submit" name="submit">
														    {loadingL && <Spinner size="sm" animation='border' />}
															{loadingL==true? "" : "Log In"}
														</button>
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
									Login and continue your journey with stealthy.
								</p>
								</div>
							</div>
						</div>
					</div>
				</Fragment>
			);
		} else {
			return <Redirect to="/userhome" />;
		}
	}
}
