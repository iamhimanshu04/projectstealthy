import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../src/User/mainlogo.png';
import axios from 'axios';

export default function Navbar() {
	const [ user_name, setUserName ] = React.useState('');

	React.useEffect(() => {
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
						setUserName(response.data['username']);
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
	}, []);

	return (
		<Fragment>
			<div className="navigation-wrap bg-light start-header start-style">
				<div className="container-fluid">
					<div className="row">
						<div className="col-10 mx-auto">
							<nav className="navbar navbar-expand-md navbar-light">
								<NavLink
									activeClassName="active_page"
									className="navbar-brand"
									to="/userhome"
									
								>
									<img src={logo} alt="" />
								</NavLink>

								<button
									className="navbar-toggler"
									type="button"
									data-toggle="collapse"
									data-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation"
								>
									<span className="navbar-toggler-icon" />
								</button>

								<div className="collapse navbar-collapse" id="navbarSupportedContent">
									<ul className="navbar-nav ml-auto py-4 py-md-0">
										<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
											<NavLink
												exact
												activeClassName="active_page"
												className="nav-link"
												to="/userhome"
											>
												Home
											</NavLink>
										</li>
										<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
											<NavLink
												exact
												activeClassName="active_page"
												className="nav-link"
												to="/Explore"
											>
												Verify Data
											</NavLink>
										</li>
										{/*}
										<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
											<NavLink
												exact
												activeClassName="active_page"
												className="nav-link"
												to="/useruse"
											>
												Use
											</NavLink>
										</li>
										<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
											<NavLink
												exact
												activeClassName="active_page"
												className="nav-link"
												to="/userabout"
											>
												About
											</NavLink>
										</li>
										*/}
										<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
											<NavLink
												exact
												activeClassName="active_page"
												className="nav-link"
												to="/Contact1"
											>
												Contact
											</NavLink>
										</li>
										{/*
										<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
											<NavLink
												exact
												activeClassName="active_page"
												className="nav-link"
												to="/Documentation"
											>
												Documentation
											</NavLink>
										</li>*/}
										<li class="nav-item dropdown pl-4 pl-md-0 ml-0 ml-md-4">
											<a
												class="nav-link dropdown-toggle"
												href="#"
												id="navbarDropdown"
												role="button"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false"
											>
												{user_name}
											</a>
											<div class="dropdown-menu drop" aria-labelledby="navbarDropdown">
												<a class="dropdown-item" href="#">
													<NavLink
														exact
														activeClassName="active_page"
														className="nav-link"
														to="updateuname"
													>
														Update Username
													</NavLink>
												</a>
												<a class="dropdown-item" href="#">
													<NavLink
														exact
														activeClassName="active_page"
														className="nav-link"
														to="updatepass"
													>
														Update Password
													</NavLink>
												</a>
												<div class="dropdown-divider" />
												<a class="dropdown-item" href="#">
													<NavLink
														exact
														activeClassName="active_page"
														className="nav-link"
														to="/logout"
													>
														Logout
													</NavLink>
												</a>
											</div>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
