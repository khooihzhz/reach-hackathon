'reach 0.1'

const Drugs = Object({
  price: UInt,
  drugToken: Token,
})

export const main = Reach.App(() => {
  const Distributor = Participant('Distributor' ,{
    drugs: Drugs,
    launched: Fun([Contract], Null),
  })
  const Pharmacy = API('Pharmacy', {
    purchase: Fun([UInt], Null),
  })
  init()

  Distributor.only(() => {
    const drugs = declassify(interact.drugs)
  })
  Distributor.publish(drugs)
  const { price, drugToken } = drugs
  commit()
  //Distributor.pay([[10, drugToken]])                    // Error 1 here
  Distributor.interact.launched(getContract())
  //assert(balance(drugToken) == 10, 'balance is wrong')  // Error 2 here
  Distributor.publish()
  //const Pharmacys = new Map(Address, Bool)              // track Pharmacy visited by saving their address
  
  const [ numSold, numCust ] = parallelReduce([0, 0])     // 0 sold and 0 Pharmacy at the beginning
    .invariant(balance() == numSold * price)
    .while(numSold < 10)
    .api_(Pharmacy.purchase, (numBuy) => {                // numBuy = number of drugs that the Pharmacy wants to buy
      //check(isNone(Pharmacys[this]), "already registered")
      check(numBuy < numSold, 'too many')    
      return[price * numBuy, (ret) => {                   // Pharmacy will pay here
        //Pharmacys[this] = true                          // Save the address of Pharmacy
        //transfer(numBuy, drugToken).to(this)            // Error 3 here
        ret(null)
        return [ numSold+numBuy, numCust+1 ]              // Update number of drugs sold, Update number of Pharmacy visited
      }]
    })
  transfer(balance()).to(Distributor)                     // Transfer Money to Distributor
  commit()
  exit()
})