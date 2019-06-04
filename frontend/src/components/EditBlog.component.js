/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import axios from 'axios';

export default class CreateBlog extends Component {
  state = {
  	title: '',
  	body: '',
  	author: ''
  }

  componentDidMount() {
  	axios.get('http://localhost:4000/blogs/' + this.props.match.params.id)
  		.then(response => {
  			const { title, body, author} = response.data;
  			this.setState({
  				title: title,
  				body: body,
  				author: author
  			});
  		})
  		.catch(error => {
  			console.log(error);
  		});
  }

  changeHandler = e => {
  	const { name, value } = e.target;
  	this.setState({
  		[name]: value
  	});
  }

  deleteHandler = e => {
  	e.preventDefault();
  	axios.delete('http://localhost:4000/blogs/' + this.props.match.params.id)
  		.then(response => console.log(response))
  		.catch(error => console.log(error));

  	this.props.history.push('/');

  	this.setState({
  		title: '',
  		body: '',
  		author: ''
  	});
  }

  submitHandler = e => {
  	e.preventDefault();
  	const updatedBlog = { ...this.state };
  	axios.put('http://localhost:4000/blogs/edit/' + this.props.match.params.id, updatedBlog)
  		.then(response => {
  			console.log(response);
  		})
  		.catch(error => {
  			console.log(error);
  		});

  	this.setState({
  		title: '',
  		body: '',
  		author: '',
  		createdAt: ''
  	});

  	this.props.history.push('/');
  }

  render() {
  	return (
  		<div className="new-entry">
  			<h3>Update Your Entry</h3>
  			<form onSubmit={this.submitHandler}>
  				<div className="form-group form-row">
  					<label className="col-2">Blog Title:</label>
  					<input 
  						type="text"
  						className="form-control col"
  						name="title"
  						value={this.state.title}
  						onChange={this.changeHandler}
  					/>
  				</div>

  				<div className="form-group">
  					<label>Whats up?</label>
  					<textarea 
  						className="form-control"
  						name="body"
  						rows="10"
  						value={this.state.body}
  						onChange={this.changeHandler}
  					/>
  				</div>

  				<div className="form-group form-row">
  					<label className="col-2">Author:</label>
  					<input 
  						type="text"
  						className="form-control col"
  						name="author"
  						value={this.state.author}
  						onChange={this.changeHandler}
  					/>
  				</div>

  				<div className="form-group button">
  					<button type="submit" className="btn btn-primary">Update</button>
  					<button type="submit" className="btn btn-danger" onClick={this.deleteHandler}>Delete</button>
  				</div>

  			</form>
  		</div>
  	);
  }
}