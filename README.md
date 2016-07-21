## Identity-Object-Generator

the identity object generator creates a hashmap of encrypted keys and values.
Only by a directed search for a key in the hashmap and a provided public key a value can be retrieved from the hashmap.

`Encrypt (private key: string, public key: string, field: string, value : stringified anything, identityObject: flat object)`


`Decrypt (public key: string, field: string, identityObject: flat object)`