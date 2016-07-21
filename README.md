## Identity-Object-Generator

the identity object generator creates a map of encrypted keys and values.
Only by a directed search for a key in the map and a provided public key a value can be retrieved from the map.

`Encrypt (newValuesObject: {key:value}, identityObject: {key:value), callback: (err, result) => void)`


`Decrypt (reference, identityObject: flat object, callback: (err, result) => void)`