import React,{useState} from 'react'
import MySvg from '../UI/MySvg';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import './Footer.css';

function Footer() {

    const [UserEmail, setuserEmail]=useState('');


    function handleEmail(e){
      setuserEmail(e.target.value);
    }


//  this function used to store  the user emails in realtime database
    const handleSubmit=((event)=>{
      event.preventDefault();
      if(UserEmail===''&& UserEmail.length<10 && UserEmail.includes('@')){
        alert('Please!Enter Valid Email')
        return;
      }
      fetch('https://user-email-f4c44-default-rtdb.asia-southeast1.firebasedatabase.app/Email.json', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json;',
        },
        body: JSON.stringify({
           UserEmail:UserEmail
        })
      })
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
     })

     setuserEmail('');
})


  return (
      <div className='footer-conatiner'>
        <div>
            <div className='footer-header'>
              <div  className='container-section'>
                <div className='header-row-section'>
                     <div className='header-heading'>
                         <h3>Acciojob</h3>
                      </div>
                    <div  className='header-icon-container'>
                        <div className='header-icon'>
                            <div className='facebook'>{MySvg.facebook}</div>
                            <div className='insta'>{MySvg.instagram}</div>
                            <div className='twitter'>{MySvg.twitter}</div>
                        </div>
                    </div>
                </div>
              </div>
               
            </div>
            <div className='footer-body'>
              <div className='container-section'>
                <div className='body-row-section'>
                    <div className='column'>
                        <div className='heading-section'>
                            <h5>Company Info</h5>
                        </div>
                        <div className='body'>
                          <Router>
                              <Link to="/#">About Us</Link>
                              <Link to="/#">Carrier</Link>
                              <Link to="/#">We are hiring</Link>
                              <Link to="/#">Blog</Link>
                          </Router>

                        </div>
                    </div>

                    <div className='column'>
                        <div className='heading-section'>
                            <h5>Legal</h5>
                        </div>
                        <div className='body'>
                          <Router>
                              <Link to="/#">About Us</Link>
                              <Link to="/#">Carrier</Link>
                              <Link to="/#">We are hiring</Link>
                              <Link to="/#">Blog</Link>
                          </Router>

                        </div>

                    </div>

                    <div className='column'>
                           <div className='heading-section'>
                                <h5>Features</h5>
                            </div>
                            <div className='body'>
                              <Router>
                                  <Link to="/#">Business Marketing</Link>
                                  <Link to="/#">User Analytic</Link>
                                  <Link to="/#">Live Chat</Link>
                                  <Link to="/#">Unlimited Support</Link>
                              </Router>

                            </div>
                    </div>

                    <div className='column'>
                            <div className='heading-section'>
                                <h5>Resources</h5>
                            </div>
                            <div className='body'>
                              <Router>
                                  <Link to="/#">IOS & Android</Link>
                                  <Link to="/#">Watch a Demo</Link>
                                  <Link to="/#">Customers</Link>
                                  <Link to="/#">API</Link>
                              </Router>

                            </div>
                    </div>
                    <div  className='form-section'>
                            <div className='heading-section'>
                                <h5>Get In Touch</h5>
                            </div>
                            <div className='form'>
                              <form>
                                <input type='text' placeholder='Your Email' onChange={handleEmail} value={UserEmail}></input>
                                <button type='button' onClick={handleSubmit}>Subscribe</button>
                                <p>Lorem impsum dolor amit</p>
                              </form>
                            </div>
                    </div>
                        
                </div>
              </div>

            </div>
            <div className='footer-base'>
                <div className='container-section'>
                    <div className='footer-row-section'>
                        <div className='base-cotent'>
                          <p>Made With ❤️ at Acciojob</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>        
      </div>
  )
}

export default Footer