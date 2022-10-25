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

          <button 
        className='Start' onClick={() => content.getStarted()}> Get Started </button>
      </div>
    )
  }
}

exports.DistributorOrPharmacy = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        Please select a role:
        <br />
        <p>
          <button className='DistributorButton'
            onClick={() => parent.selectDistributor()}
          >Distributor</button>
          
        </p>
        <p>
          <button className='PharmacyButton'
            onClick={() => parent.selectPharmacy()}
          >Pharmacy</button>
          
        </p>
      </div>
    );
  }
}

export default exports;