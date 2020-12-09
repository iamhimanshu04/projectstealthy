import React, { Fragment, Component } from 'react';
import '../User/login.css';
import { NavLink } from 'react-router-dom';
import Logo1 from './logo1.png';
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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
			pass1: '',
			btnName: 'Update Password',
			v1: true,
			v2: false,
			v3: false,
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

		if (this.state.pass != this.state.pass1) alert("Password doesn't match..!");
		else {
			let formData = new FormData();
			formData.append('new_password', this.state.pass);
			formData.append('confirm_new_password', this.state.pass1);
			axios
				.put('https://parthshah.pythonanywhere.com/api/account/forgot_password/', formData, {
					headers: {
						Authorization: 'Token ' + localStorage.getItem('ftoken')
					}
				})
				.then((response) => {
					if (response.status === 200) {
						this.setState({modalShow:true})
						// setUserName(response.data['username']);
					} else {
						alert('Please try again..!');
						// this.props.history.push('/logout');
					}
				})
				.catch((errors) => {
					alert('Please try again..!');
					// this.props.history.push('/logout');
				});

			// let formData = new FormData();
			// formData.append('email', this.state.email);
			// axios
			//   .post('http://parthshah.pythonanywhere.com/api/account/check_if_account_exists/', formData)
			//   .then((response) => {
			//     if (response.status === 200) {
			//       if (response.data['response'] === 'Account does not exist') {
			//         alert('Account does not exist');
			//       } else {
			//         localStorage.setItem('ftoken', response.data['token']);
			//       }
			//     } else {
			//       const error = new Error(response.error);
			//       throw error;
			//     }
			//   })
			//   .catch((errors) => {
			//     alert('Please try again');
			//     console.log(errors);
			//   });
		}
	};

	render() {
		return (
			<Fragment>
				<Modal show={this.state.modalShow} onHide={() =>this.props.history.push('/login')} centered>
						<Modal.Body>
						<Modal.Title>Password Successfully Updated ! </Modal.Title>
							<Button style={{marginTop:30+"px",position:"relative",right:-140+"px"}} variant="danger" onClick={()=>this.props.history.push('/login')}>
								Sign In
							</Button>
						</Modal.Body>
					</Modal>
					<div className="Login-component">
					<div className="account-pages0">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-lg-5">
									<div className="card">
										<div className="mb-3 d-flex justify-content-center">
											<NavLink to="/">
												<img src={Logo1} alt="" height="80" />
											</NavLink>
										</div>
										<hr className="mx-5 px-5 mb-3 text-center"/>
										<div className="card-body p-4">
											<div className="text-center w-75 m-auto">
												<h4 className="text-dark-50 text-center mt-0 font-weight-bold">
													Update Password
												</h4>
											</div>
											<form onSubmit={this.onSubmit}>
												<div className="form-group mt-3">
													<label htmlFor="pass" class="ml-5 px-1">Password</label><br/>
													<i class="fas fa-unlock-alt fa-2x"></i>
													<input
														className="form-control d-inline w-75 ml-4"
														type="password"
														name="pass"
														value={this.state.pass}
														onChange={this.handleInputChange}
														placeholder="Enter your password"
													/>
												</div>
												<div className="form-group mt-3">
													<label htmlFor="pass" class="ml-5 px-1">Confirm Password</label><br/>
													<i class="fas fa-unlock-alt fa-2x"></i>
													<input
														className="form-control d-inline w-75 ml-4"
														type="password"
														name="pass1"
														value={this.state.pass1}
														onChange={this.handleInputChange}
														placeholder="Enter your password"
													/>
												</div>
												<br />
												<div className="form-group mb-0 px-1 text-center">
													<button className="explore_btn1" type="submit" name="submit" style={{marginBottom:'10px'}}>
														Update
													</button>&nbsp;
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
