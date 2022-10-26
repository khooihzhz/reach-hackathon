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
  Distributor.pay([[numOfDrugs, drugToken]])                   
  // ASSERT NUM OF TOKENS
  assert(balance(drugToken) == numOfDrugs, 'balance is wrong')  
  
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