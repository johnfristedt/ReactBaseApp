import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('http://dummyapi.kodalagom.se/api/posts')
      .then((response) => response.json())
      .then((posts) => {
        this.setState({
          posts: posts
        })
      });
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map((post, key) =>
          <div key={key}>
            <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
            <p>{post.body}</p>
          </div>
        )}
      </div>
    )
  }
}

export default Home
