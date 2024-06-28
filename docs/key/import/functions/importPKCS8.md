# Function: importPKCS8()

## [💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

▸ **importPKCS8**\<`KeyLikeType`\>(`pkcs8`, `alg`, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`KeyLikeType`\>

Imports a PEM-encoded PKCS#8 string as a runtime-specific private key representation (KeyObject
or CryptoKey).

Note: The OID id-RSASSA-PSS (1.2.840.113549.1.1.10) is not supported in
[Web Cryptography API](https://w3c.github.io/webcrypto/), use the OID rsaEncryption
(1.2.840.113549.1.1.1) instead for all RSA algorithms.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `KeyLikeType` *extends* [`KeyLike`](../../../types/type-aliases/KeyLike.md) | [`KeyLike`](../../../types/type-aliases/KeyLike.md) |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pkcs8` | `string` | PEM-encoded PKCS#8 string |
| `alg` | `string` | (Only effective in Web Crypto API runtimes) JSON Web Algorithm identifier to be used with the imported key, its presence is only enforced in Web Crypto API runtimes. See [Algorithm Key Requirements](https://github.com/panva/jose/issues/210). |
| `options`? | [`PEMImportOptions`](../interfaces/PEMImportOptions.md) | - |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`KeyLikeType`\>

## Example

```js
const algorithm = 'ES256'
const pkcs8 = `-----BEGIN PRIVATE KEY-----
MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgiyvo0X+VQ0yIrOaN
nlrnUclopnvuuMfoc8HHly3505OhRANCAAQWUcdZ8uTSAsFuwtNy4KtsKqgeqYxg
l6kwL5D4N3pEGYGIDjV69Sw0zAt43480WqJv7HCL0mQnyqFmSrxj8jMa
-----END PRIVATE KEY-----`
const ecPrivateKey = await jose.importPKCS8(pkcs8, algorithm)
```
