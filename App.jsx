import React from 'react';

class App extends React.Component {
  render() {
    let i = 1;
    const myStyle = {
      fontSize: 25,
      color: '#FF0000'
    };
    return (
      <div>
        {//End of the line Comment...}
          {/*Multi line comment...*/}
        <h1 style={{color:'#FF00FF'}}>Header</h1>
        <h1 style = {myStyle}>Styled Header</h1>
        <h1>i === 1 => {i === 1 ? 'True!' : 'False'}</h1>
        <h2>Content</h2>
        <p data-myattribute = "somevalue">This is the content!!! 1+1={1+1}</p>
      </div>
    );
  }
}
export default App;