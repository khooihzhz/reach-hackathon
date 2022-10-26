import React from 'react';
import AppViews from './views/AppViews.js';
import DistributorViews from './views/DistributorViews.js';
import PharmacyViews from './views/PharmacyViews.js'
import {renderDOM, renderView} from './views/render.js';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const reach = loadStdlib(process.env);

import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Landing'};
  }
  getStarted() {
    this.setState({view: 'DistributorOrPharmacy'})
  }
  async componentDidMount() {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({acc, bal});
    if (await reach.canFundFromFaucet()) {
      this.setState({view: 'FundAccount'});
    } else {
      this.setState({view: 'DistributorOrPharmacy'});
    }
  }
  async fundAccount(fundAmount) {
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'DistributorOrPharmacy'});
  }
  async skipFundAccount() { this.setState({view: 'DistributorOrPharmacy'}); }
  selectDistributor() { this.setState({view: 'Wrapper', ContentView: Distributor}); }
  selectPharmacy() { this.setState({view: 'Wrapper', ContentView: Pharmacy}); }
  render() { return renderView(this, AppViews); }
}

class Distributor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'SetParams'};
  }
  getParams() { // Fun([], Drugs)
    console.log(`drug supply is ${this.state.drugSupply}\n drug Token : ${this.state.drugToken}`)
    return {price: this.state.drugPrice, drugToken: this.state.drugTokenId, drugSupply: this.state.supply}
  }

  async deploy() {
    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    backend.Distributor(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'DrugDetails', ctcInfoStr});
  }

  async setParams(drugName, symbol, drugSupply, price) { 
    const drugToken = await reach.launchToken(this.props.acc, drugName, symbol, {supply: drugSupply})
    this.setState({view: 'Deploy', drugTokenId: drugToken.id, drugPrice: price, supply: drugSupply})
  }
  render() { return renderView(this, DistributorViews); 

}}

class Pharmacy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching', ctc});
    backend.Pharmacies(ctc, this);
  }
  async optIn(Drugs) { // Fun([UInt], Null)
    const {drugToken, price} = Drugs;
    const drugPrice = parseInt(price)
    const id = reach.bigNumberToNumber(drugToken) //accept token
    await this.props.acc.tokenAccept(id)
    const supply = await this.state.ctc.apis.Pharmacy.getSupply();
    console.log(drugPrice, supply, drugToken)
    const drugSupply = parseInt(supply);
    return await new Promise(resolveAcceptedP => {
      this.setState({view: 'AcceptTerms', drugSupply, price: drugPrice, resolveAcceptedP});
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({view: 'Market'});
  }
  async buyDrug(numDrugsToBuy) {
    const [totalNumSold, numBuy, currentSupply] = await this.state.ctc.apis.Pharmacy.purchase(numDrugsToBuy);
    this.setState({drugSupply: parseInt(currentSupply)});
    console.log(parseInt(currentSupply));
  }
  render() { return renderView(this, PharmacyViews); }
}

renderDOM(<App />);