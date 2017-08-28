
//init using compiled abi definition from solidity
var smartWalletContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"getBalance","outputs":[{"name":"bal","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferAmount","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]);


//execute this method to create a new wallet chain
var smartWalletBase = function(){
	return smartWalletContract.new({
           from: web3.eth.accounts[0], 
		   //compiled contract binary 
	        data: '0x6060604052341561000f57600080fd5b5b60008054600160a060020a03191633600160a060020a031690811782558152600160205260409020620f424090555b5b6101978061004f6000396000f300606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166312065fe081146100535780638da5cb5b14610078578063d7081e03146100a7575b600080fd5b341561005e57600080fd5b6100666100dd565b60405190815260200160405180910390f35b341561008357600080fd5b61008b6100fa565b604051600160a060020a03909116815260200160405180910390f35b34156100b257600080fd5b6100c9600160a060020a0360043516602435610109565b604051901515815260200160405180910390f35b600160a060020a0333166000908152600160205260409020545b90565b600054600160a060020a031681565b600160a060020a0333166000908152600160205260408120548290101561013257506000610165565b50600160a060020a0333811660009081526001602081905260408083208054869003905592851682529190208054830190555b929150505600a165627a7a723058208dc899c7540b6bc01125343d7957f2d32d8607abe0645d44c3e636628be46b9b0029', 
		     gas: '4700000'
		        }, function (e, contract){
			    console.log(e, contract);
			        if (typeof contract.address !== 'undefined') {
				 console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
				 }
	});
};

//execute this method to get back instanace of existing wallet from chain
var getSmartWalletAt = function(address){
	return smartWalletContract.at(address);
};