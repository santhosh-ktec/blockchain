# Blockchain network using GoEthernium (geth)

## Installation / Project Setup


### Install Ethernium (geth)

```
sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum
```

### Verify Installation


```
which geth
```
would display path of installation on successful installation.

### Create a working directory
```
cd /var
sudo mkdir smartwallet
cd smartwallet
```

### Set permissions for working  directory
```
sudo chmod 777 ./
```

### Clone the repository from Git
```
git clone https://github.com/santhosh-ktec/blockchain.git
```

##### proceed to firstnode.md(https://github.com/santhosh-ktec/blockchain/blob/master/firstnode.md) to setup the first node of the blockchain.