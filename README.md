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
##### Distributor set drug parameters
<img width="960" alt="SetParam" src="https://user-images.githubusercontent.com/93234699/199520948-bce77c3b-c862-4cce-9e22-fb95f76920d0.png">

##### Distributor views pharmacies' purchase history
<img width="960" alt="History" src="https://user-images.githubusercontent.com/93234699/199520992-a12bbc7a-0ab4-4584-93fc-d63bd49719bc.png">

##### Pharmacy attaching smart contract
<img width="960" alt="Attach" src="https://user-images.githubusercontent.com/93234699/199521141-b2a5c7f4-3438-4b84-9899-f95722c907fb.png">

##### Pharmacy makes purchase
<img width="959" alt="Market" src="https://user-images.githubusercontent.com/93234699/199521168-575525ed-5037-42a8-9993-63cd163621e9.png">

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
Note: please make sure your algo wallet has enough currency to deploy the smart contract


[top up using this link](https://testnet.algoexplorer.io/)
```
# To run locally,
../reach react
```
