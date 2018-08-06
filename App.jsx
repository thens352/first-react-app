import React from 'react';

//example 1
/*class App extends React.Component {
  render() {
    let i = 1;
    const myStyle = {
      fontSize: 25,
      color: '#FF0000'
    };
    return (
      <div>
        <h1 style={{color:'#FF00FF'}}>Header</h1>
        <h1 style = {myStyle}>Styled Header</h1>
        <h1>i === 1 => {i === 1 ? 'True!' : 'False'}</h1>
        <h2>Content</h2>
        <p data-myattribute = "somevalue">This is the content!!! 1+1={1+1}</p>
      </div>
    );
  }
}*/
//end example 1---------------------------------------------------------------------

//example 2
/*class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>Content</h2>
        <p>The content text!!!</p>
      </div>
    );
  }
}*/
//end example 2-----------------------------------

//example 3
/*
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:
        [
          {
            "id":1,
            "name":"Foo",
            "age":"20"
          },
          {
            "id":2,
            "name":"Bar",
            "age":"30"
          },
          {
            "id":3,
            "name":"Baz",
            "age":"40"
          }
        ]
    }
  }
  render() {
    return (
      <div>
        <Header/>
        <table>
          <tbody>
          {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
          </tbody>
        </table>
      </div>
    );
  }
}*/
//end example 3-----------------------------------

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "Header from state...",
      content: "Content from state..."
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <h2>{this.state.content}</h2>
      </div>
    );
  }
}

export default App;