import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './components/Home'

export default class extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    )
  }
}