const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// web3 takes a provider as an argument to talk to a specific network.
const web3 = new Web3(ganache.provider());


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