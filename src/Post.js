import React, { Component } from 'react';


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    }
  };

  componentDidMount() {
    var root = 'https://jsonplaceholder.typicode.com/posts/' + this.props.num;
    fetch(root)
    .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({post: data})
        })
  }

  render() {
    return (
            <div className="col-3">
              <h5>{this.state.post.title}</h5>
              <p>{this.state.post.body}</p>
              <p><sub>Post by user: {this.state.post.userId} | Post number: {this.state.post.id}</sub></p>
            </div>
    );
  }
}

export default Post;
