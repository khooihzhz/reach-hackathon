import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const exports = {};

exports.Wrapper = class extends React.Component {
    render() {
      const {content} = this.props;
      return (
        <div>
          <div style={{ display: 'flex', gap: '20px', verticalAlign: 'center', justifyContent: 'center'}}>
            <StoreIcon fontSize='large' mt={2}/>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} mb={3}>
              Distributor
            </Typography>
          </div>
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
      <div style={{ margiinBottom: '25px'}}>
        <div style={{ marginBottom: '20px'}}>
          <TextField id="outlined-basic" label="Drug Name" variant="outlined" 
          onChange={(e) => this.setState({drugName: e.currentTarget.value})} />
        </div>

        <div style={{ marginBottom: '20px'}}>
          <TextField id="outlined-basic" label="Drug Symbol" variant="outlined" 
          onChange={(e) => this.setState({symbol: e.currentTarget.value})} />
        </div>

        <div style={{ marginBottom: '20px'}}>
          <TextField id="outlined-basic" label="Drug Price" variant="outlined" 
          onChange={(e) => this.setState({drugPrice: e.currentTarget.value})} />
        </div>

        <div style={{ marginBottom: '20px'}}>
          <TextField id="outlined-basic" label="Drug Supply" variant="outlined" 
          onChange={(e) => this.setState({drugSupply: e.currentTarget.value})} />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <Button variant="contained" 
            onClick={() => parent.setParams(drugName, symbol, drugSupply, drugPrice)}
          > Set params </Button>
        </div>
      </div>
    )
  }
}

exports.SettingParams = class extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} mt={3}>
          Setting Params
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

exports.Deploy = class extends React.Component {
  render() {
    const { parent, drugToken, drugPrice } = this.props
    return (
      <div>
        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} mt={3} mb={2}>
          Deploy Contract to Blockchain
        </Typography>
        <div style={{ display:'flex', justifyContent: 'center'}}>
          <Button variant="contained" 
              onClick={() => parent.deploy()}
            > Deploy Contract </Button>
        </div>
      </div>
    )
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} mt={3}>
          Deploying
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

exports.DrugDetails = class extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.callApi();
    console.log("hello im here")
    this.interval = setInterval(() => {
      console.log("hello im there")
      this.callApi()
    }, 5000)
  }

  callApi(){
    const apiUrl = axios.create({baseURL: "https://algoindexer.testnet.algoexplorerapi.io/v2/accounts"})

    console.log("hey im running this interval")
    apiUrl.get(`/${this.props.ctcAddress}/transactions?tx-type=axfer`).then(
      res => {
        console.log(res.data)
        this.setState({transHistory: res.data.transactions})
      }
    )
  }

  renderData(transHistory){
    let txn_id = []
    let amount = []
    if (transHistory === undefined)
    {
      return {amount, txn_id}
    }
    for(let i = 0; i < transHistory.length; i++)
    {
      console.log(transHistory[i]);
      if (transHistory[i]["inner-txns"] === undefined){
        continue;
      }
      else if (transHistory[i]["inner-txns"][0]["asset-transfer-transaction"]["amount"] == 0){
        continue;
      }
      else{
        amount.push(transHistory[i]["inner-txns"][0]["asset-transfer-transaction"]["amount"])
        txn_id.push(transHistory[i]["inner-txns"][0]["asset-transfer-transaction"]["receiver"])
      }
    }
    return {amount, txn_id}
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    const {ctcInfoStr, ctcAddress} = this.props;
    const transHistory = (this.state || {}).transHistory;

    //const amount = ["19", "222", "111", "0", "123"]
    //const txn_id = ["I74OBW4ZBWT4JDESARMSIPJGFITNBFFGAYTJD2P6UAOLVUBKDQWTFKKG6A", "2Z6SCCKHUTVEH6CYDBJZJVERSW3UDTEQD2OH6XC6HK4ZKSJM6LYWWRJ6VM", "2Z6SCCKHUTVEH6CYDBJZJVERSW3UDTEQD2OH6XC6HK4ZKSJM6LYWWRJ6VM", "2Z6SCCKHUTVEH6CYDBJZJVERSW3UDTEQD2OH6XC6HK4ZKSJM6LYWWRJ6VM", "I74OBW4ZBWT4JDESARMSIPJGFITNBFFGAYTJD2P6UAOLVUBKDQWTFKKG6A"]
    const {amount, txn_id} = this.renderData(transHistory)
    
    return (
      <div>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} mt={3} mb={2}>
          Contract Info
        </Typography>
        <div style={{ textAlign: 'center', marginBottom: '20px'}}>
          {ctcInfoStr}
        </div>
        
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Pharmacy Address</TableCell>
                <TableCell align="right">Purchase Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {txn_id.map((id, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {txn_id[index]}
                  </TableCell>
                  <TableCell align="right">{amount[index]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


      </div>
    )
  }
}

export default exports;