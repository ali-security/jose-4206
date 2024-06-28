# Function: compactVerify()

## [💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

## compactVerify(jws, key, options)

▸ **compactVerify**(`jws`, `key`, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`CompactVerifyResult`](../../../../types/interfaces/CompactVerifyResult.md)\>

Verifies the signature and format of and afterwards decodes the Compact JWS.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `jws` | `string` \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) | Compact JWS. |
| `key` | [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \| [`KeyLike`](../../../../types/type-aliases/KeyLike.md) | Key to verify the JWS with. See [Algorithm Key Requirements](https://github.com/panva/jose/issues/210#jws-alg). |
| `options`? | [`VerifyOptions`](../../../../types/interfaces/VerifyOptions.md) | JWS Verify options. |

### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`CompactVerifyResult`](../../../../types/interfaces/CompactVerifyResult.md)\>

### Example

```js
const jws =
  'eyJhbGciOiJFUzI1NiJ9.SXTigJlzIGEgZGFuZ2Vyb3VzIGJ1c2luZXNzLCBGcm9kbywgZ29pbmcgb3V0IHlvdXIgZG9vci4.kkAs_gPPxWMI3rHuVlxHaTPfDWDoqdI8jSvuSmqV-8IHIWXg9mcAeC9ggV-45ZHRbiRJ3obUIFo1rHphPA5URg'

const { payload, protectedHeader } = await jose.compactVerify(jws, publicKey)

console.log(protectedHeader)
console.log(new TextDecoder().decode(payload))
```

## compactVerify(jws, getKey, options)

▸ **compactVerify**\<`KeyLikeType`\>(`jws`, `getKey`, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`CompactVerifyResult`](../../../../types/interfaces/CompactVerifyResult.md) & [`ResolvedKey`](../../../../types/interfaces/ResolvedKey.md)\<`KeyLikeType`\>\>

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `KeyLikeType` *extends* [`KeyLike`](../../../../types/type-aliases/KeyLike.md) | [`KeyLike`](../../../../types/type-aliases/KeyLike.md) |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `jws` | `string` \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) | Compact JWS. |
| `getKey` | [`CompactVerifyGetKey`](../interfaces/CompactVerifyGetKey.md) | Function resolving a key to verify the JWS with. See [Algorithm Key Requirements](https://github.com/panva/jose/issues/210#jws-alg). |
| `options`? | [`VerifyOptions`](../../../../types/interfaces/VerifyOptions.md) | JWS Verify options. |

### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`CompactVerifyResult`](../../../../types/interfaces/CompactVerifyResult.md) & [`ResolvedKey`](../../../../types/interfaces/ResolvedKey.md)\<`KeyLikeType`\>\>
