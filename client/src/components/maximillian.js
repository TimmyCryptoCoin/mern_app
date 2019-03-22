import React, { Component } from 'react';

class Maximillian extends Component {
  constructor(props) {
        super();
        this.state = {
            age: props.age
        }

        

  }

  onMakeOlder() {
    this.setState({
        age: this.state.age + 3
    })
}
    
    
    render() {
      return (
        <div>
            <hr/>
            <button onClick={() => this.onMakeOlder()}>Make me older</button>
            <p>Age is {this.state.age}</p>
        </div>
      );
    }
  }
  
  export default Maximillian;