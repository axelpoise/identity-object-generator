## Identity-Object-Generator

the identity object generator creates a map of encrypted keys and values.
Only by a directed search for a key in the map and a provided public key a value can be retrieved from the map.

`{id:new identity object, ref:reference object} = Encrypt (newValuesObject: {key:value}, identityObject: {key:value)`


`{key:value} = Decrypt (reference, identityObject: flat object)`