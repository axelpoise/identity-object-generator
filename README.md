## Identity-Object-Generator

the identity object generator creates a map of encrypted keys and values.
Only by a directed search for a key in the map and a provided public key a value can be retrieved from the map.

`Encrypt (newValuesObject: {key:value}, identityObject: {key:value}, callback: (err, result) => void)`


`Decrypt (reference {key:value}, identityObject: {key:value}, callback: (err, result) => void)`

where `newvaluesObject` has fields and its real values in plain text
where `identityObject` has encrypted keys and values
where `reference` has the field as keys and the public keys as values, being the result.ref of the encryption.

the result of encrypt contains a new identityObject and the reference
the result of decrypt contains the plain values decrypted.