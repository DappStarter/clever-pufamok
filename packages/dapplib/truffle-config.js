require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet return stereo slow hope kitten slot gas'; 
let testAccounts = [
"0x89de4211639714a416894dbfb37341fcb6e3a4f57232b1509f7287e4626ca5d6",
"0x74e3ca71e16349c4fe5defb7a5b81a957dfda61325540b0eebed90274c52369f",
"0x8a596483718445cb9e69f2fa9951f55d9f610f85a9e651368f1c70d0810b1ec1",
"0x656f81fa016c178265e0ad26b524053c83faadf133124c9794862e384e2f2fff",
"0xa237db6e4caf045b6cfea4efc4f14e4799f1bc96f288497a5320af05fff1dc42",
"0x1a032c1063e094101ac2e1f1f4795b8cd5570d8b0a760c25b06894058aa8ae22",
"0xb7dd120ae5b17f22fca1b46d55eba93d23e39442a1c0836137dbe85182d17fc1",
"0xa71d9a11b8ffe236337acdd0045ec74ef115c7f5b1cb58543081b17f3cad2617",
"0x8fb1dfa6d030e53e10d7c099cf653122407667b91f171209053410c926fe3864",
"0x07a107d163ab16fe792cf90a97e7779b7c0b9c40c39aedd2300207be23e34f9e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
