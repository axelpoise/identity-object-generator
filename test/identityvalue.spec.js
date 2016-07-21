var encryptor = require('../src/encryptor')
var decryptor = require('../src/decryptor')

var NodeRSA = require('node-rsa')
var assert = require('assert')


describe('check encryptor and decryptor', function(){




    it('should encrypt and decrypt a value', function(done){
        this.timeout(200000000000)
        var input = {name:"axel scheele", age:'27'}
        var identity = {};
        encryptor(input, identity, function(err, result){

            console.log('id',result.id)
            console.log('ref', result.ref)
            var ref = result.ref;
            var id = result.id;
            decryptor(ref, id, function(err, res){
                console.log('results', res)
    
                done()
            })
        })


        




    })
})