const { BN, ether, balance } = require('openzeppelin-test-helpers');

const XMultiSig = artifacts.require('XMultiSig')
// const XMultiSigProxy = artifacts.require('XMultiSigProxy');
const proxyABI = require('./abi/proxy.json');
const XMultiSigProxyFactory = artifacts.require('XMultiSigProxyFactory')

contract('test multisig', async([alice, bob, admin, dev, minter]) => {

    before(async () => {
        this.xMultiSig = await XMultiSig.new();
            
        this.xMultiSigProxyFactory = await XMultiSigProxyFactory.new();
        this.tx = await this.xMultiSigProxyFactory.createProxy(this.xMultiSig.address, '0x4ab8842700000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000067926b0c4753c42b31289c035f8a656d800cd9e7', 1);
    });

    it('manager test', async() => {
        console.log('proxy address : ', this.tx.logs[0].address)
        // const proxy = await XMultiSig.at(this.tx.logs[0].address)
        const proxy = new web3.eth.Contract(proxyABI, this.tx.logs[0].address);
        console.log('result : ', await proxy.methods.getChainId().call())
    })
})