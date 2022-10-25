'reach 0.1'

const Drugs = Object({
  price: UInt,
  drugToken: Token,
})

export const main = Reach.App(() => {
  const Distributor = Participant('Distributor' ,{
    getDrugs: Fun([], Drugs),
    launched: Fun([], Null),
    showOutcome: Fun([UInt], Null),
  })
  const Pharmacy = API('Pharmacy', {
    purchase: Fun([UInt], Tuple(UInt, UInt)),
  })
  init()

  Distributor.only(() => {
    const {price, drugToken} = declassify(interact.getDrugs())
  })
  Distributor.publish(price, drugToken)
  const numOfDrugs = 10
  commit()
  Distributor.pay([[numOfDrugs, drugToken]])
  Distributor.interact.launched()

  // ASSERT NUM OF TOKENS
  assert(balance(drugToken) == numOfDrugs, 'balance is wrong')  
  //Distributor.publish()
  //const Pharmacys = new Map(Address, Bool)              // track Pharmacy visited by saving their address
  
  const [ numSold, numCust ] = parallelReduce([0, 0])    
    .invariant(balance() == numSold * price)
    .invariant(balance(drugToken) == numOfDrugs - numSold)
    .while(numSold < numOfDrugs)
    .api_(Pharmacy.purchase, (numBuy) => {                // numBuy = number of drugs that the Pharmacy wants to buy
      //check(isNone(Pharmacys[this]), "already registered")
      check(numBuy <= numOfDrugs - numSold, 'too many')    
      return[price * numBuy, (ret) => {                   // Pharmacy will pay here
        //Pharmacys[this] = true                          // Save the address of Pharmacy
        transfer(numBuy, drugToken).to(this)

        ret([numSold + numBuy, numBuy])
        return [ numSold + numBuy, numCust + 1 ]              // Update number of drugs sold, Update number of Pharmacy visited
      }]
    })
  
  transfer(numSold * price).to(Distributor)                     // Transfer Money to Distributor
  
  commit()
  exit()
})
