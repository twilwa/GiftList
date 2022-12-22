const express = require("express");
const verifyProof = require("../utils/verifyProof");

const port = 1225;

const app = express();
app.use(express.json());

const MERKLE_ROOT =
  "89bd236fdbb74533384e39d2eeb951d510229c2c8e317510608db76c41c7c1a2";

app.post("/gift", (req, res) => {
  // grab the parameters from the front-end here
  const body = req.body;

  JSON.parse();
  // TODO: prove that a name is in the list
  const isInTheList = false;
  if (isInTheList) {
    res.send("You got a toy robot!");
  } else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

//I am the verifier, i need to verify the name passed by client is in the merkle root
