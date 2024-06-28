# Function: generateSecret()

## [💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

▸ **generateSecret**\<`KeyLikeType`\>(`alg`, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`KeyLikeType` \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\>

Generates a symmetric secret key for a given JWA algorithm identifier.

Note: Under Web Crypto API runtime the secret key is generated with `extractable` set to `false`
by default.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `KeyLikeType` *extends* [`KeyLike`](../../../types/type-aliases/KeyLike.md) | [`KeyLike`](../../../types/type-aliases/KeyLike.md) |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `alg` | `string` | JWA Algorithm Identifier to be used with the generated secret. |
| `options`? | [`GenerateSecretOptions`](../interfaces/GenerateSecretOptions.md) | Additional options passed down to the secret generation. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`KeyLikeType` \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\>

## Example

```js
const secret = await jose.generateSecret('HS256')
console.log(secret)
```
