import React, { Component } from "react";
import "./BlogPost.css";
import Post from "../Post/Post";
import axios from 'axios';

class BlogPost extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //   });
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        this.setState({
            post: res.data
        })
    } )
  }

  render() {
    return (
      <>
        <p className="section-title">Blog Post</p>
        {this.state.post.map((post) => {
          return <Post title={post.title} desc={post.body} />;
        })}
      </>
    );
  }
}

export default BlogPost;
