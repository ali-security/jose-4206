# Interface: JWK

## [💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

JSON Web Key ([JWK](https://www.rfc-editor.org/rfc/rfc7517)). "RSA", "EC", "OKP", and "oct"
key types are supported.

## Indexable

 \[`propName`: `string`\]: `unknown`

## Properties

### alg?

• `optional` **alg**: `string`

JWK "alg" (Algorithm) Parameter.

***

### crv?

• `optional` **crv**: `string`

***

### d?

• `optional` **d**: `string`

***

### dp?

• `optional` **dp**: `string`

***

### dq?

• `optional` **dq**: `string`

***

### e?

• `optional` **e**: `string`

***

### ext?

• `optional` **ext**: `boolean`

JWK "ext" (Extractable) Parameter.

***

### k?

• `optional` **k**: `string`

***

### key\_ops?

• `optional` **key\_ops**: `string`[]

JWK "key_ops" (Key Operations) Parameter.

***

### kid?

• `optional` **kid**: `string`

JWK "kid" (Key ID) Parameter.

***

### kty?

• `optional` **kty**: `string`

JWK "kty" (Key Type) Parameter.

***

### n?

• `optional` **n**: `string`

***

### oth?

• `optional` **oth**: `object`[]

***

### p?

• `optional` **p**: `string`

***

### q?

• `optional` **q**: `string`

***

### qi?

• `optional` **qi**: `string`

***

### use?

• `optional` **use**: `string`

JWK "use" (Public Key Use) Parameter.

***

### x?

• `optional` **x**: `string`

***

### x5c?

• `optional` **x5c**: `string`[]

JWK "x5c" (X.509 Certificate Chain) Parameter.

***

### x5t?

• `optional` **x5t**: `string`

JWK "x5t" (X.509 Certificate SHA-1 Thumbprint) Parameter.

***

### x5t#S256?

• `optional` **x5t#S256**: `string`

"x5t#S256" (X.509 Certificate SHA-256 Thumbprint) Parameter.

***

### x5u?

• `optional` **x5u**: `string`

JWK "x5u" (X.509 URL) Parameter.

***

### y?

• `optional` **y**: `string`
