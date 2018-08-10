import React from 'react';

//example 7
/*class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    };

    this.setStateHandler = this.setStateHandler.bind(this);
  };
  setStateHandler() {
    let item = "setState...";
    let myArray = this.state.data.slice();
    myArray.push(item);
    this.setState({data: myArray})
  };
  render() {
    return (
      <div>
        <button onClick = {this.setStateHandler}>SET STATE</button>
        <h4>State Array: {this.state.data}</h4>
      </div>
    );
  }
}*/

//example 7-2
class App extends React.Component {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };
  forceUpdateHandler() {
    this.forceUpdate();//Sometimes we might want to update the component manually.
  };
  render() {
    return (
      <div>
        <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
        <h4>Random number: {Math.random()}</h4>
      </div>
    );
  }
}

export default App;