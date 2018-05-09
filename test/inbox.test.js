const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// web3 takes a provider as an argument to talk to a specific network.
const provider = ganache.provider();
const web3 = new Web3(provider);

const {interface, bytecode} = require('../compile');

let accounts;
let inbox;
const greetingMsg = 'Hi there';
beforeEach(async ()=>{
    // get a list of all accounts
    // the test network gives us a pre-made list of unlocked accounts
    accounts = await web3.eth.getAccounts();
   
    // use one of the accounts to deploy the contract
    // arguments contains params into contract constructor
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode, 
            arguments:[greetingMsg]
        })
        .send({from: accounts[0], gas:'1000000'})

    inbox.setProvider(provider);
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, greetingMsg);
    });

    it('can change the message', async () => {
        await inbox.methods.setMessage('goodbye').send({from: accounts[0]});

        const message = await inbox.methods.message().call();
        assert.equal(message, 'goodbye');
    });

})