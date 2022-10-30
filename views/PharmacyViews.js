import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import { ThreeDots } from 'react-loader-spinner';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div>
        <div style={{ display: 'flex', gap: '20px', verticalAlign: 'center', justifyContent: 'center'}}>
          <LocalPharmacyIcon fontSize='large' mt={2}/>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} mb={3}>
            Pharmacy
          </Typography>
        </div>
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
            <Typography  variant="subtitle1" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} mt={3} mb={2}>
                Please paste the contract info to attach to:
            </Typography>
            
            <div style={{ marginBottom: '20px'}}>
              <TextField fullWidth id="contained" label="Contract Details" variant="outlined" multiline maxRows={4} 
              onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
              <Button variant="contained" onClick={() => parent.attach(ctcInfoStr)}>Attach</Button>
            </div>
          </>
      )
  }
}

exports.Attaching = class extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} mt={3}>
          Attaching
        </Typography>
       
       <div style={{ display: 'flex', justifyContent: 'center'}}>
        <ThreeDots 
          height="80" 
          width="100" 
          radius="9"
          color="black" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
          />
       </div>
      </div>
    )
  }
}

exports.AcceptTerms = class extends React.Component {
  render() {
    const { parent, drugName, price, drugSupply } = this.props;
    return (
      <div>
        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} mt={3} mb={2}>
          The price of the drugs is {price}
        </Typography>
        <div style={{ display:'flex', justifyContent: 'center'}}>
          <Button variant="contained" 
              onClick={() => parent.termsAccepted(drugName, price, drugSupply)}
            > Accept Term </Button>
        </div>
      </div>
    )
  }
}

exports.AcceptingTerms = class extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} mt={3}>
          Accepting
        </Typography>
       
       <div style={{ display: 'flex', justifyContent: 'center'}}>
        <ThreeDots 
          height="80" 
          width="100" 
          radius="9"
          color="black" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
          />
       </div>
      </div>
    )
  }
}

exports.Market = class extends React.Component {
  render() {
    const {parent, drugName, price, drugSupply} = this.props;
    const numOfDrugs = (this.state || {}).numOfDrugs;
    return (
      <div>
        <Card sx={{ minWidth: 480 }}>
          <CardMedia
            component="img"
            height="180"
            image="https://images.unsplash.com/photo-1573883429746-084be9b5cfca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80.jpg"
            alt="Sample Drugs"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {drugName}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              {price} ALGO
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {drugSupply} left
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'center', marginBottom: "20px"}}>
            <TextField id="filled-basic" label="Purchase Amount" variant="outlined" 
            onChange={(e) => this.setState({numOfDrugs: e.currentTarget.value})} />
            <div style={{ marginLeft: "20px"}}>
              <Button variant="contained"
                onClick={() => parent.buyDrug(parseInt(numOfDrugs))}
              > Buy Drugs </Button>
            </div>
          </CardActions>
        </Card>
      </div>
    )
  }
}

exports.Processing = class extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} mt={3}>
          Processing
        </Typography>
       
       <div style={{ display: 'flex', justifyContent: 'center'}}>
        <ThreeDots 
          height="80" 
          width="100" 
          radius="9"
          color="black" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
          />
       </div>
      </div>
    )
  }
}

exports.TransactionSuccess = class extends React.Component {
  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} mt={3} mb={2}>
          Click on the link below to check your transaction:
        </Typography>
        <div style={{ textAlign: 'center'}}>
          
        </div>
      </div>
    )
  }
}

export default exports;