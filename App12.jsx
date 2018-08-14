import React from 'react';

//example 12
function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => <ListItem key={number.toString()} value={number}/>)}
    </ul>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {numbers: [1, 2, 3, 4, 5]};
  };

  render() {
    return (
      <NumberList numbers={this.state.numbers}/>
    );
  }
}

export default App;