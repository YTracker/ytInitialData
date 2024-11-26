export type YTImageBannerViewModel = {
  image: {
    sources: Array<{
      url: string
      width: number
      height: number
    }>
  }
  style: string
  rendererContext: {
    loggingContext: {
      loggingDirectives: {
        trackingParams: string
        visibility: {
          types: string
        }
        clientVeSpec: {
          uiType: number
          veCounter: number
        }
      }
    }
  }
}
