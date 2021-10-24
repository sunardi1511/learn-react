import React, { Component } from "react";
import "./BlogPost.css";
import Post from "../Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost:{
      id:1,
      title:'',
      body:'',
      userId: 1
    }
  };

  getPosAPI = () => {
    axios.get("http://localhost:3004/posts?_sort=id&_order=desc").then((res) => {
      this.setState({
        post: res.data,
      });
    });
  };

  postDataToAPI = () => {
    axios.post('http://localhost:3004/posts',this.state.formBlogPost).then((res) => {
      console.log(res);
      this.getPosAPI();
    }, (err) => {
    console.log(`erro`, err)})
  }

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPosAPI()
    });
  };

  handleFormChange = (event) => {
    console.log(`form Change`, event.target.name)
    let fromBlogPostNew = {...this.state.formBlogPost};
    let timestamp = new Date().getTime();
    fromBlogPostNew['id'] = timestamp;
    fromBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: fromBlogPostNew
    }, () => {
      console.log(`value obj formBlogPost`, this.state.formBlogPost)
    })
  }

  handleSubmit = () => {
    this.postDataToAPI();
  }

  componentDidMount() {
    this.getPosAPI();
  }

  render() {
    return (
      <>
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange}/>
          <label htmlFor="body">blog content</label>
          <textarea name="body" id="body" cols="30" rows="10" placeholder="add body" onChange={this.handleFormChange}></textarea>
          <button className="btn-submit"onClick={this.handleSubmit}>simpan</button>
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
