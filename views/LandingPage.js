import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <><div className="App">
        <header className="App-header" id="root">
          <h1>Drug Counterfeit</h1>
          {content}
        </header>
      </div>
      <button className='Start'> Get Started </button>
  </>
    );
  }
}

exports.Landing = class extends React.Component {
  render() {
    return (
      <div className='Horizontal-line'>
          <br />_________________________________
          <br />This website allows user to ....
      </div>
    )
  }
}

export default exports;