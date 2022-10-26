import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <>
        <Typography variant="h4" gutterBottom>
          Drug Counterfeit  
        </Typography>
        {content}
      </>
    );
  }
}

exports.Landing = class extends React.Component {
  render() {
    return (
      <>
        <Typography variant="subtitle1" gutterBottom>
          This website allows user to
        </Typography>
        <Button variant="contained" onClick={() => content.getStarted()}>Get Started</Button>
      </>
    )
  }
}

exports.DistributorOrPharmacy = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Please Select a Role :
        </Typography>
        <div style={{ display: 'flex', gap: '20px'}}>
          <Button variant="contained" size="large" onClick={() => parent.selectDistributor()}>Distributor</Button> 
          <Button variant="outlined" size="large" onClick={() => parent.selectPharmacy()}>Pharmacy</Button> 
        </div>
      </div>
    );
  }
}

export default exports;