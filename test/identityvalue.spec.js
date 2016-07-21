var encryptor = require('../src/encryptor')
var decryptor = require('../src/decryptor')

var NodeRSA = require('node-rsa')
var assert = require('assert')


describe('check encryptor and decryptor', function(){




    it('should encrypt and decrypt a value', function(){
        this.timeout(200000000000)
        var input = {name:"axel scheele", age:'27'}
        var identity = {};
        var encrypted = encryptor(input, identity)

        console.log('id',encrypted.id)
        console.log('ref', encrypted.ref)
        var ref = encrypted.ref;
        var id = encrypted.id;
        var name = decryptor(ref, id)

        console.log('my name is ',name)
        




    })
})