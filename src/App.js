import React, { Fragment } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Interview from './Interview';
import About from './About';
import Contact from './Contact';
import Enquiry from './Enquiry';
import Study from './Study';
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './User/Login';
import Logout from './User/Logout';
import Register from './User/Register';
import UserHome from './UserHome';
import UserAbout from './UserAbout';
import Social from './Social';
import Contact1 from './Contact1';
import Documentation from './Documentation';
import Scroll from './scroll';
import Use from './Use';
import FAQ from './FAQ/App';
import UserUse from './UserUse';
import Forget from './User/Forget';
import Forget1 from './User/Forget1';
import UpdateUsername from './User/UpdateUsername';
import UpdatePassword from './User/UpdatePassword';
import { Switch, Route, Redirect } from 'react-router-dom';
import Explore from './Explore';

class App extends React.Component{

	constructor ()
	{
		super();
		this.state={loading:true}
		console.log(this.state.loading)
	}
	
	componentDidMount()
	{
		//console.log("didmount")
		this.setState({loading:false});
	}

	render = () =>{

		//console.log(this.state.loading)
		//console.log("render called")
		if(this.state.loading == false )
		{

		
		return (
			<Fragment>
				<div class="page-container">
				<div class="content-wrap">
				<Switch>						
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/interview" component={Interview} />
						<Route exact path="/enquiry" component={Enquiry} />
						<Route exact path="/study" component={Study} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/contact1" component={Contact1} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/logout" component={Logout} />
						<Route exact path="/use" component={Use} />
						<Route exact path="/social" component={Social} />
						<Route exact path="/explore" component={Explore} />
						<Route exact path="/useruse" component={UserUse} />
						<Route exact path="/userhome" component={UserHome} />
						<Route exact path="/userabout" component={UserAbout} />
						<Route exact path="/forget" component={Forget} />
						<Route exact path="/forget1" component={Forget1} />
						<Route exact path="/updateuname" component={UpdateUsername} />
						<Route exact path="/updatepass" component={UpdatePassword} />
						<Route exact path="/faq" component={FAQ} />
						<Route exact path="/documentation" component={Documentation} />
						<Route exact path="/scroll" component={Scroll} />
						<Redirect to="/" />
						
					
				</Switch>
				</div>
				<Footer />
				</div>
			</Fragment>
		)
		}
		else
		{
			console.log("showing loading screen")
			return(<div>Loadiing</div>)
		}
	}

};

export default App;
