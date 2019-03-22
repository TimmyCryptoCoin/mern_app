import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
  
  state = {
    posts: []
  }
  
  componentDidMount() {
    axios.get(`/posts`)
      .then(res => {
        const posts = res.data;
        console.log(posts)
        this.setState({ posts });
      })
    .catch(err => console.log(err))
  }


  
  render() {
    console.log(this.props)
    return (
      <div className="App">
      <h1>Hi</h1>
      <p>Name: {this.props.user.name}</p>
      <ul>
        { this.state.posts.map(post => <li>{post.content}</li>)}
      </ul>
      <hr/>
      <h4>Hobbies</h4>
      <ul>
          {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
      </ul>
      </div>
    );
  }
}

export default PostList;
