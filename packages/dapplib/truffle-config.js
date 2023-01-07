require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan raise noise atom install nation equal gesture'; 
let testAccounts = [
"0xae3f6a110adf18e5f4fee1cc33122b48e83c4afa6d62ad931bdd04af5a4ee08a",
"0x4ac0b6d7860987a440502193f212bd25a60224ecf5de908255ebab414da092d3",
"0xefb24990d0ed3bfa057dfad1c1cab1f9957efb0e5efc56878be9c4496607f48f",
"0xf4618bb624c32fafffb1f3ddb49c97b0ce9547099eeefa43d977ae22627b321f",
"0x8cc56edcdb5ccedfcefee029a89bb2e13a341487e84eff412272bf745d898256",
"0xf8a085f24e7110bef6ba760d14fe66917443f3aa75ae3e0e8c5304dc70113cfe",
"0xdd1cc9f1d726f430f47da9891a9005e64db41f5dc7511505a36924cdd772565b",
"0xad9f66d0fbd895d3dbaecea0d2374a9fa77a6ddacebd4577675bc069a40f1d6a",
"0x8e726f33358fabd66082d924d789a64c2a6e23237f079b2671b03aba26d15868",
"0x3ec87a3272ca9cfb959810c22969674abab37bff4dd8e02fda5adb025fea8765"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

