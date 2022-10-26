import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const exports = {};

exports.Wrapper = class extends React.Component {
    render() {
      const {content} = this.props;
      return (
        <div className="Distributor">
          <h1>
            Distributor
          </h1>
          {content}
        </div>
      );
    }
  }

exports.SetParams = class extends React.Component {
  render() {
    const {parent, standardUnit} = this.props;
    const drugName = (this.state || {}).drugName;
    const drugPrice = (this.state || {}).drugPrice;
    const symbol = (this.state || {}).symbol;
    const drugSupply = (this.state || {}).drugSupply;
    return (
      <div>
        <div style={{ marginBottom: '10px'}}>
          <TextField id="filled-basic" label="Drug Name" variant="filled" 
          onChange={(e) => this.setState({drugName: e.currentTarget.value})} />
        </div>

        <div style={{ marginBottom: '10px'}}>
          <TextField id="filled-basic" label="Drug Price" variant="filled" 
          onChange={(e) => this.setState({drugPrice: e.currentTarget.value})} />
          {standardUnit}
        </div>

        <div style={{ marginBottom: '10px'}}>
          <TextField id="filled-basic" label="Drug Symbol" variant="filled" 
          onChange={(e) => this.setState({symbol: e.currentTarget.value})} />
        </div>

        <div style={{ marginBottom: '10px'}}>
          <TextField id="filled-basic" label="Drug Supply" variant="filled" 
          onChange={(e) => this.setState({drugSupply: e.currentTarget.value})} />
        </div>
        
        <div>
          <Button variant="contained" 
            onClick={() => parent.setParams(drugName, symbol, drugSupply, drugPrice)}
          > Set params </Button>
        </div>
      </div>
    )
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const { parent, drugToken, drugPrice } = this.props

    return (
      <div>
        Params are....
        {drugToken}
        {drugPrice}
        <Button variant="contained" 
            onClick={() => parent.deploy()}
          > Deploy Contract </Button>
      </div>
    )
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>
        Deploying.....
      </div>
    )
  }
}

exports.DrugDetails = class extends React.Component {
  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        {ctcInfoStr}
      </div>
    )
  }
}

export default exports;