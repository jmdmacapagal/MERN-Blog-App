import React, { Component } from 'react'
import axios from 'axios'

export default class CreateBlog extends Component {
  state = {
    title: '',
    body: '',
    author: ''
  }

  changeHandler = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    const newEntry = { ...this.state }
    axios.post('http://localhost:4000/blogs/new', newEntry )
         .then(response => {
           console.log(response.data)
         })
         .catch(error => {
           console.log(error)
         })

    this.setState({
        title: '',
        body: '',
        author: ''  
    })

    this.props.history.push('/')
  }

  render() {
    return (
        <div className="new-entry">
          <h3>Create New Entry</h3>
          <form onSubmit={this.submitHandler}>
            <div className="form-group form-row">
              <label class="col-2">Blog Title:</label>
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
              <label class="col-2">Author:</label>
              <input 
                type="text"
                className="form-control col"
                name="author"
                value={this.state.author}
                onChange={this.changeHandler}
                />
            </div>

            <div className="form-group create-blog-button">
              <button type="submit" className="btn btn-primary">Share My Thoughts!</button>
            </div>

          </form>
        </div>
    )
  }
}