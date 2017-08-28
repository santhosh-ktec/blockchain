# Deploy Smart Contracts to the Chain

### Creating new accounts 
```
personal.newAccount()
<or>
personal.newAccount("<passPhrase>")
```
Executing it will prompt for a passphrase which is used to lock the account. Once generated an account address is displayed. Note down the same for further reference.

### Viewing list of account addresses

```
eth.accounts
```
will display all the accounts ```eth.account[0]``` is the coinbase for the network.

### Allocate Ether for all accounts
to make all accounts transact in the network it requires Ether, execute script to allocate balance for all accounts
```
personal.unlockAccount(eth.accounts[0]); 
loadScript("chainUtil.js");
allocateBalanceForAll();
```
Unlock account would require the passphrase used when generating the account.

### Deploy the Smart contract 
Deploy in one node can be used by all the nodes, but requires to loadScript on each node

```
personal.unlockAccount(eth.accounts[0]); 
loadScript("smartWallet.js");
smartWalletBase();
```
Once executed wait for the contract to be deployed and mined. Note down the mining address for further reference.
eg. ```0x52f095c5c1d0a37110b1669dbda7f5af08b9992f```

### Get Instance of existing wallet
```
personal.unlockAccount(eth.accounts[0]); 
loadScript("smartWallet.js");
var myWallet = getSmartWalletAt("0x52f095c5c1d0a37110b1669dbda7f5af08b9992f");
```

### Get wallet Balance
```
personal.unlockAccount("<account address>");
myWallet.getBalance.call({from:"<account address>"});
```

eg. ```myWallet.getBalance.call({from:eth.accounts[2]})```

As per our contract, By default the wallet owner will get a balance of 1,000,000. The owner can tranfer amount to any of the accounts.

### Transfer Amount
```
personal.unlockAccount("<account address>");
myWallet.transferAmount("<to account address>", <amount>,{from: "<from account address>"});
```

eg. ```myWallet.transferAmount(eth.accounts[1], 100,{from: eth.accounts[0]})```