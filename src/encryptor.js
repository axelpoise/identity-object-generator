var NodeRSA = require('node-rsa')

var CryptoJS = require('crypto-js')

module.exports = function(priv, pub, field, value, identityObject){
    
    var key = new NodeRSA(priv);
    key.importKey(pub, 'public');
    
    var encVal = key.encryptPrivate(value, 'hex')
    
    var encField = CryptoJS.HmacSHA256(field, key.exportKey('public'))
    
    identityObject[encField] = encVal;
    return identityObject;
}

