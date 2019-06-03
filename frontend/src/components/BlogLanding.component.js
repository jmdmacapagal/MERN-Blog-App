import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TextTruncate from 'react-text-truncate'
import axios from 'axios';

const BlogPost = props => {
  const date = new Date(props.post.createdAt).toDateString()
  
  return (
      <div className="card text my-4">
        <div className="card-header">Entry By: {props.post.author}</div>
        <div className="card-body">
          <h4 className="card-title">{props.post.title}</h4>
            <TextTruncate className="card-text"
                    line={3}
                    truncateText="…"
                    text={props.post.body}
                    // textTruncateChild={<a href="#">Read on</a>}  
                />
          <Link to={`/post/${props.post._id}`} className="btn btn-primary read-more-button">Read More...</Link>
        </div>
        <div className="card-footer text-muted">Created: {date}</div>
      </div>
  )
}

export default class BlogLanding extends Component {
  state = {
    blogPosts: [] 
  }

  componentDidMount() {
    axios.get('http://localhost:4000/blogs')
         .then(response => {
          this.setState({
            blogPosts: response.data
          })
        })
         .catch (error => {
          console.log(error)
        })
  }

  componentDidUpdate() {
    axios.get('http://localhost:4000/blogs')
         .then(response => {
          this.setState({
            blogPosts: response.data
          })
        })
         .catch (error => {
          console.log(error)
        })
  }

  blogPostList = () => {
    const data = this.state.blogPosts.map((post, i) => {
      return <BlogPost key={i} post={post} />
    })

    return data.sort((a, b) => {
      if (a.props.post.createdAt < b.props.post.createdAt) {
        return 1
      } else if (a.props.post.createdAt > b.props.post.createdAt) {
        return -1
      } else {
        return 0
      }
    })

  }

  render() {
    return (
        <div>
          <div className="post-feature">
              {this.blogPostList()}
          </div>
        </div>
    )
  }
}