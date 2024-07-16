import { decode as decodeBase64URL } from '../runtime/base64url.ts'
import { fromSPKI, fromPKCS8, fromX509 } from '../runtime/asn1.ts'
import asKeyObject from '../runtime/jwk_to_key.ts'

import { JOSENotSupported } from '../util/errors.ts'
import isObject from '../lib/is_object.ts'
import type { JWK, KeyLike } from '../types.d.ts'

export interface PEMImportOptions {
  /**
   * (Only effective in Web Crypto API runtimes) The value to use as
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey SubtleCrypto.importKey()}
   * `extractable` argument. Default is false.
   */
  extractable?: boolean
}

/**
 * Imports a PEM-encoded SPKI string as a runtime-specific public key representation (KeyObject or
 * CryptoKey).
 *
 * @param pem PEM-encoded SPKI string
 * @param alg (Only effective in Web Crypto API runtimes) JSON Web Algorithm identifier to be used
 *   with the imported key, its presence is only enforced in Web Crypto API runtimes. See
 *   {@link https://github.com/panva/jose/issues/210 Algorithm Key Requirements}.
 */
export async function importSPKI<T extends KeyLike = KeyLike>(
  spki: string,
  alg: string,
  options?: PEMImportOptions,
): Promise<T> {
  if (typeof spki !== 'string' || spki.indexOf('-----BEGIN PUBLIC KEY-----') !== 0) {
    throw new TypeError('"spki" must be SPKI formatted string')
  }
  // @ts-ignore
  return fromSPKI(spki, alg, options)
}

/**
 * Imports the SPKI from an X.509 string certificate as a runtime-specific public key representation
 * (KeyObject or CryptoKey).
 *
 * @param pem X.509 certificate string
 * @param alg (Only effective in Web Crypto API runtimes) JSON Web Algorithm identifier to be used
 *   with the imported key, its presence is only enforced in Web Crypto API runtimes. See
 *   {@link https://github.com/panva/jose/issues/210 Algorithm Key Requirements}.
 */
export async function importX509<T extends KeyLike = KeyLike>(
  x509: string,
  alg: string,
  options?: PEMImportOptions,
): Promise<T> {
  if (typeof x509 !== 'string' || x509.indexOf('-----BEGIN CERTIFICATE-----') !== 0) {
    throw new TypeError('"x509" must be X.509 formatted string')
  }
  // @ts-ignore
  return fromX509(x509, alg, options)
}

/**
 * Imports a PEM-encoded PKCS#8 string as a runtime-specific private key representation (KeyObject
 * or CryptoKey).
 *
 * @param pem PEM-encoded PKCS#8 string
 * @param alg (Only effective in Web Crypto API runtimes) JSON Web Algorithm identifier to be used
 *   with the imported key, its presence is only enforced in Web Crypto API runtimes. See
 *   {@link https://github.com/panva/jose/issues/210 Algorithm Key Requirements}.
 */
export async function importPKCS8<T extends KeyLike = KeyLike>(
  pkcs8: string,
  alg: string,
  options?: PEMImportOptions,
): Promise<T> {
  if (typeof pkcs8 !== 'string' || pkcs8.indexOf('-----BEGIN PRIVATE KEY-----') !== 0) {
    throw new TypeError('"pkcs8" must be PKCS#8 formatted string')
  }
  // @ts-ignore
  return fromPKCS8(pkcs8, alg, options)
}

/**
 * Imports a JWK to a runtime-specific key representation (KeyLike). Either JWK "alg" (Algorithm)
 * Parameter must be present or the optional "alg" argument. When running on a runtime using
 * {@link https://www.w3.org/TR/WebCryptoAPI/ Web Cryptography API} the jwk parameters "use",
 * "key_ops", and "ext" are also used in the resulting `CryptoKey`.
 *
 * @param jwk JSON Web Key.
 * @param alg (Only effective in Web Crypto API runtimes) JSON Web Algorithm identifier to be used
 *   with the imported key. Default is the "alg" property on the JWK, its presence is only enforced
 *   in Web Crypto API runtimes. See
 *   {@link https://github.com/panva/jose/issues/210 Algorithm Key Requirements}.
 * @param octAsKeyObject Forces a symmetric key to be imported to a KeyObject or CryptoKey. Default
 *   is true unless JWK "ext" (Extractable) is true.
 */
export async function importJWK<T extends KeyLike = KeyLike>(
  jwk: JWK,
  alg?: string,
  octAsKeyObject?: boolean,
): Promise<T | Uint8Array> {
  if (!isObject(jwk)) {
    throw new TypeError('JWK must be an object')
  }

  alg ||= jwk.alg

  switch (jwk.kty) {
    case 'oct':
      if (typeof jwk.k !== 'string' || !jwk.k) {
        throw new TypeError('missing "k" (Key Value) Parameter value')
      }

      octAsKeyObject ??= jwk.ext !== true

      if (octAsKeyObject) {
        // @ts-ignore
        return asKeyObject({ ...jwk, alg, ext: jwk.ext ?? false })
      }

      return decodeBase64URL(jwk.k)
    case 'RSA':
      if (jwk.oth !== undefined) {
        throw new JOSENotSupported(
          'RSA JWK "oth" (Other Primes Info) Parameter value is not supported',
        )
      }
    case 'EC':
    case 'OKP':
      // @ts-ignore
      return asKeyObject({ ...jwk, alg })
    default:
      throw new JOSENotSupported('Unsupported "kty" (Key Type) Parameter value')
  }
}
