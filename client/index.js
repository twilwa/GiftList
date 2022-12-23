const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");
const { keccak256 } = require("ethereum-cryptography/keccak");
const {
  hexToBytes,
  bytesToHex,
  utf8ToBytes,
  toHex,
} = require("ethereum-cryptography/utils");

const serverUrl = "http://127.0.0.1:1225";

const nameVar = process.argv[2];
console.log(nameVar);
const ourTree = new MerkleTree(niceList);

const index = niceList.findIndex((n) => n === nameVar);
const proof = ourTree.getProof(index);
console.log(index);
console.log(proof);
console.log(ourTree.getRoot());

async function main() {
  // TODO: how do we prove to the server we're on the nice list?
  //we have to prove that the hash that we're providing corresponds to the hash of the branch of the hashed merkle tree that is our storage object
  //this hash is a merkle tree that contains, at each node, a single name on the list (the hash of that name? idk if thats necessary)
  //in rethinking the merkle tree and looking at the list, we'll do it by letter like in class
  //if that tree contains all names..
  //niceList is an array
  console.log(nameVar);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: nameVar,
    proof: proof,
  });

  console.log(nameVar);

  console.log({ gift });
}

//client is the Prover, must prove to server that name is in merkle root of server

main();
