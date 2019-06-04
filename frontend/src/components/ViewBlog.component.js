import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class ViewBlog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
			author: '',
			createdAt: ''
		};
	}

	componentDidMount() {
		axios.get('http://localhost:4000/blogs/' + this.props.match.params.id)
			.then(response => {
				const {title, body, author, createdAt } = response.data;
				this.setState({
					title: title,
					body: body,
					author: author,
					createdAt: createdAt
				});
			})
			.catch (error => {
				console.log(error);
			}); 
	}

	render() {
		const date = new Date(this.state.createdAt).toDateString();
		return (
			<div className="card text my-4">
				<div className="card-header">Entry By: {this.state.author}</div>
				<div className="card-body">
					<h4 className="card-title">{this.state.title}</h4>
					<p className="card-text">{this.state.body}</p>
					<Link to={`/edit/${this.props.match.params.id}`} className="btn btn-warning btn-block">Edit</Link>
				</div>
				<div className="card-footer text-muted">
                Created: {date}
                
				</div>
			</div>
		);
	}
}