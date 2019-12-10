const { mnemonic, secret, password: passphrase, email } = require("./faucet.json");

module.exports = {
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  networks: {
    development: {
      host: "https://api.tez.ie/rpc/babylonnet",
      port: 80,
      network_id: "*",
      secret,
      mnemonic,
      passphrase,
      email,
      type: "tezos"
    },
    zeronet: {
      host: "https://rpczero.tzbeta.net",
      port: 80,
      network_id: "*",
      secret,
      mnemonic,
      passphrase,
      email,
      type: "tezos"
    }
  }
};
