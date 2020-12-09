import React, { Fragment, useRef } from 'react';
import Navbar from './Navbar1';
import Navbar1 from "./Navbar2";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ReactSpeedometer from 'react-d3-speedometer';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useReactToPrint } from 'react-to-print';
import loading from './loading.gif';
import { NavLink } from 'react-router-dom';

const RenderTableData = (props) => {
	return props.tdata.map((obj, index) => {
		const { carrier, country, location, phone_number, phone_type, valid } = obj;
		return (
			<Fragment>
				<tr key={1}>
					<td>Phone</td>
					<td>{phone_number}</td>
				</tr>
				<tr key={2}>
					<td>Is Valid</td>
					<td>{valid}</td>
				</tr>
				<tr key={3}>
					<td>Phone Type</td>
					<td>{phone_type}</td>
				</tr>
				<tr key={4}>
					<td>Carrier</td>
					<td>{carrier}</td>
				</tr>
				<tr key={5}>
					<td>Location</td>
					<td>{location}</td>
					
				</tr>
				<tr key={6}>
					<td>Country</td>
					<td>{country}</td>
				</tr>
			</Fragment>
		);
	});
};

const RenderTableData1 = (props) => {
	return props.tdata.map((obj, index) => {
		const { email0, reputation, deliverable, suspicious, blacklisted, malicious_activity, spam, domain_exists, spoofable, disposable, data_leaked } = obj;
		return (
			<Fragment>
				<tr key={1}>
					<td>Email</td>
					<td>{email0}</td>
				</tr>
				<tr key={2}>
					<td>Reputation</td>
					<td>{reputation}</td>
				</tr>
				<tr key={3}>
					<td>Deliverable</td>
					<td>{deliverable}</td>
				</tr>
				<tr key={4}>
					<td>Suspicious</td>
					<td>{suspicious}</td>
				</tr>
				<tr key={5}>
					<td>Blacklisted</td>
					<td>{blacklisted}</td>
				</tr>
				<tr key={6}>
					<td>Malicious Activity</td>
					<td>{malicious_activity}</td>
				</tr>
				<tr key={7}>
					<td>Spam</td>
					<td>{spam}</td>
				</tr>
				<tr key={8}>
					<td>Domain Exists</td>
					<td>{domain_exists}</td>
				</tr>
				<tr key={9}>
					<td>Spoofable</td>
					<td>{spoofable}</td>
				</tr>
				<tr key={10}>
					<td>Disposable</td>
					<td>{disposable}</td>
				</tr>
				<tr key={11}>
					<td>Data Leak</td>
					<td>{data_leaked}</td>
				</tr>
			</Fragment>
		);
	});
};

const RenderTableData2 = (props) => {
	return props.tdata.map((obj, index) => {
		const { ip0, message, total_reports, continent, country, city } = obj;
		return (
			<Fragment>
				<tr key={1}>
					<td>IP</td>
					<td>{ip0}</td>
				</tr>
				<tr key={2}>
					<td>Message</td>
					<td>{message}</td>
				</tr>
				<tr key={3}>
					<td>Number of Reports</td>
					<td>{total_reports}</td>
				</tr>
				{/*<tr key={3}>
					<td>ADDRESS</td>
				</tr>*/}
				<tr key={4}>
					<td>Continent</td>
					<td>{continent}</td>
				</tr>
				<tr key={5}>
					<td>Country</td>
					<td>{country}</td>
				</tr>
				<tr key={6}>
					<td>City</td>
					<td>{city}</td>
				</tr>
			</Fragment>
		);
	});
};

function Explore(props) {
	const [ oData, setOData ] = React.useState('');
	const [ email1, setEmail1 ] = React.useState('');
	const [ email, setEmail ] = React.useState('');
	const [ sType, setSType ] = React.useState('0');
	const [ modalShow, setModalShow ] = React.useState(false);
	const [ modalShow1, setModalShow1 ] = React.useState(false);
	const [ modalShow2, setModalShow2 ] = React.useState(false);
	const [ value, setValue1 ] = React.useState('0');
	const [ value2, setValue2 ] = React.useState('0');
	const [ tdata, setTdata ] = React.useState([]);
	const [ lat, setLat ] = React.useState(0);
	const [ lag, setLag ] = React.useState(0);
	const componentRef = useRef();
	const componentRef1 = useRef();
	const [isLoading,setIsLoading] = React.useState(false);
	const [isTemp,setTemp] = React.useState(false);
	const [ tmp, istmp ] = React.useState('This email is either invalid or unavailable right now!');
	const handlePrint = useReactToPrint({
		content: () => componentRef.current
	});
	const handlePrint1 = useReactToPrint({
		content: () => componentRef1.current
	});
	const textColor = '#AAA';

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
						setEmail1(response.data['email']);
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

	const setValue = (event) => {
		setSType(event.target.value);
	};

	const handleInputChange = (event) => {
		setEmail(event.target.value);
	};

	const submit = () => {
		setIsLoading(true);
		if (sType === '0') 
		{
			alert('Please enter data to search..!!');
			setIsLoading(false);
		}
		else if (!email)
		{
			alert('Please enter Data to search..!!');
			setIsLoading(false);
		} 
		else if (sType === '1') {
			let formData = new FormData();
			formData.append('email', email);
			axios
				.post('https://parthshah.pythonanywhere.com/api/email/', formData, {
					headers: {
						Authorization: 'Token ' + localStorage.getItem('token')
					}
				})
				.then((response) => {
					if (response.status === 200) {
						/*let dt = '';
						setOData(dt);
						if(response.data[0]['deliverable'] === 'False')
						{
							dt = dt + 'The email is either invalid or unavailable right now.';
							alert('The email is either invalid or unavailable right now.');
						}*/
						if(response.data[0]['deliverable'] === 'False')
						{
							setTemp(true);
						}
						console.log(response.data);
						setTdata([]);
						let obj = {
							email0: response.data[0]['email'],
							reputation: response.data[0]['reputation'],
							deliverable: response.data[0]['deliverable'],
							suspicious: response.data[0]['suspicious'],
							blacklisted: response.data[0]['blacklisted'],
							malicious_activity: response.data[0]['malicious_activity'],
							spam: response.data[0]['spam'],
							domain_exists: response.data[0]['domain_exists'],
							spoofable: response.data[0]['spoofable'],
							disposable: response.data[0]['disposable'],
							data_leaked: response.data[0]['data_leaked']
						};
						let temp = [];
						temp.push(obj);
						setTdata(temp);
						/*
						let dt = '';
						if(response.data[0]['deliverable'] === 'False')
						{
							dt = dt + '<b>The email is either invalid or unavailable right now.</b> <br /> <br />';
							alert('The email is either invalid or unavailable right now.');
						}
						dt = dt + '&quot;Reputation&quot; : ' +'&quot;'+ response.data[0]['reputation']+'&quot;';
						dt = dt + '<br /> &quot;Deliverable&quot; : ' +'&quot;'+ response.data[0]['deliverable']+'&quot;';
						dt = dt + '<br /> &quot;Suspicious&quot; : ' +'&quot;'+ response.data[0]['suspicious']+'&quot;';
						dt = dt + '<br /> &quot;Blacklisted&quot; : ' +'&quot;'+ response.data[0]['blacklisted']+'&quot;';
						dt = dt + '<br /> &quot;Malicious Activity&quot; : ' +'&quot;'+ response.data[0]['malicious_activity']+'&quot;';
						dt = dt + '<br /> &quot;Spam&quot; : ' +'&quot;'+ response.data[0]['spam']+'&quot;';
						dt = dt + '<br /> &quot;Domain exists&quot; : ' +'&quot;'+ response.data[0]['domain_exists']+'&quot;';
						dt = dt + '<br /> &quot;Spoofable&quot; : ' +'&quot;'+ response.data[0]['spoofable']+'&quot;';
						dt = dt + '<br /> &quot;Disposable&quot; : ' +'&quot;'+ response.data[0]['disposable']+'&quot;';
						dt = dt + '<br /> &quot;Data leaked&quot; : ' +'&quot;'+ response.data[0]['data_leaked']+'&quot;';
						//dt = dt + '<br /> &quot;Score&quot; : ' +'&quot;'+ response.data[0]['score']+'&quot;';
						*/
						setValue1(response.data[0]['score']);
						//setOData(dt);
						setModalShow(true);

						
					} else if (response.status === 201) {
						/*let dt = '';
						if(response.data['deliverable'] === 'False')
						{
							dt = dt + 'The email is either invalid or unavailable right now.';
							alert('The email is either invalid or unavailable right now.');
						}
						setOData(dt);*/
						if(response.data['deliverable'] === 'False')
						{
							setTemp(true);
						}
						console.log(response.data);
						setTdata([]);
						let obj = {
							email0: response.data['email'],
							reputation: response.data['reputation'],
							deliverable: response.data['deliverable'],
							suspicious: response.data['suspicious'],
							blacklisted: response.data['blacklisted'],
							malicious_activity: response.data['malicious_activity'],
							spam: response.data['spam'],
							domain_exists: response.data['domain_exists'],
							spoofable: response.data['spoofable'],
							disposable: response.data['disposable'],
							data_leaked: response.data['data_leaked']
						};
						let temp = [];
						temp.push(obj);
						setTdata(temp);
						/*let dt = '';
						if(response.data[0]['deliverable'] === 'False')
						{
							dt = dt + '<b>The email is either invalid or unavailable right now.</b> <br /> <br />';
							alert('The email is either invalid or unavailable right now.');
						}
						dt = dt + '&quot;Reputation&quot; : ' +'&quot;'+ response.data[0]['reputation']+'&quot;';
						dt = dt + '<br /> &quot;Deliverable&quot; : ' +'&quot;'+ response.data[0]['deliverable']+'&quot;';
						dt = dt + '<br /> &quot;Suspicious&quot; : ' +'&quot;'+ response.data[0]['suspicious']+'&quot;';
						dt = dt + '<br /> &quot;Blacklisted&quot; : ' +'&quot;'+ response.data[0]['blacklisted']+'&quot;';
						dt = dt + '<br /> &quot;Malicious Activity&quot; : ' +'&quot;'+ response.data[0]['malicious_activity']+'&quot;';
						dt = dt + '<br /> &quot;Spam&quot; : ' +'&quot;'+ response.data[0]['spam']+'&quot;';
						dt = dt + '<br /> &quot;Domain exists&quot; : ' +'&quot;'+ response.data[0]['domain_exists']+'&quot;';
						dt = dt + '<br /> &quot;Spoofable&quot; : ' +'&quot;'+ response.data[0]['spoofable']+'&quot;';
						dt = dt + '<br /> &quot;Disposable&quot; : ' +'&quot;'+ response.data[0]['disposable']+'&quot;';
						dt = dt + '<br /> &quot;Data leaked&quot; : ' +'&quot;'+ response.data[0]['data_leaked']+'&quot;';
						//dt = dt + '<br /> &quot;Score&quot; : ' +'&quot;'+ response.data[0]['score']+'&quot;';
						*/
						setValue1(response.data['score']);
						//setOData(dt);
						setModalShow(true);
					} else if (response.status === 400) {
						alert('Please enter valid email');
					} else {
						alert('Please try again..!');
					}

					setIsLoading(false)
				})
				.catch((errors) => {
					alert('Please enter valid email..!');
					setIsLoading(false);
				});
		} else if (sType === '2') {
			setIsLoading(true)
			let formData = new FormData();
			formData.append('ip', email);
			axios
				.post('https://parthshah.pythonanywhere.com/api/ip/', formData, {
					headers: {
						Authorization: 'Token ' + localStorage.getItem('token')
					}
				})
				.then((response) => {
					if (response.status === 200) {
						console.log(response.data);
						setTdata([]);
						let obj = {
							ip0: response.data[0]['ip'],
							message: response.data[0]['message'],
							total_reports: response.data[0]['total_reports'],
							continent: response.data[0]['continent'],
							country: response.data[0]['country'],
							city: response.data[0]['city'],
						};
						let temp = [];
						temp.push(obj);
						setTdata(temp);
						/*
						let dt = '';
						dt = dt + '&quot;Message&quot; : ' +'&quot; <b>'+ response.data[0]['message']+'</b> &quot;';
						dt = dt + '<br /> &quot;Number of Reports&quot; : ' +'&quot;'+response.data[0]['total_reports']+'&quot;';
						//dt = dt + '<br /> lat: ' + response.data[0]['lat'];
						//dt = dt + '<br /> lon: ' + response.data[0]['lon'];
						dt = dt + ' <br /> <br /> <b>ADDRESS</b>'
						dt = dt + ' <br /> &quot;Continent&quot; :' +'&quot;'+ response.data[0]['continent']+'&quot;';
						dt = dt + ' <br /> &quot;Country&quot; : ' +'&quot;'+ response.data[0]['country']+'&quot;';
						dt = dt + ' <br /> &quot;City&quot; : ' +'&quot;'+ response.data[0]['city']+'&quot;';
						*/
						setLat(response.data[0]['lat']);
						setLag(response.data[0]['lon']);
						//setOData(dt);
						setModalShow1(true);
					} else if (response.status === 201) {
						console.log(response.data);
						setTdata([]);
						let obj = {
							ip0: response.data['ip'],
							message: response.data['message'],
							total_reports: response.data['total_reports'],
							continent: response.data['continent'],
							country: response.data['country'],
							city: response.data['city'],
						};
						let temp = [];
						temp.push(obj);
						setTdata(temp);
						/*let dt = '';
						dt = dt + '&quot;Message&quot; : ' +'&quot; <b>'+ response.data[0]['message']+'</b> &quot;';
						dt = dt + '<br /> &quot;Number of Reports&quot; : ' +'&quot;'+response.data[0]['total_reports']+'&quot;';
						//dt = dt + '<br /> lat: ' + response.data['lat'];
						//dt = dt + '<br /> lon: ' + response.data['lon'];
						dt = dt + ' <br /> <br /> <b>ADDRESS</b>'
						dt = dt + ' <br /> &quot;Continent&quot; : ' +'&quot;'+ response.data[0]['continent']+'&quot;';
						dt = dt + ' <br /> &quot;Country&quot; : ' +'&quot;'+ response.data[0]['country']+'&quot;';
						dt = dt + ' <br /> &quot;City&quot; : ' +'&quot;'+ response.data[0]['city']+'&quot;';
						*/
						setLat(response.data['lat']);
						setLag(response.data['lon']);
						//setOData(dt);
						setModalShow1(true);
					} else if (response.status === 400) {
						alert('Please enter valid IP');
					} else {
						alert('Please try again..!');
					}
					setIsLoading(false)
				})
				.catch((errors) => {
					alert('Please enter valid IP..!');
					setIsLoading(false)
				});
		}
		else if (sType === '3') {
			setIsLoading(true)
			let formData = new FormData();
			formData.append('number', email);
			axios
				.post('https://parthshah.pythonanywhere.com/api/phone_number/', formData, {
					headers: {
						Authorization: 'Token ' + localStorage.getItem('token')
					}
				})
				.then((response) => {
					if (response.status === 200) {
						console.log(response.data);
						setTdata([]);
						let obj = {
							phone_number: response.data[0]['phone_number'],
							carrier: response.data[0]['carrier'],
							country: response.data[0]['country'],
							location: response.data[0]['location'],
							phone_type: response.data[0]['phone_type'],
							valid: response.data[0]['valid']
						};
						let temp = [];
						temp.push(obj);
						setTdata(temp);
						//alert(response.data[0]['valid']);
						if(response.data[0]['valid'] === 'False')
						{
							setValue2('75');
						}
						if(response.data[0]['valid'] === 'false')
						{
							setValue2('75');
						}
						if(response.data[0]['valid'] === 'True')
						{
							setValue2('25');
						}
						if(response.data[0]['valid'] === 'true')
						{
							setValue2('25');
						}
						setModalShow2(true);
					} else if (response.status === 201) {
						let ttt = 'false';
						if (response.data['valid']) ttt = 'true';
						setTdata([]);
						let obj = {
							phone_number: response.data['phone_number'],
							carrier: response.data['carrier'],
							country: response.data['country'],
							location: response.data['location'],
							phone_type: response.data['phone type'],
							valid: ttt
						};
						let temp = [];
						temp.push(obj);
						setTdata(temp);
						if(response.data['valid'] === 'False')
						{
							setValue2('75');
						}
						if(response.data['valid'] === 'false')
						{
							setValue2('75');
						}
						if(response.data['valid'] === 'True')
						{
							setValue2('25');
						}
						if(response.data['valid'] === 'true')
						{
							setValue2('25');
						}
						setModalShow2(true);
					} else if (response.status === 400) {
						alert('Please enter valid Phone Number!');
					} else {
						alert('Please try again..!');
					}
					setIsLoading(false)
				})
				.catch((errors) => {
					alert('Please enter valid Phone Number');
					setIsLoading(false)
				});
		}
	};

	return (
		<Fragment>
			{/*<Navbar1 />*/}
			<div className="Explore_div ">
				<h2>get to know the data</h2>
				<p className="centeral" style={{color:"#AFAEAE",fontSize:"16px",paddingTop:"10px"}}>Time for action! Get your results here.</p>
				<div className="Explore_center__div container my-5">
					<div className="row mx-auto">
						<div className="col-lg-6 col-10 mx-auto">
							<div className="mb-3">
								<label for="exampleInputEmail1" className="form-label">
									Domain to Scan
								</label>
								<select
									class="form-select"
									onChange={setValue}
									value={sType}
									aria-label="Default select example"
								>
									<option value="0">Domain to Scan</option>
									<option value="1">Email ID</option>
									<option value="2">IP Adress</option>
									<option value="3">Phone Number</option>
								</select>
							</div>
							<div className="mb-3">
								<label for="exampleInputEmail1" className="form-label">
									Data to search
								</label>
								<input
									className="form-control"
									type="text"
									name="email"
									required=""
									value={email}
									onChange={handleInputChange}
									placeholder="Enter data "
								/>
							</div>
							<div className="mb-3 "> 
								<NavLink to="/userhome">
									<button className="explore_btn0">
										Back to Home
									</button>
								</NavLink>&nbsp;
								<button className="explore_btn" onClick={submit}>
									{isLoading==true? "Loading.." : "Get Results"}
								</button>
								{ isLoading && <img src={loading} height="30" style={{paddingLeft:10 + "px"}}></img>}
							</div>

							{/* <div className="explore_output__div">
								<label className="form-label explore_output__div__heading">Result</label>
								<p>
									<div contentEditable="false" dangerouslySetInnerHTML={{ __html: oData }} />
								</p> 
							</div> */}

							<div className="service_title0">
								<h3><b>Input Syntax</b></h3>
								<br/><p><b>Email Address</b><br/>
								"Username" + "@" + "Host Name" + "." + "Domain Name"<br/>
								<b>Example : abc@gmail.com</b></p><br/>
								<p><b>IP</b><br/>
								"Number" + "." + "Number" + "." + "Number" + "." + "Number"<br/>
								<b>Example : 1.1.1.1</b></p><br/>
								<p><b>Phone Number</b><br/>
								"+" + "Country Code" + "Phone Number"<br/>
								<b>Example : +919000000001</b></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
			<Modal size="xl" show={modalShow} onHide={() => setModalShow(false)} centered >
				<Modal.Header closeButton>
					<Modal.Title><b>Result</b>&emsp;<button onClick={handlePrint1} className="print_tag print_btn">
						<div className="print_tag"><i class="fa fa-print" aria-hidden="true"> Print </i></div>
					</button>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body ref={componentRef1}>
					<div className="row">
						<div className="col-md-6">
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Name</th>
										<th>Value</th>
									</tr>
								</thead>
								<tbody>
									<RenderTableData1 tdata={tdata} />
								</tbody>
							</Table>
						</div>
						{/*<div className="explore_output__div">
							<p>
								<div contentEditable="false" dangerouslySetInnerHTML={{ __html: oData }} />
							</p>
							</div>*/}
						<div className="col-md-6 justify-content-center align-items-center">
							<div class="vl">
							<span className="centeral">
							
							<div className="red_text1">
								{isTemp==true? tmp : ""}
							</div>
							<span className=".txt-line01">
							<h2><b><i>Stealthy Score</i></b></h2>
							</span>
							{/*<br/>*/}
							<br/>
							<ReactSpeedometer
								// fluidWidth={true}
								minValue={0}
								maxValue={100}
								width={300}
								height={200}
								value={value*25}
								needleHeightRatio={0.8}
								segments={4}
								currentValueText="Score"
								needleColor="steelblue"
								needleTransitionDuration={4000}
								needleTransition="easeElastic"
								segmentColors={[ '#00BB03', '#CF9E04', '#EC5200', '#E10303' ]}
								textColor={textColor}
							/>
							<h2><b>Score: {value*25} %</b></h2><br/>
							</span>
							
							<div className="service_title0">
								<h3 className="centeral"><b>Meaning of the Scores</b></h3>
								<span className="txt1">
									<br/>
									<p><b>0% - 25% : Safe </b></p>
								</span><span className="txt2">
									<p><b>25% - 50% : OK </b></p>
								</span><span className="txt3">
									<p><b>50% - 75% : High Chance of being Spam</b> </p>
								</span><span className="txt4">
									<p><b>75% - 100% : Spam </b></p>
								</span>
							</div>
							</div>
						</div>
					</div>
				</Modal.Body>
				{/*<Modal.Footer>
					<Button variant="danger" onClick={handlePrint1}>
						Print
					</Button>
				</Modal.Footer>*/}
			</Modal>
			</div>
			<Modal show={modalShow1} onHide={() => setModalShow1(false)} centered>
				<Modal.Header closeButton>
					<Modal.Title><b>Result</b>&emsp;<button onClick={handlePrint1} className="print_tag print_btn">
						<div className="print_tag"><i class="fa fa-print" aria-hidden="true"> Print </i></div>
					</button></Modal.Title>
					
				</Modal.Header>
				<Modal.Body ref={componentRef1} className="modalbody1">
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Name</th>
								<th>Value</th>
							</tr>
						</thead>
						<tbody>
							<RenderTableData2 tdata={tdata} />
						</tbody>
					</Table>
					{/*<div className="explore_output__div">
						<p>
							<div contentEditable="false" dangerouslySetInnerHTML={{ __html: oData }} />
						</p>
					</div>*/}
					<div>
					<Map
						google={props.google}
						zoom={8}
						style={{
							width: '93%',
							height: '60%'
						}}
						initialCenter={{ lat: lat, lng: lag }}
					>
						<Marker position={{ lat: lat, lng: lag }} />
					</Map>
					</div>
				</Modal.Body>
				{/*<Modal.Footer>
					<Button variant="danger" onClick={handlePrint1}>
						Print
					</Button>
				</Modal.Footer>*/}
			</Modal>
			<Modal show={modalShow2} onHide={() => setModalShow2(false)} centered>
				<Modal.Header closeButton>
					<Modal.Title><b>Result</b>&emsp;<button onClick={handlePrint1} className="print_tag print_btn">
						<div className="print_tag"><i class="fa fa-print" aria-hidden="true"> Print </i></div>
					</button></Modal.Title>
					
				</Modal.Header>
				<Modal.Body ref={componentRef1} className="modalbody">
					{/*<div className="explore_output__div">
						<p>
							<div contentEditable="false" dangerouslySetInnerHTML={{ __html: oData }} />
						</p>
					</div>*/}
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Name</th>
								<th>Value</th>
							</tr>
						</thead>
						<tbody>
							<RenderTableData tdata={tdata} />
						</tbody>
					</Table>
					{/*<div>
					<Map
						google={props.google}
						zoom={8}
						style={{
							width: '93%',
							height: '60%'
						}}
						initialCenter={{ lat }}
					>
						<Marker position={{ lat }} />
					</Map>
					</div>*/}
					<span className="centeral">
					<span className=".txt-line01">
					<h2><b><i>Spam Meter</i></b></h2>
					<br/>
					</span>
					<ReactSpeedometer
						// fluidWidth={true}
						minValue={0}
						maxValue={100}
						width={300}
						height={200}
						value={value2}
						needleHeightRatio={0.8}
						segments={2}
						currentValueText="Spam"
						needleColor="steelblue"
						needleTransitionDuration={4000}
  						needleTransition="easeElastic"
						segmentColors={[ '#00BB03', '#E10303' ]}
						textColor={textColor}
					/>
					</span>
				</Modal.Body>
			</Modal>
		</Fragment>
	);
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyAZSmFsydoFADWhMq0P1gKeRMRdVJdIy1A'
})(Explore);
