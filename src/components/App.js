import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  render() {
    return(
      <div>
        <button onClick={()=>this.setState({name: 'somin'})}>click me</button>
        <h1>hello world!!!! {this.state.name}</h1>
      </div>
    )
  };
}

export default App;
