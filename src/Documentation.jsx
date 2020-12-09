import React from 'react';
import Navbar from "./Navbar1";
import logo from "../src/User/mainlogo.png";
import { NavLink } from 'react-router-dom';

const Documentation = () => {
  return (
    <>
      {/*<Navbar />*/}
      <div className="row mt-7">
        <div className="col-md-10 col-11 mx-auto mt-5">
        <img src={logo} alt="" height='80px' width='200px' className="docimg"/>
        <NavLink to="/userhome"> 
									<button className="explore_btn0 docbtn">
										Back to Home
									</button>
								</NavLink>

          <div className="row mt-5">
            {/* <!-- right side navbar -->  */}
            <div className="col-lg-3 col-md-4 d-md-block documentation_block">
              <div className="card bg-common card-left bg-commom">
                <div className="card-body">
                  <nav className="nav d-md-block d-none">
                   
                 
                    <li className="dropdown"> 
                    <a className="dropdown-toggle nav-link"
                      data-toggle="dropdown" style={{cursor:'pointer'}}> 
                      <i class="fas fa-envelope"></i>&nbsp;
                        Email <b className="caret">      
                        </b></a> 
                    
                    <ul className="dropdown-menu p-2"> 
                    <li> <a href="#email1" 
                              role="tab" 
                              data-toggle="tab"
                              className="nav-link mt-2 documentLink"> 
                              {/*<i className="fas fa-user mr-1"></i>*/}
                          Rule Book</a> 
                          </li>
                          {/*
                          <li>   <a href="#email2" 
                              role="tab" 
                              data-toggle="tab"
                              className="nav-link mt-2 "> 
                              <i className="fas fa-user mr-1"></i>
                            Email2</a> 
                            </li>
                          */}
                      </ul> 
                     </li>  

                    <br />
                          
                    <li className="dropdown"> 
                    <a className="dropdown-toggle nav-link"
                      data-toggle="dropdown" style={{cursor:'pointer'}}> 
                      <i class="fas fa-globe"></i>&nbsp;
                      IP <b className="caret">      
                      </b></a> 
                    <ul className="dropdown-menu p-2"> 
                    <li> <a href="#ip1" 
                              role="tab" 
                              data-toggle="tab"
                              className="nav-link mt-2 "> 
                              <i className="fas fa-user mr-1"></i>
                          Rule Book</a> 
                          </li>
                          {/*
                          <li>   <a href="#ip2" 
                              role="tab" 
                              data-toggle="tab"
                              className="nav-link mt-2 "> 
                              <i className="fas fa-user mr-1"></i>
                            IP2</a> 
                            </li>
                          */}
                      </ul> 
                     </li>                
                     <br />
                  <li className="dropdown"> 
                  <a className="dropdown-toggle nav-link"
                    data-toggle="dropdown" style={{cursor:'pointer'}}> 
                    <i class="fas fa-phone-alt"></i>&nbsp;
                    Phone <b className="caret">      
                    </b></a> 
                  <ul className="dropdown-menu p-2"> 
                  <li> <a href="#phone1" 
                            role="tab" 
                            data-toggle="tab"
                            className="nav-link mt-2 "> 
                            <i className="fas fa-user mr-1"></i>
                        Rule Book</a> 
                        </li>
                        {/*
                        <li>   <a href="#phone2" 
                            role="tab" 
                            data-toggle="tab"
                            className="nav-link mt-2 "> 
                            <i className="fas fa-user mr-1"></i>
                          3216549878</a> 
                          </li>*/}
                    </ul> 
                    </li>  
                  </nav>
                </div>
              </div>
            </div>
            {/* <!-- right side div starts --> */}
            <div className="col-lg-9 col-md-8">
              <div className="card">
                <div className="card-header border-bottom mb-3 d-md-none documentation_mobile">
                  <ul className="nav nav-tabs card-header-tabs nav-fill">
                  
                    <li className="nav-item">
                    <li className="dropdown" > 
                    <a className="dropdown-toggle nav-link"
                      data-toggle="dropdown"> 
                      <i class="fas fa-envelope"></i>
                      Email <b className="caret">      
                        </b></a> 

                    <ul className="dropdown-menu p-2"> 
                          <li> <a href="#email1" 
                              role="tab" 
                              data-toggle="tab"
                              className="nav-link mt-2 documentLink"> 
                              {/*<i className="fas fa-user mr-1"></i>*/}
                          Rule Book</a> 
                          </li>
                          {/*
                          <li>   <a href="#email2" 
                              role="tab" 
                              data-toggle="tab"
                              className="nav-link mt-2 "> 
                              <i className="fas fa-user mr-1"></i>
                            Email2</a> 
                            </li>*/}
                      </ul> 
                     </li>  
                    </li>
                    <li className="nav-item">
                      <li className="dropdown"> 
                      <a className="dropdown-toggle nav-link"
                        data-toggle="dropdown"> 
                        <i className="fas fa-address-book mr-1"></i>
                        IP <b className="caret">      
                        </b></a> 
                        <ul className="dropdown-menu p-2"> 
                            <li> <a href="#ip1" 
                                  role="tab" 
                                  data-toggle="tab"
                                  className="nav-link mt-2 "> 
                                  <i className="fas fa-user mr-1"></i>
                              Rule Book</a> 
                            </li>
                              {/*
                              <li>   <a href="#ip2" 
                                  role="tab" 
                                  data-toggle="tab"
                                  className="nav-link mt-2 "> 
                                  <i className="fas fa-user mr-1"></i>
                                IP2</a> 
                                </li>
                              */}
                        </ul> 
                      </li>  
                    </li>
                    <li className="nav-item">
                    <li className="dropdown"> 
                    <a className="dropdown-toggle nav-link"
                      data-toggle="dropdown"> 
                      <i className="fas fa-address-book mr-1"></i>
                      Phone <b className="caret">      
                      </b></a> 
                    <ul className="dropdown-menu p-2"> 
                    <li> <a href="#phone1" 
                              role="tab" 
                              data-toggle="tab"
                              className="nav-link mt-2 "> 
                              <i className="fas fa-user mr-1"></i>
                          Rule Book</a> 
                          </li>
                          {/*
                          <li>   <a href="#phone2" 
                              role="tab" 
                              data-toggle="tab"
                              className="nav-link mt-2 "> 
                              <i className="fas fa-user mr-1"></i>
                            3216549878</a> 
                            </li>*/}
                      </ul> 
                     </li> 
                    </li>
                   
                  </ul>
                </div>



                {/* <!-- actual data which is live start --> */}
                <div className="card-body tab-content border-0. ">
                {/* demo  */}
                <div className="tab-pane active" id="email1">
                    {/*<h6 className="mt-5 mb-2">Rule Book for Email Verification</h6>
                    <hr />*/}
                    <div>
                      <h1 className="my-3"> Rule Book </h1>
                    </div>
                    <hr />
                      <br/>
                      <b>Spf-strict</b> <br/>
                      True – It happens when the return-path value is checked where return-path is the email address that receiving servers use to notify the sending mail server of delivery problems, like bounces.
                      <br/><br/>
                      <b>Demark Enforced</b> <br/>
                      True – It happens when the email address fails if SPF or DKIM fails or not present, when the emails are verified.
                      <br/><br/>
                      <b>Spoofable</b> <br/>
                      True – It happens when we come across forged sender email (e.g. the envelope from is different than the header from).
                      <br/><br/>
                      <b>Valid – MX</b> <br/>
                      True – It happens when we come across a point when the mail server will try to find the MX records for the requested domain, either the domain is not found or the email username is not found in cases.
                      <br/><br/>
                      <b>Safe to Send</b> <br/>
                      False –   It happens if the email address is not safe for deliverability.
                      <br/><br/>
                      <b>Disposable</b> <br/>
                      True – It happens when an email is generated from any of the temporary email service tools. Common providers of disposable emails include Mailinator, Guerilla Mail, AirMail, and 10 Minute Mail.
                      <br/><br/>
                      <b>Deliverable</b> <br/>
                      False – It happens when the receiving email server is temporarily unavailable, overloaded or simply couldn’t be found. It can also happen because of other reason like a non-existent email address.
                      <br/><br/>
                      <b>Domain Exists</b> <br/>
                      False – It happens when the domain is not found in the MX records when the emails are sent.
                      <br/><br/>
                      <b>Reputation</b> <br/>
                      it is calculated via senderscore.org<br/>
                      if score less than 60 = low<br/>
                      if score more than 60 and less than 80 = medium<br/>
                      if score more than 80 = high<br/>
                      <br/>
                      <b>Suspicious</b> <br/>
                      True - the sent email messages contain viruses, phishing scams, malicious software etc.
                      <br/><br/>
                      <b>Blacklisted</b> <br/>
                      True - If your emails get marked as spam, or ISPs see a sudden increase in email volume coming from your domain, you could get blacklisted.
                      <br/><br/>
                      <b>Malicious Activity</b> <br/>
                      True - The sender address isn’t correct or the sender doesn’t seem to know the addressee or Embedded links have weird URLs or the language, spelling, and grammar are incorrect or the content is bizarre or unbelievable
                      <br/><br/>
                      <b>Spam</b> <br/>
                      True - might come from unrecognizable senders or from a sender who sends unsolicited emails in huge volumes. 
                      <br/><br/>
                      <b>Suspicious_tld</b> <br/>
                      True - the ratio of bad to good domains may be higher than average or some large TLDs may have a large number of bad domains as a result of the large size of their domain collection
                      <br/><br/>
                      <b>Credentials Leaked</b> <br/>
                      True – login ID and passwords leaked or disclosed.
                      <br/><br/>
                      <b>Data Breached</b>  <br/>
                      True - confidential data compromised due to following:<br/>
                      	Hacking<br/>
                      	Malware<br/>
                      	Phishing<br/>
                      	An insider attacks<br/>
                      	Human errors
                      <br/>
                  </div>

                  
                {/* content for email2 */}
                <div className="tab-pane " id="email2">
                    <h6 className="mt-5 mb-2"> SETTINGS For Email 2</h6>
                    <hr />
                    <div>
                      <h1 className="my-3"> Main heading goes here For Email 2 </h1>
                      <p> write all the information reagardign the form</p>
                    </div>
                    <hr />
                  </div>
                {/* <!-- //actual  IP data --> */}
               <div className="tab-pane " id="ip1">
               <div>
                      <h1 className="my-3"> Rule Book </h1>
                    </div>
                    <hr />
                      <br/>
                      <b>Message</b> <br/>
                      Listed ! – It happens when we detect the IP being blacklisted on multiple platforms and API's from where we fetch results. 
                      <br/><br/>
                  </div>
                  
                {/* content for IP2 */}
                <div className="tab-pane " id="ip2">
                    <div>
                      <h1 className="my-3"> Rule Book </h1>
                    </div>
                    <hr />
                      <br/>
                      <b>Spf-strict</b> <br/>
                      True – It happens when the return-path value is checked where return-path is the email address that receiving servers use to notify the sending mail server of delivery problems, like bounces.
                      <br/><br/>

                  </div>
                  {/* <!-- //actual Phone Number data --> */}
                  <div className="tab-pane " id="phone1">
                  <div>
                      <h1 className="my-3"> Rule Book </h1>
                    </div>
                    <hr />
                      <br/>
                      <b>Is Valid</b> <br/>
                      False – It happens when we detect that the Phone Number has been found as spam on multiple platforms and API's from where we fetch results.
                      <br/><br/>
                  </div>

                  
                {/* content for phone2 */}
                <div className="tab-pane " id="phone2">
                    <h6 className="mt-5 mb-2"> SETTINGS For phone 2</h6>
                    <hr />
                    <div>
                      <h1 className="my-3"> Main heading goes here For phone 2 </h1>
                      <p> write all the information reagardign the form</p>
                    </div>
                    <hr />

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

export default Documentation;
