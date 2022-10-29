import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Team #07
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <div style={{display: 'flex', alignItems: 'center', width: '100%', height: '600px', justifyContent: 'center'}}>
          {content}
        </div>
      </>
    );
  }
}

exports.Landing = class extends React.Component {
  render() {
    return (
      <>
        <div style={{marginRight: '20px'}}>
          <AccountBalanceWalletIcon fontSize='large'/>
        </div>
        <div>
          <Typography variant="h4" gutterBottom>
            Please connect your ALGO Wallet
          </Typography>
        </div>
      </>
    )
  }
}

exports.DistributorOrPharmacy = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        <Typography variant="h5" gutterBottom sx={{marginBottom: '10px'}}>
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