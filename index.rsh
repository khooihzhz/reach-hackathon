'reach 0.1'

export const main = Reach.App(() => {
  // Distributor => Quantity = 10
  const Distributor = Participant('Distributor', {
    getSale: Fun([], Object({
      nftId: Token,
      drugPrice: UInt,   // Assume this is price
      lenInBlocks: UInt,
    })),
    saleReady: Fun([], Null),
    seePurchase: Fun([Address, UInt], Null),
    showOutcome: Fun([Address, UInt], Null),
  });

  // Pharmacy
  const Pharmacy = API('Pharmacy', {
    purchase: Fun([UInt], Tuple(Address, UInt)) //  Purchase Quantity = 5, TxHash => Purchase 5 Proof
  })

  init();

  // Local Step
  Distributor.only(() => {
    const { nftId, drugPrice, lenInBlocks} = declassify(interact.getSale());
  });

  // Sign Transaction
  Distributor.publish(nftId, drugPrice, lenInBlocks);

  const quantity = 10;
  commit();
  Distributor.pay([[quantity, nftId]]);

  // Tells frontend that auction is ready
  Distributor.interact.saleReady();

  // assert(balance(nftId) == quantity, "The balance of NFT is wrong");

  // we dont care about time
  // const end = lastConsensusTime() + lenInBlocks;

  const 
    lastQuantity
   = parallelReduce(quantity)
    //.invariant(balance(nftId) > 0) // remove this instead
    .invariant(balance() == ((quantity - balance(nftId)) * drugPrice)) // (Total Quantity - balance(nftId)) * drugPrice (Total Sales)
    .while(balance(nftId) > 0)
    .api_(Pharmacy.purchase, (purchase) => {
      check(purchase < lastQuantity, 'too many bro'); // if it does not satisfy, then output
      return [ purchase, (notify) => {
        notify([this, lastQuantity]);


        const who = this;
        Distributor.interact.seePurchase(who, purchase);
        transfer(purchase, nftId).to(this); // Transfer the quantity to buyer
        
        return purchase; 
      }];
    })
    // .timeout(absoluteTime(end), () => {
    //   Creator.publish();
    //   return [highestBidder, lastPrice, isFirstBid];
    // });

    transfer(balance()).to(Distributor); // smart contract => address
    
    // Distributor.interact.showOutcome(highestBidder, lastPrice);


    commit();
    exit();
})