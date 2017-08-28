var allocateBalanceForAll = function(){
	for(var i=1; i< eth.accounts.length; i++){
		eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[i], value: web3.toWei(0.01, "ether")})
	}
};