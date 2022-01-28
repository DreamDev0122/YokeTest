const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonic = fs
  .readFileSync(".secret")
  .toString()
  .trim();

module.exports = {

  networks: {

    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    tpolygon: {
      networkCheckTimeout: 10000,
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          "https://matic-mumbai.chainstacklabs.com"
        ),
      network_id: 80001,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
  contracts_directory: "./contracts/",
  contracts_build_directory: "./src/ABI/",

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },

};
