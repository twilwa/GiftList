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
const ourTree = new MerkleTree(niceList);
const index = niceList.findIndex((n) => n === nameVar);
const proof = ourTree.getProof(index);

async function main() {
  // TODO: how do we prove to the server we're on the nice list?
  // simple. provide a proof and a name to the server and have it check against the root. utility functions are all provided for us.

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: nameVar,
    proof: proof,
  });

  console.log(nameVar);

  console.log({ gift });
}

//client is the Prover, must prove to server that name is in merkle root of server

main();
