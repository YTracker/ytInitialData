export type YTChannelMetadata = {
  title: string
  description: string
  rssUrl: string
  externalId: string
  keywords: string
  ownerUrls: Array<string>
  avatar: {
    thumbnails: Array<{
      url: string
      width: number
      height: number
    }>
  }
  channelUrl: string
  isFamilySafe: boolean
  availableCountryCodes: Array<string>
  androidDeepLink: string
  androidAppindexingLink: string
  iosAppindexingLink: string
  vanityChannelUrl: string
}
