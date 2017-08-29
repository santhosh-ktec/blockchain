# Blockchain network using GoEthereum (geth)

## Creating the first node on blockchain

###### switch the path to project working directory
```
cd /var/smartwallet/blockchain
```


### Generate an account
```
geth --datadir ./data account new
```
It will prompt for a passphrase, enter it to project lock your account.

Once generated it will display an address of your account. eg. 
``` 
Address: {7ec0ec3f734781c84edf4e1a353dfc8bd4218c4e} 
```

### Config the genesis.json file

Modify the genesis.json file with the address generated above to alloc section (prefix the address with 0x. )
```
"alloc": {
		"0x7ec0ec3f734781c84edf4e1a353dfc8bd4218c4e": { "balance": "1606938044258990275541962092341162602522202993782792835301376" }
   	},
```

### Initialize the Blockchain node with genesis.json file

```
geth --datadir ./data init genesis.json
```

### Start the Blockchain node with mining
```
geth --datadir ./data --networkid 87623 --nodiscover --mine --minerthreads=1 console 2>>get.log
```

###### Now our first blockchain node is setup and ready. Proceed to setup private chain by following privatechain.md (https://github.com/santhosh-ktec/blockchain/blob/master/privatechain.md)