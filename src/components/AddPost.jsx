import React, { Component } from "react";
import { firestore, auth } from "../firebase";

class AddPost extends Component {
  state = { title: "", content: "" };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, content } = this.state;
    const { uid, displayName, email, photoURL } = auth.currentUser || {};

    const post = {
      title,
      content,
      user: {
        uid,
        displayName,
        email,
        photoURL,
      },
      favorites: 0,
      comments: 0,
      createdAt: new Date(),
    };

    try {
      firestore.collection("posts").add(post);
    } catch (error) {
      console.error(error);
    }
    this.setState({ title: "", content: "" });
  };

  render() {
    const { title, content } = this.state;
    return (
      <React.Fragment>
        <h2 style={{ textAlign: "center" }} id="create">Create a Post</h2>
        <form onSubmit={this.handleSubmit} className="AddPost">
          <center>
          <input
            type="text"
            class="form-control"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            class="form-control"
            name="content"
            placeholder="Body"
            value={content}
            onChange={this.handleChange}
          />
          <button className="create" type="submit" class="btn btn-primary">Publish</button></center>
        </form>
      </React.Fragment>
      
    );
  }
}

export default AddPost;
