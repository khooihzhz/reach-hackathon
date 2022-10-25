import React from 'react';
import PlayerViews from './PlayerViews.js';

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

// exports.Distributor = class extends React.Component {
//   render() {
//     return (
//       <div>
//           halo;
//       </div>
      
//     )
//   }
// }

exports.SetParams = class extends React.Component {
  render() {
    const {parent, standardUnit} = this.props;
    const drugName = (this.state || {}).drugName;
    const drugPrice = (this.state || {}).drugPrice;
    const symbol = (this.state || {}).symbol;
    const drugSupply = (this.state || {}).drugSupply;
    return (
      <div>

        <label for="drugName">Drug name:</label>
        <input type="text" id="drugName" name="drugName"
        onChange={(e) => this.setState({drugName: e.currentTarget.value})}></input>
        
        <label for="drugPrice">Drug Price:</label>
        <input type="number" id="drugPrice" name="drugPrice"
        onChange={(e) => this.setState({drugPrice: e.currentTarget.value})}></input>
        {standardUnit}

        <label for="symbol">Drug symbol:</label>
        <input type="text" id="symbol" name="symbol"
        onChange={(e) => this.setState({symbol: e.currentTarget.value})}></input>

        <label for="drugSupply">Drug supply:</label>
        <input type="number" id="drugSupply" name="drugSupply"
        onChange={(e) => this.setState({drugSupply: e.currentTarget.value})}></input>

        <button
        onClick={() => parent.setParams(drugName, symbol, drugSupply, drugPrice)}
        >Set params</button>
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