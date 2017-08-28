# Private Blockchain network using GoEthernium (geth)

## Creating the first node on blockchain

##### Setup the first node by following the firstnode.md (https://github.com/santhosh-ktec/blockchain/blob/master/firstnode.md).

###  Initialize the Blockchain node with genesis.json file

Initialize the node using the same genesis.json file used to generate the first node. 
```
geth --datadir ./data init genesis.json
```

### Start the Blockchain node without mining

use same networkid used when generating the first node.

```
geth --datadir ./data --networkid 87623 --nodiscover console 2>>get.log
```
### Get the enode URL from first node

In console of the first node, execute below line to get the enode url 
```
admin.nodeInfo.enode
```
eg.
```
enode://923b5a4f5c73f7cc1fb62caafb19331af192f7d55c5a9d62d73fd766fe290317a40a28e2555a5a1462ed5d057367a7ff0cc6b472ff56607908035641a807b5eb@[::]:30303?discport=0"
```

### Modify the IpAddress
Modify ```[::]``` with the IpAddress of the first node. To check the IPAddress use ```ifconfig```.

### Execute add peer
In console of the next node to be setup execute below line to add the firstnode to peer 

```
admin.addPeer("<enode url>")
```
######  Add will not succeed if the system times are not in sync or the nodes 30330x port displayed in enode url is not reachable due to firewall.

### Verify peer

To verify the peer execute
```
admin.peers
```