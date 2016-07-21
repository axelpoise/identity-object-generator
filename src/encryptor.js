var NodeRSA = require('node-rsa')

var CryptoJS = require('crypto-js')

module.exports = function( identityData, identityObject){
    
    var referenceObject = {}
    Object.keys(identityData).forEach(function(field){
        var key = new NodeRSA();
        key.generateKeyPair()
        var value = identityData[field]
        var publicKey = key.exportKey('public')
        var encVal = key.encryptPrivate(value, 'hex')

        var encField = CryptoJS.HmacSHA256(field, publicKey)

        referenceObject[field] = publicKey;
        identityObject[encField] = encVal;
    })
    

    return {ref:referenceObject, id:identityObject};
}

