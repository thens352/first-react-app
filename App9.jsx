import React from 'react';

//example 9
/*class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'Initial data...'
    };
    this.updateState = this.updateState.bind(this);
  };
  updateState() {
    this.setState({data: 'Data updated...'})
  }
  render() {
    return (
      <div>
        <button onClick = {this.updateState}>CLICK</button>
        <h4>{this.state.data}</h4>
      </div>
    );
  }
}*/

//example 9-2
/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerID);
  }

  tick() {
    console.log('tick');
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}*/

//example 9-3
/*class Content extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.updateStateProp}>CLICK</button>
        <h3>{this.props.myDataProp}</h3>
      </div>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'Initial data...'
    };

    this.updateState = this.updateState.bind(this);
  };

  updateState() {
    this.setState({data: 'Data updated from the child component...'})
  };

  render() {
    return (
      <div>
        <Content myDataProp={this.state.data} updateStateProp={this.updateState}/>
      </div>
    );
  };
}*/

//example 9-4
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;