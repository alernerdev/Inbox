const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// web3 takes a provider as an argument to talk to a specific network.
const web3 = new Web3(ganache.provider());

const {interface, bytecode} = require('../compile');

let accounts;
let inbox;
beforeEach(async ()=>{
    // get a list of all accounts
    // the test network gives us a pre-made list of unlocked accounts
    accounts = await web3.eth.getAccounts();
   

    // use one of the accounts to deploy the contract
    // arguments contains params into contract constructor
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments:['Hi there']})
        .send({from: accounts[0], gas:'1000000'})
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });
})

/*
class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'vroom';
    }
}

let car;
beforeEach(()=> {
    car = new Car();
});

describe('Car', () => {
    it('can park', () => {
        assert.equal('stopped', car.park());
    });

    it('can drive', () => {
        assert.equal('vroom', car.drive());
    });
});
*/