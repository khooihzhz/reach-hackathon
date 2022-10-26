'reach 0.1'

const Drugs = Object({
  price: UInt,
  drugToken: Token,
  drugSupply: UInt,

})

export const main = Reach.App(() => {
  const Distributor = Participant('Distributor' ,{
    getParams: Fun([], Drugs),
    showOutcome: Fun([UInt], Null),
  })
  const Pharmacy = API('Pharmacy', {
    purchase: Fun([UInt], Tuple(UInt, UInt, UInt)),
    getSupply: Fun([], UInt),
  })
  const Pharmacies = ParticipantClass('Pharmacies', { 
    optIn: Fun([Drugs], Null), 
  })

  init()

  Distributor.only(() => {
    const {price, drugToken, drugSupply} = declassify(interact.getParams())
  })
  Distributor.publish(price, drugToken, drugSupply)
  const numOfDrugs = drugSupply;

  Pharmacies.interact.optIn({drugToken, price, drugSupply});

  commit();
  // Pharmacy.only(() => {
  //   interact.getDrugDetails(numSold);
  // })

  Distributor.pay([[numOfDrugs, drugToken]])                   
  // ASSERT NUM OF TOKENS
  assert(balance(drugToken) == numOfDrugs, 'balance is wrong')  
  
  const [ numSold, numCust ] = parallelReduce([0, 0])    
    .invariant(balance() == numSold * price * 1000000)
    .invariant(balance(drugToken) == numOfDrugs - numSold)
    .while(numSold < numOfDrugs)
    .api_(Pharmacy.purchase, (numBuy) => {                // numBuy = number of drugs that the Pharmacy wants to buy
      //check(isNone(Pharmacys[this]), "already registered")
      check(numBuy <= numOfDrugs - numSold, 'too many')    
      return[price * numBuy * 1000000, (ret) => {                   // Pharmacy will pay here
        //Pharmacys[this] = true                          // Save the address of Pharmacy
        transfer(numBuy, drugToken).to(this)
        
        ret([numSold + numBuy, numBuy, numOfDrugs - (numSold + numBuy)])
        return [ numSold + numBuy, numCust + 1 ]              // Update number of drugs sold, Update number of Pharmacy visited
      }]
    })
    .api_(Pharmacy.getSupply, () => {                // numBuy = number of drugs that the Pharmacy wants to buy
      check(true);
      return[0, (ret) => {                   // Pharmacy will pay here                       // Save the address of Pharmacy
        ret(numOfDrugs - numSold)
        return [ numSold, numCust ]              // Update number of drugs sold, Update number of Pharmacy visited
      }]
    })
  
  transfer(balance()).to(Distributor)                     // Transfer Money to Distributor
  
  commit()
  exit()
})