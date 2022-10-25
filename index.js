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
  async getDrugs() { // Fun([], Drugs)
    const params = await new Promise(resolveParams => {
      this.setState({view: 'GetParams', resolveParams});
    });
    this.setState({view: 'WaitingForPharmacy', params});
    return params;
  }
  async deploy() {
    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    this.wager = reach.parseCurrency(this.state.wager); // UInt
    this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
    backend.Distributor(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'DrugDetails', ctcInfoStr});
  }
  setParams(drugName, symbol, drugSupply, price) { 
    const drugToken = reach.launchToken(this.state.acc, drugName, symbol, {supply: drugSupply})
    this.setState({params: {drugToken: drugToken.id, price: price}})
    this.deploy() 
  }
  render() { return renderView(this, DistributorViews); 

}}

class Pharmacy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Pharmacy'};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Distributor(ctc, this);
  }
  async acceptWager(wagerAtomic) { // Fun([UInt], Null)
    const wager = reach.formatCurrency(wagerAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({view: 'WaitingForTurn'});
  }
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);