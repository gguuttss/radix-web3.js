import {
  type TransactionManifest as TransactionManifestType,
  RadixEngineToolkit,
} from '@radixdlt/radix-engine-toolkit'

export const transformStringManifest = async (
  transactionManifest: TransactionManifestType | string,
  networkId: number = 1,
  blobs: Uint8Array[] = [],
): Promise<TransactionManifestType> => {
  if (typeof transactionManifest === 'string') {
    const instructions = await RadixEngineToolkit.Instructions.convert(
      { kind: 'String', value: transactionManifest },
      networkId,
      'Parsed',
    )
    return { instructions, blobs }
  }
  return transactionManifest
}
