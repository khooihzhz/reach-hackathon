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
    purchase: Fun([UInt], Tuple(UInt, UInt)),
  })
  init()

  Distributor.only(() => {
    const {price, drugToken, drugSupply} = declassify(interact.getParams())
  })
  Distributor.publish(price, drugToken, drugSupply)
  const numOfDrugs = drugSupply;

  commit();
  Distributor.pay([[numOfDrugs, drugToken]])                    // Error 1 here
  //assert(balance(drugToken) == 10, 'balance is wrong')  // Error 2 here
  //Distributor.publish()
  //const Pharmacys = new Map(Address, Bool)              // track Pharmacy visited by saving their address
  
  const [ numSold, numCust ] = parallelReduce([0, 0])     // 0 sold and 0 Pharmacy at the beginning
    .invariant(balance() == numSold * price)
    .invariant(balance(drugToken) == numOfDrugs - numSold)
    .while(numSold < numOfDrugs)
    .api_(Pharmacy.purchase, (numBuy) => {                // numBuy = number of drugs that the Pharmacy wants to buy
      check(numBuy <= numOfDrugs - numSold, 'too many')    
      return[price * numBuy, (ret) => {                   // Pharmacy will pay here
        //Pharmacys[this] = true                          // Save the address of Pharmacy
        transfer(numBuy, drugToken).to(this)            // Error 3 here

        ret([numSold+numBuy, numBuy])
        return [ numSold+numBuy, numCust+1 ]              // Update number of drugs sold, Update number of Pharmacy visited
      }]
    })
  
  transfer(numSold * price).to(Distributor)                     // Transfer Money to Distributor
  
  commit()
  exit()
})