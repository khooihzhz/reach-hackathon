# reach-malaysia-uni-hackathon
This project is used on the Reach Malaysia Uni Hackathon

## Project Description
This project demonstrate the use of blockchain in drug supply chains. 
The blockchain used here is ALGORAND.
It consists of two actors which are distributor and pharmacy. 
The drug supplies are represented in the form of Token.

#### Distributor
As a distributor, they are responsible to deploy the smart contract and 
input drug details such as drug supply, drug name, drug token symbol and drug price.
After deploying, distributor is able to view the transactions details such as pharmacy contract address and purchase amount.

#### Pharmacy 
As a pharmacy, they can connect to the Dapps, and opt in to accept the token.
Then they can view the drug details set by the smart contract deployed by the distributor.
They can input the number of drugs that they want to purchase and pay the amount via ALGO.

#### Use of Blockchain
Blockchain is able to help enhance current supply chain as there's a proof for every transaction.
Customers are able to verify whether the drug products sold by the pharmacy are genuine by checking the transaction of the blockchain
With the help of blockchain, we can potentially reduce counterfeit drug products.

## Screenshots

## How to Install and Run
Clone the repository
```
git clone https://github.com/khooihzhz/reach-hackathon.git
```

Download [Reach](https://docs.reach.sh/quickstart/#quickstart) from the official website

``` 
# In the repository directory, install the js packages
npm install 
or 
yarn install
```

## How to use the Project
```
# To run locally,
../reach react
```

## Credits
