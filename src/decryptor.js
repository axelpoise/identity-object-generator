
var NodeRSA = require('node-rsa')

var CryptoJS = require('crypto-js')

var async = require('async')
/*
the label is symmetrically encrypted with the public key.
the person who wants a value gets the private key and knows what value they want.
this way you can do a directed search through the data.

The encoding will be a Hmac with the public key as secret.
 */


module.exports = function(accessObject, identityObject, cb){


    
    var exec = {}

    Object.keys(accessObject).forEach(function(name){
        exec[name] = function (callback) {
            var pub = accessObject[name];

            var key =  NodeRSA(pub)
            var field = CryptoJS.HmacSHA256(name, pub)

            var value = identityObject[field]

            var bufferVal = new Buffer(value, 'hex');
            var decrypted = key.decryptPublic(bufferVal)

            var val = decrypted.toString('utf8')
            callback(null, val)
        }
    })
    

     async.parallel(exec, function(err, res){

        
        cb(err, res)
    })
   
}