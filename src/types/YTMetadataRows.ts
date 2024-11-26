export type YTMetadataRow = {
  metadataParts: Array<{
    text: {
      content: string
      styleRuns?: Array<{
        startIndex: number
        length: number
      }>
    }
    enableTruncation?: boolean
  }>
}