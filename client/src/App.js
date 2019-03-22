import React, { Component } from 'react';
import PostList from './components/postList'
import PostSubmit from './components/postSubmit'
import Maximillian from './components/maximillian';

class App extends Component {
  
  
  render() {
    const user = {
      name: "Anna",
      hobbies: ['Sports', 'reading', 'shopping', 'knitting']
    }
    return (
      <div className="App">
      <PostList name={'Tim'} user={user}/>
      <PostSubmit/>
      <Maximillian age={32}/>
      </div>
    );
  }
}

export default App;
