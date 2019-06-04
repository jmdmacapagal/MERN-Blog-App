/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Navbar extends Component {
    state = {
    	username: '',
    	password: ''
    }

    changeHandler = e => {
    	const { name, value } = e.target;
    	this.setState({
    		[name]: value
    	});
    }

    submitHandler = e => {
    	e.preventDefault();
    	const userDetails = {...this.state};
    	axios.post('http://localhost:4000/user/login', userDetails)
    		.then(response => {
    			console.log(response);
    		})
    		.catch(error => {
    			console.log(error);
    		});

    	this.setState = {
    		username: '',
    		password: ''
    	};
    }

    render() {
    	return (
    		<nav className="navbar navbar-expand-lg navbar-light bg-light">
    			<div className="container">
    				<a className="navbar-brand" href="/">
    					<i className="fas fa-signature"></i>
    				</a>
    				<Link to="/" className="navbar-brand">Blog-App</Link>

    				<div className="collapse navbar-collapse">
    					<ul className="navbar-nav mr-auto">
    						<li className="nav-item">
    							<Link to='/' className="nav-link">Blogs</Link>
    						</li>
    						<li className="nav-item">
    							<Link to='/new' className="nav-link">Create Entry</Link>
    						</li>
    					</ul>
    					<div className="navbar-nav">
    						<button type="button" className="btn btn-outline-primary mx-1 nav-item" data-toggle="modal" data-target="#signInModal">
                                Sign in
    						</button>
                            
    						<div className="modal fade" id="signInModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    							<div className="modal-dialog" role="document">
    								<div className="modal-content">
    									<div className="modal-header">
    										<h5 className="modal-title" id="exampleModalLongTitle">Sign-in now, We missed yah!</h5>
    										<button type="button" className="close" data-dismiss="modal" aria-label="Close">
    											<span aria-hidden="true">&times;</span>
    										</button>
    									</div>
    									<div className="modal-body">
    										<form onSubmit={this.submitHandler}>
    											<div className="form-group">
    												<input 
    													type="text" 
    													className="form-control"
    													placeholder="Username"
    													name="username"
    													value={this.state.username}
    													onChange={this.changeHandler}
    												/>
    											</div>
    											<div className="form-group">
    												<input 
    													type="password" 
    													className="form-control"
    													placeholder="Password"
    													name="password"
    													value={this.state.password}
    													onChange={this.changeHandler}
    												/>
    											</div>

    											<div className="form-group">
    												<button type="submit" className="btn btn-success" data-dismiss="modal">Sign In!</button>
    											</div>

    										</form>
    									</div>
    									<div className="modal-footer">
                                    
    									</div>
    								</div>
    							</div>
    						</div>
                           
    						<Link to='/register' className="nav-link">Register</Link>
    					</div>
    				</div>
    			</div>
    		</nav>
    	);
    }
} 