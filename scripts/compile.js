const path = require("path");
const fs = require("fs");
const solc = require("solc");

// Path to the Solidity contract
const contractPath = path.resolve(__dirname, "../contracts", "TicketSale.sol");
const source = fs.readFileSync(contractPath, "utf8");

// Input structure required by solc
const input = {
  language: "Solidity",
  sources: {
    "TicketSale.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["abi", "evm.bytecode"],
      },
    },
  },
};

// Compile the contract
const output = JSON.parse(solc.compile(JSON.stringify(input)));

// Check for errors
if (output.errors) {
  output.errors.forEach((err) => console.error(err.formattedMessage));
  throw new Error("Compilation errors encountered");
}

// Extract ABI and Bytecode
const abi = output.contracts["TicketSale.sol"]["TicketSale"].abi;
const bytecode = output.contracts["TicketSale.sol"]["TicketSale"].evm.bytecode.object;

// Write ABI and Bytecode to separate files
fs.writeFileSync("ABI.txt", JSON.stringify(abi, null, 2), "utf8");
fs.writeFileSync("Bytecode.txt", bytecode, "utf8");

console.log("ABI and Bytecode files generated successfully.");
