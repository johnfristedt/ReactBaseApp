import React, { Component } from 'react'

class Post extends Component {
  constructor() {
    super();
    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    fetch('http://dummyapi.kodalagom.se/api/posts/' + this.props.params.id)
    .then((response) => response.json())
    .then((post) => {
      this.setState({
        post: post
      })
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.post.title}</h1>
        <h3>
          {this.state.post.author} {new Date(this.state.post.postDate).toDateString()}
        </h3>
        <p>{this.state.post.body}</p>
      </div>
    )
  }
}

export default Post
