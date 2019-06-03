import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.component'
import BlogLanding from './components/BlogLanding.component'
import ViewBlog from './components/ViewBlog.component'
import CreateBlog from './components/CreateBlog.component'
import EditBlog from './components/EditBlog.component'
import Register from './components/Register.component';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <Route path="/" exact component={BlogLanding}/>
          <Route path="/post/:id" component={ViewBlog} />
          <Route path="/new" component={CreateBlog} />
          <Route path="/edit/:id" component={EditBlog} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    )
  }
}