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

  Distributor.pay([[numOfDrugs, drugToken]])                   

  assert(balance(drugToken) == numOfDrugs, 'balance is wrong')  
  
  const [ numSold, numCust ] = parallelReduce([0, 0])    
    .invariant(balance() == numSold * price) // TODO: Change Price
    .invariant(balance(drugToken) == numOfDrugs - numSold)
    .while(numSold < numOfDrugs)
    .api_(Pharmacy.purchase, (numBuy) => {               
      check(numBuy <= numOfDrugs - numSold, 'too many')    
      return[price * numBuy, (ret) => {           // TODO : Change PRICE         
        transfer(numBuy, drugToken).to(this)
        
        ret([numSold + numBuy, numBuy, numOfDrugs - (numSold + numBuy)])
        return [ numSold + numBuy, numCust + 1 ]              
      }]
    })
    .api_(Pharmacy.getSupply, () => {                
      check(true);
      return[0, (ret) => {                                  
        ret(numOfDrugs - numSold)
        return [ numSold, numCust ]              
      }]
    })
  
  transfer(balance()).to(Distributor);
  
  commit();
  exit();
})