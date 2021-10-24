import React, { Component } from "react";
import "./BlogPost.css";
import Post from "../Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
  };

  getPosAPI = () => {
    axios.get("http://localhost:3004/posts").then((res) => {
      this.setState({
        post: res.data,
      });
    });
  };

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPosAPI()
    });
  };

  componentDidMount() {
    this.getPosAPI();
  }

  render() {
    return (
      <>
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="add title"/>
          <label htmlFor="body">blog content</label>
          <textarea nama="body" id="body" cols="30" rows="10" placeholder="add body"></textarea>
          <button className="btn-submit">simpan</button>
        </div>
        {
          this.state.post.map((pos) => {
            return <Post key={pos.id} data={pos} remove={this.handleRemove} />;
        })}
      </>
    );
  }
}

export default BlogPost;
