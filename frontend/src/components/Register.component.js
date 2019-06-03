import React, { Component } from 'react'
import axios from 'axios'


export default class Register extends Component {
    state = {
        username: '',
        password: '',
        rePassword: '',
        email: ''
    }

    changeHandler = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    submitHandler = () => {
        if (this.state.password !== this.state.rePassword) {
            throw Error('Password not match')
        }

        const { username, password, email } = { ...this.state}
            axios.post('http://localhost:4000/user/register', { username, password, email})
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            this.setState({
                username: '',
                password: '',
                rePassword: '',
                email: ''
            })
            this.props.history.push('/')
    }

    render() {
        return (
            <div className="container">
                <form className="register-form" onSubmit={this.submitHandler}>
                    <h3>Register to Our <br /> Happy Community Blog</h3>
                    <div className="form-group">
                        <input 
                            type="text"
                            placeholder="Username"
                            className="form-control"
                            name="username"
                            value={this.state.username}
                            onChange={this.changeHandler}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            name="password"
                            value={this.state.password}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password"
                            placeholder="Re-Type Password"
                            className="form-control"
                            name="rePassword"
                            value={this.state.rePassword}
                            onChange={this.changeHandler}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="email"
                            placeholder="E-mail Address"
                            className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={this.changeHandler}
                        />
                    </div>

                    <div className="register-button-group">    
                        <div className="form-group mx-1">
                            <button type="submit" className="btn btn-primary btn-block">Register</button>
                        </div>

                        <div className="form-group mx-1">
                            <button type="submit" className="btn btn-danger btn-block">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}