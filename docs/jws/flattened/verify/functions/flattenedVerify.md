# Function: flattenedVerify()

## [💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

## flattenedVerify(jws, key, options)

▸ **flattenedVerify**(`jws`, `key`, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FlattenedVerifyResult`](../../../../types/interfaces/FlattenedVerifyResult.md)\>

Verifies the signature and format of and afterwards decodes the Flattened JWS.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `jws` | [`FlattenedJWSInput`](../../../../types/interfaces/FlattenedJWSInput.md) | Flattened JWS. |
| `key` | [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \| [`KeyLike`](../../../../types/type-aliases/KeyLike.md) | Key to verify the JWS with. See [Algorithm Key Requirements](https://github.com/panva/jose/issues/210#jws-alg). |
| `options`? | [`VerifyOptions`](../../../../types/interfaces/VerifyOptions.md) | JWS Verify options. |

### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FlattenedVerifyResult`](../../../../types/interfaces/FlattenedVerifyResult.md)\>

### Example

```js
const decoder = new TextDecoder()
const jws = {
  signature:
    'FVVOXwj6kD3DqdfD9yYqfT2W9jv-Nop4kOehp_DeDGNB5dQNSPRvntBY6xH3uxlCxE8na9d_kyhYOcanpDJ0EA',
  payload: 'SXTigJlzIGEgZGFuZ2Vyb3VzIGJ1c2luZXNzLCBGcm9kbywgZ29pbmcgb3V0IHlvdXIgZG9vci4',
  protected: 'eyJhbGciOiJFUzI1NiJ9',
}

const { payload, protectedHeader } = await jose.flattenedVerify(jws, publicKey)

console.log(protectedHeader)
console.log(decoder.decode(payload))
```

## flattenedVerify(jws, getKey, options)

▸ **flattenedVerify**\<`KeyLikeType`\>(`jws`, `getKey`, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FlattenedVerifyResult`](../../../../types/interfaces/FlattenedVerifyResult.md) & [`ResolvedKey`](../../../../types/interfaces/ResolvedKey.md)\<`KeyLikeType`\>\>

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `KeyLikeType` *extends* [`KeyLike`](../../../../types/type-aliases/KeyLike.md) | [`KeyLike`](../../../../types/type-aliases/KeyLike.md) |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `jws` | [`FlattenedJWSInput`](../../../../types/interfaces/FlattenedJWSInput.md) | Flattened JWS. |
| `getKey` | [`FlattenedVerifyGetKey`](../interfaces/FlattenedVerifyGetKey.md) | Function resolving a key to verify the JWS with. See [Algorithm Key Requirements](https://github.com/panva/jose/issues/210#jws-alg). |
| `options`? | [`VerifyOptions`](../../../../types/interfaces/VerifyOptions.md) | JWS Verify options. |

### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FlattenedVerifyResult`](../../../../types/interfaces/FlattenedVerifyResult.md) & [`ResolvedKey`](../../../../types/interfaces/ResolvedKey.md)\<`KeyLikeType`\>\>
