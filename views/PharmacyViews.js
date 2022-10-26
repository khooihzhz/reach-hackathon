import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Pharmacy">
        <h1>
          Pharmacy
        </h1>
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {
  render() {
      const {parent} = this.props;
      const {ctcInfoStr} = this.state || {};
      return (
          <>
          <div>
              Please paste the contract info to attach to:
          </div>
          <textarea onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}/>
          <Button variant="contained" onClick={() => parent.attach(ctcInfoStr)}>Attach</Button>
          </>
      )
  }
}

exports.Attaching = class extends React.Component {
  render() {
    return (
      <div>
        Attaching.......
      </div>
    )
  }
}

exports.AcceptTerms = class extends React.Component {
  render() {
    const { parent, price } = this.props;
    return (
      <div>
        The price of the drugs is {price}
        <Button variant="contained" onClick={() => {
          parent.termsAccepted();
          }}>Accept Term </Button>
      </div>
    )
  }
}

exports.Market = class extends React.Component {
  render() {
    const {parent, price, drugSupply} = this.props;
    const numOfDrugs = (this.state || {}).numOfDrugs;
    return (
      <>
        <div>
          The price of drugs is {price} 
        </div>
        <div>
          The drug supply is {drugSupply}
        </div>
        <div style={{ marginTop: '10px'}}>
          <TextField id="filled-basic" label="numOfDrugs" variant="filled" 
          onChange={(e) => this.setState({numOfDrugs: e.currentTarget.value})} />
        </div>
        
        <div>
          <Button variant="contained" 
            onClick={() => parent.buyDrug(parseInt(numOfDrugs))}
          > Buy Drugs </Button>
        </div>
      </>
    )
  }
}

export default exports;