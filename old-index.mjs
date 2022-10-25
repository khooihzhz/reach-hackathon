import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);

console.log('Creating Account for Distributor');

const accDistributor = await stdlib.newTestAccount(startingBalance);

console.log('Having distributor create drug token');

const drugToken = await stdlib.launchToken(accDistributor, "panadol", "PND", { supply: 10});
const drugTokenId = drugToken.id;
const drugPrice = stdlib.parseCurrency(10);  // 2 ALGO
// const purchaseQuantity = 0;
// const lenInBlocks = 10;
const params = { drugToken: drugTokenId, price: drugPrice};

let done = false;
const pharmacies = [];
const startPurchase = async() => {
  
  const runPurchase = async (who) => {

    const numBuy = Math.floor(Math.random() * 2 + 1);
    const purchasePrice = numBuy * drugPrice;
  
    const acc = await stdlib.newTestAccount(startingBalance);

    acc.setDebugLabel(who);

    await acc.tokenAccept(drugTokenId);

    pharmacies.push([who, acc]);

    const ctc = acc.contract(backend, ctcDistributor.getInfo());
    const getBal = async () => stdlib.formatCurrency(await stdlib.balanceOf(acc));
    
    console.log(`${who} decides to purchase ${stdlib.formatCurrency(purchasePrice)} ALGO of drug.`);
    console.log(`${who} balance before is ${await getBal()}` );

    try {
      const [ numSold, lastNumBuy] = await ctc.apis.Pharmacy.purchase(numBuy);
      console.log(`${who} bought ${lastNumBuy} of drugs that is worth ${stdlib.formatCurrency(purchasePrice)}`);
      console.log(`Number of sold: ${numSold}`);
    } catch (e) {
      
      console.log(e);
    }
    console.log(`${who} balance after is ${await getBal()}`);
  };

  await runPurchase('Alice');
  await runPurchase('Bob');
  await runPurchase('Claire');
  await runPurchase('Khooi');
  await runPurchase('Moh');

  while ( ! done ) {
    console.log('while loop')
    await stdlib.wait(1);
  }
};

const ctcDistributor = accDistributor.contract(backend);
await ctcDistributor.participants.Distributor({
  getDrugs: () => {
    console.log('Distributor sets parameters of sale:', params);
    return params;
  },
  launched: () => {
    startPurchase();
  },
});

for ( const [who, acc] of pharmacies ) {
  const [amt, amtNFT] = await stdlib.balancesOf(acc, [null, drugTokenId]);
  console.log(`${who} has bought ${stdlib.formatCurrency(amt)} ${stdlib.standardUnit} and ${amtNFT} of the NFT`);
}
const getBalDis = stdlib.formatCurrency(await stdlib.balanceOf(accDistributor));
console.log(`Distributor balance is ${getBalDis()}` );

done = true;