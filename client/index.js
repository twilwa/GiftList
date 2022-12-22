const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  // TODO: how do we prove to the server we're on the nice list?

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
  });

  console.log({ gift });
}

//client is the Prover, must prove to server that name is in merkle root of server

main();
