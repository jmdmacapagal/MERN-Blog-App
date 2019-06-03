import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
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
                            
                            <div className="modal fade" id="signInModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Sign-in now, We missed yah!</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                placeholder="Username"
                                                />
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                type="password" 
                                                className="form-control"
                                                placeholder="Password"
                                                />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-success">Sign In!</button>
                                </div>
                                </div>
                            </div>
                            </div>
                           
                            <Link to='/register' className="nav-link">Register</Link>
                        </div>
                </div>
            </div>
        </nav>
    )
} 