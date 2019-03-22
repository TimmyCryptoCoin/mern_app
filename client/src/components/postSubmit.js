import React, { Component } from 'react';
import axios from 'axios';

class PostSubmit extends Component {
  
  state = {
    content: ''
  }
  
  handleChange = event => {
    this.setState({ content: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const content = this.state.content;

    axios.post(`posts`, { content })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

}
  
  render() {
    return (
      <div>
        <form method='post' onSubmit={this.handleSubmit}>
          <label>
            Post content:
            <input type="text" name="content" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default PostSubmit;