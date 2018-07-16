import React, { Component } from 'react';
import Post from './Post';

class Blog extends Component {

  render() {
    return (
        <div className="row justify-content-center blog-wrap">
            <Post num={Math.floor(Math.random() * (100) )} />
            <Post num={Math.floor(Math.random() * (100) )} />
            <Post num={Math.floor(Math.random() * (100) )} />
            <Post num={Math.floor(Math.random() * (100) )} />
            <Post num={Math.floor(Math.random() * (100) )} />
            <Post num={Math.floor(Math.random() * (100) )} />
            <Post num={Math.floor(Math.random() * (100) )} />
            <Post num={Math.floor(Math.random() * (100) )} />
        </div>
    );
  }
}

export default Blog;
