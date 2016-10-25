import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Home from './views/home.js'
import About from './views/about.js'
import Post from './views/post.js'
import Nav from './components/nav.js'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/about' component={About} />
          <Route path='/post/:id' component={Post} />
        </Route>
      </Router>
    )
  }
}

const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
)

export default App
