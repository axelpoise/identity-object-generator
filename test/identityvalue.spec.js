var encryptor = require('../src/encryptor')
var decryptor = require('../src/decryptor')

var NodeRSA = require('node-rsa')
var assert = require('assert')


describe('check encryptor and decryptor', function(){

    var pub;
    var priv;
    before(function(){
        this.timeout(5000000)
        var key = new NodeRSA()
        key.generateKeyPair(2048, 65537)
        priv = key.exportKey('private')
        pub = key.exportKey('public')
    })


    it('should encrypt and decrypt a value', function(){
        var identity = {}
        var newidentity = encryptor(priv, pub,"name","axel scheele", identity)

        var name = decryptor(pub,'name', newidentity)

        console.log('my name is ',name)
        




    })
})