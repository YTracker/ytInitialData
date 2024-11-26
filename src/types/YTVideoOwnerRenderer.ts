export type YTVideoOwnerRenderer = {
  thumbnail: {
    thumbnails: Array<{
      url: string
      width: number
      height: number
    }>
  }
  title: {
    runs: Array<{
      text: string
      navigationEndpoint: {
        clickTrackingParams: string
        commandMetadata: {
          webCommandMetadata: {
            url: string
            webPageType: string
            rootVe: number
            apiUrl: string
          }
        }
        browseEndpoint: {
          browseId: string
          canonicalBaseUrl: string
        }
      }
    }>
  }
  subscriptionButton: {
    type: string
  }
  navigationEndpoint: {
    clickTrackingParams: string
    commandMetadata: {
      webCommandMetadata: {
        url: string
        webPageType: string
        rootVe: number
        apiUrl: string
      }
    }
    browseEndpoint: {
      browseId: string
      canonicalBaseUrl: string
    }
  }
  subscriberCountText: {
    accessibility: {
      accessibilityData: {
        label: string
      }
    }
    simpleText: string
  }
  trackingParams: string
  badges: Array<{
    metadataBadgeRenderer: {
      icon: {
        iconType: string
      }
      style: string
      tooltip: string
      trackingParams: string
      accessibilityData: {
        label: string
      }
    }
  }>
}
