import React, { Component } from 'react';
import '../User/logout.css';
import Logo from './logo.png';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar';

export default class Logout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			logout: false
		};
	}

	componentDidMount() {
    localStorage.clear();
    this.props.history.push('/');
	}

	render() {
		return (
      <>
      <Navbar />
      

			<div className="Login-component">
				<div className="account-pages">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-5">
								<div className="card">
									<div className="card-header pt-4 pb-4 text-center bg-primary">
										<img src={Logo} alt="" width="80" height="80" />
									</div>
									<div className="card-body p-4">
										<br />
										<br />
										<br />
										<div className="text-center w-75 m-auto">
											<h4 className="text-dark-50 text-center mt-0 font-weight-bold">
												Logout Successful
											</h4>
										</div>
										<br />
										<br />
										<br />
										<div className="text-center">
											<NavLink to="/login">Click here to Login</NavLink>
										</div>
										<br />
										<br />
										<br />
										<br />
										<br />
										<br />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
      </>
		);
	}
}
