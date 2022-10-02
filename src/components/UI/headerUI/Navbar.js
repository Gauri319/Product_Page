import React from 'react'
import './Navbar.css'
import MySvg from '../MySvg';
import Shop from '../../pages/Shop';
import Blog from '../../pages/Blog';
import Contact from '../../pages/Contact';
import About from '../../pages/About';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



function Navbar(props) {
        return (
                <div className='main-container'>
                        <div className='navbar-container'>
                        <div className='navbar-brand'>
                                <h3>AccioJob</h3>
                            </div>
                            <div className='navbar-collapse'>
                                <div className='list'>
                                    {/* this is to change the rout of the url */}
                                    <Router>
                                            <div>
                                               <nav>
                                                  <ul>
                                                    <li>
                                                        <Link to="/#">Home</Link>
                                                     </li>
                                                    <li>
                                                       <Link to="/shop">Shop</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/about">About</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/blog">Blog</Link>
                                                    </li>
                                                     <li>
                                                        <Link to="/contact">Contact</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/pages">Pages</Link>
                                                    </li>                                                
                                                 </ul>
                                                </nav>                                                
                                                    {/*this code for swithch from one page to another  */}
                                                <Switch>
                                                    <Route path="/about">
                                                        <About/>
                                                    </Route>
                                                    <Route path="/shop">
                                                        <Shop/>
                                                    </Route>
                                                    <Route path="/blog">
                                                        <Blog/>
                                                    </Route>
                                                    <Route path="/contact">
                                                        <Contact/>
                                                    </Route>
                                                 </Switch>
                                        </div>
                                        </Router>
                                </div>
                                <div className='icon'>
                                    <div className='Authentication'>
                                        <Router>
                                        <ul>
                                            <li>
                                                 <Link to="/">{MySvg.user} <span className='item'>Login/Register</span></Link>
                                             </li>
                                             <li>
                                                 <Link to="/">{MySvg.search}</Link>
                                             </li>
                                            <li>
                                                <Link to="">{MySvg.cart}<span className='count'>{props.count}</span></Link>
                                            </li>
                                            <li>
                                                <Link to="/blog">{MySvg.like}<span className='count'>{1}</span></Link>
                                            </li>
                                                   
                                         </ul>
                                        </Router>
                                    
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
         )
}

export default Navbar