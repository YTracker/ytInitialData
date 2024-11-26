export type YTMultiMarkersPlayerBarRenderer = {
  visibleOnLoad: {
    key: string
  }
  markersMap: Array<{
    key: string
    value: {
      chapters: Array<{
        chapterRenderer: {
          title: {
            simpleText: string
          }
          timeRangeStartMillis: number
          onActiveCommand: {
            clickTrackingParams: string
            setActivePanelItemAction: {
              panelTargetId: string
              itemIndex: number
            }
          }
          thumbnail: {
            thumbnails: Array<{
              url: string
              width: number
              height: number
            }>
            lightColorPalette: {
              section1Color: number
              section2Color: number
              section3Color: number
              primaryTitleColor: number
              secondaryTitleColor: number
              section4Color: number
            }
            darkColorPalette: {
              section1Color: number
              section2Color: number
              section3Color: number
              primaryTitleColor: number
              secondaryTitleColor: number
              section4Color: number
            }
          }
        }
      }>
      trackingParams: string
      onChapterRepeat: {
        clickTrackingParams: string
        openPopupAction: {
          popup: {
            notificationActionRenderer: {
              responseText: {
                runs: Array<{
                  text: string
                }>
              }
              actionButton: {
                buttonRenderer: {
                  style: string
                  text: {
                    runs: Array<{
                      text: string
                    }>
                  }
                  trackingParams: string
                  command: {
                    clickTrackingParams: string
                    repeatChapterCommand: {
                      repeat: string
                    }
                  }
                }
              }
              trackingParams: string
            }
          }
          popupType: string
        }
      }
    }
  }>
  trackingParams: string
}
