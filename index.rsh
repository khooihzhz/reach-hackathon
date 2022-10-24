'reach 0.1'

const Drugs = Object({
  price: UInt,
  drugToken: Token,
})

export const main = Reach.App(() => {
  const Distributor = Participant('Distributor' ,{
    getDrugs: Fun([], Drugs),
    launched: Fun([], Null),
  })
  const Pharmacy = API('Pharmacy', {
    purchase: Fun([UInt], Null),
  })
  init()

  Distributor.only(() => {
    const {price, drugToken} = declassify(interact.getDrugs())
  })
  Distributor.publish(price, drugToken)
  //const { price, drugToken } = drugs
  const numOfDrugs = 10
  commit()
  Distributor.pay([[numOfDrugs, drugToken]])                    // Error 1 here
  Distributor.interact.launched()
  //assert(balance(drugToken) == 10, 'balance is wrong')  // Error 2 here
  //Distributor.publish()
  //const Pharmacys = new Map(Address, Bool)              // track Pharmacy visited by saving their address
  
  const [ numSold, numCust ] = parallelReduce([0, 0])     // 0 sold and 0 Pharmacy at the beginning
    .invariant(balance() == numSold * price)
    .invariant(balance(drugToken) == numOfDrugs - numSold)
    .while(numSold < numOfDrugs)
    .api_(Pharmacy.purchase, (numBuy) => {                // numBuy = number of drugs that the Pharmacy wants to buy
      //check(isNone(Pharmacys[this]), "already registered")
      check(numBuy < numOfDrugs - numSold, 'too many')    
      return[price * numBuy, (ret) => {                   // Pharmacy will pay here
        //Pharmacys[this] = true                          // Save the address of Pharmacy
        transfer(numBuy, drugToken).to(this)            // Error 3 here
        ret(null)
        return [ numSold+numBuy, numCust+1 ]              // Update number of drugs sold, Update number of Pharmacy visited
      }]
    })
  transfer(balance()).to(Distributor)                     // Transfer Money to Distributor
  commit()
  exit()
})
