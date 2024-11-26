export type YTVideoPrimaryInfoRenderer = {
  title: {
    runs: Array<{
      text: string
    }>
  }
  viewCount: {
    videoViewCountRenderer: {
      viewCount: {
        simpleText: string
      }
      extraShortViewCount: {
        simpleText: string
      }
      entityKey: string
      originalViewCount: string
    }
  }
  videoActions: {
    menuRenderer: {
      items: Array<{
        menuNavigationItemRenderer: {
          text: {
            runs: Array<{
              text: string
            }>
          }
          icon: {
            iconType: string
          }
          navigationEndpoint: {
            clickTrackingParams: string
            commandMetadata: {
              webCommandMetadata: {
                ignoreNavigation: boolean
              }
            }
            modalEndpoint: {
              modal: {
                modalWithTitleAndButtonRenderer: {
                  title: {
                    runs: Array<{
                      text: string
                    }>
                  }
                  content: {
                    runs: Array<{
                      text: string
                      navigationEndpoint?: {
                        clickTrackingParams: string
                        commandMetadata: {
                          webCommandMetadata: {
                            url: string
                            webPageType: string
                            rootVe: number
                          }
                        }
                        urlEndpoint: {
                          url: string
                        }
                      }
                    }>
                  }
                  button: {
                    buttonRenderer: {
                      style: string
                      size: string
                      text: {
                        runs: Array<{
                          text: string
                        }>
                      }
                      navigationEndpoint: {
                        clickTrackingParams: string
                        commandMetadata: {
                          webCommandMetadata: {
                            url: string
                            webPageType: string
                            rootVe: number
                          }
                        }
                        signInEndpoint: {
                          hack: boolean
                        }
                      }
                      trackingParams: string
                      command: {
                        clickTrackingParams: string
                        commandMetadata: {
                          webCommandMetadata: {
                            url: string
                            webPageType: string
                            rootVe: number
                          }
                        }
                        signInEndpoint: {
                          hack: boolean
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          trackingParams: string
        }
      }>
      trackingParams: string
      topLevelButtons: Array<{
        segmentedLikeDislikeButtonViewModel?: {
          likeButtonViewModel: {
            likeButtonViewModel: {
              toggleButtonViewModel: {
                toggleButtonViewModel: {
                  defaultButtonViewModel: {
                    buttonViewModel: {
                      iconName: string
                      title: string
                      onTap: {
                        serialCommand: {
                          commands: Array<{
                            logGestureCommand?: {
                              gestureType: string
                              trackingParams: string
                            }
                            innertubeCommand?: {
                              clickTrackingParams: string
                              commandMetadata: {
                                webCommandMetadata: {
                                  ignoreNavigation: boolean
                                }
                              }
                              modalEndpoint: {
                                modal: {
                                  modalWithTitleAndButtonRenderer: {
                                    title: {
                                      simpleText: string
                                    }
                                    content: {
                                      simpleText: string
                                    }
                                    button: {
                                      buttonRenderer: {
                                        style: string
                                        size: string
                                        isDisabled: boolean
                                        text: {
                                          simpleText: string
                                        }
                                        navigationEndpoint: {
                                          clickTrackingParams: string
                                          commandMetadata: {
                                            webCommandMetadata: {
                                              url: string
                                              webPageType: string
                                              rootVe: number
                                            }
                                          }
                                          signInEndpoint: {
                                            nextEndpoint: {
                                              clickTrackingParams: string
                                              commandMetadata: {
                                                webCommandMetadata: {
                                                  sendPost: boolean
                                                  apiUrl: string
                                                }
                                              }
                                              likeEndpoint: {
                                                status: string
                                                target: {
                                                  videoId: string
                                                }
                                                likeParams: string
                                              }
                                            }
                                            idamTag: string
                                          }
                                        }
                                        trackingParams: string
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }>
                        }
                      }
                      accessibilityText: string
                      style: string
                      trackingParams: string
                      isFullWidth: boolean
                      type: string
                      buttonSize: string
                      accessibilityId: string
                      tooltip: string
                    }
                  }
                  toggledButtonViewModel: {
                    buttonViewModel: {
                      iconName: string
                      title: string
                      onTap: {
                        serialCommand: {
                          commands: Array<{
                            logGestureCommand?: {
                              gestureType: string
                              trackingParams: string
                            }
                            innertubeCommand?: {
                              clickTrackingParams: string
                              commandMetadata: {
                                webCommandMetadata: {
                                  sendPost: boolean
                                  apiUrl: string
                                }
                              }
                              likeEndpoint: {
                                status: string
                                target: {
                                  videoId: string
                                }
                                removeLikeParams: string
                              }
                            }
                          }>
                        }
                      }
                      accessibilityText: string
                      style: string
                      trackingParams: string
                      isFullWidth: boolean
                      type: string
                      buttonSize: string
                      accessibilityId: string
                      tooltip: string
                    }
                  }
                  identifier: string
                  trackingParams: string
                  isTogglingDisabled: boolean
                }
              }
              likeStatusEntityKey: string
              likeStatusEntity: {
                key: string
                likeStatus: string
              }
            }
          }
          dislikeButtonViewModel: {
            dislikeButtonViewModel: {
              toggleButtonViewModel: {
                toggleButtonViewModel: {
                  defaultButtonViewModel: {
                    buttonViewModel: {
                      iconName: string
                      title: string
                      onTap: {
                        serialCommand: {
                          commands: Array<{
                            logGestureCommand?: {
                              gestureType: string
                              trackingParams: string
                            }
                            innertubeCommand?: {
                              clickTrackingParams: string
                              commandMetadata: {
                                webCommandMetadata: {
                                  ignoreNavigation: boolean
                                }
                              }
                              modalEndpoint: {
                                modal: {
                                  modalWithTitleAndButtonRenderer: {
                                    title: {
                                      simpleText: string
                                    }
                                    content: {
                                      simpleText: string
                                    }
                                    button: {
                                      buttonRenderer: {
                                        style: string
                                        size: string
                                        isDisabled: boolean
                                        text: {
                                          simpleText: string
                                        }
                                        navigationEndpoint: {
                                          clickTrackingParams: string
                                          commandMetadata: {
                                            webCommandMetadata: {
                                              url: string
                                              webPageType: string
                                              rootVe: number
                                            }
                                          }
                                          signInEndpoint: {
                                            nextEndpoint: {
                                              clickTrackingParams: string
                                              commandMetadata: {
                                                webCommandMetadata: {
                                                  sendPost: boolean
                                                  apiUrl: string
                                                }
                                              }
                                              likeEndpoint: {
                                                status: string
                                                target: {
                                                  videoId: string
                                                }
                                                dislikeParams: string
                                              }
                                            }
                                            idamTag: string
                                          }
                                        }
                                        trackingParams: string
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }>
                        }
                      }
                      accessibilityText: string
                      style: string
                      trackingParams: string
                      isFullWidth: boolean
                      type: string
                      buttonSize: string
                      accessibilityId: string
                      tooltip: string
                    }
                  }
                  toggledButtonViewModel: {
                    buttonViewModel: {
                      iconName: string
                      title: string
                      onTap: {
                        serialCommand: {
                          commands: Array<{
                            logGestureCommand?: {
                              gestureType: string
                              trackingParams: string
                            }
                            innertubeCommand?: {
                              clickTrackingParams: string
                              commandMetadata: {
                                webCommandMetadata: {
                                  sendPost: boolean
                                  apiUrl: string
                                }
                              }
                              likeEndpoint: {
                                status: string
                                target: {
                                  videoId: string
                                }
                                removeLikeParams: string
                              }
                            }
                          }>
                        }
                      }
                      accessibilityText: string
                      style: string
                      trackingParams: string
                      isFullWidth: boolean
                      type: string
                      buttonSize: string
                      accessibilityId: string
                      tooltip: string
                    }
                  }
                  trackingParams: string
                  isTogglingDisabled: boolean
                }
              }
              dislikeEntityKey: string
            }
          }
          iconType: string
          likeCountEntity: {
            key: string
            likeCountIfLiked: {
              content: string
            }
            likeCountIfDisliked: {
              content: string
            }
            likeCountIfIndifferent: {
              content: string
            }
            expandedLikeCountIfLiked: {
              content: string
            }
            expandedLikeCountIfDisliked: {
              content: string
            }
            expandedLikeCountIfIndifferent: {
              content: string
            }
            likeCountLabel: {
              content: string
            }
            likeButtonA11yText: {
              content: string
            }
            likeCountIfLikedNumber: string
            likeCountIfDislikedNumber: string
            likeCountIfIndifferentNumber: string
            shouldExpandLikeCount: boolean
            sentimentFactoidA11yTextIfLiked: {
              content: string
            }
            sentimentFactoidA11yTextIfDisliked: {
              content: string
            }
          }
          dynamicLikeCountUpdateData: {
            updateStatusKey: string
            placeholderLikeCountValuesKey: string
            updateDelayLoopId: string
            updateDelaySec: number
          }
          teasersOrderEntityKey: string
        }
        buttonViewModel?: {
          iconName: string
          title: string
          onTap: {
            serialCommand: {
              commands: Array<{
                logGestureCommand?: {
                  gestureType: string
                  trackingParams: string
                }
                innertubeCommand?: {
                  clickTrackingParams: string
                  commandMetadata: {
                    webCommandMetadata: {
                      sendPost: boolean
                      apiUrl: string
                    }
                  }
                  shareEntityServiceEndpoint: {
                    serializedShareEntity: string
                    commands: Array<{
                      clickTrackingParams: string
                      openPopupAction: {
                        popup: {
                          unifiedSharePanelRenderer: {
                            trackingParams: string
                            showLoadingSpinner: boolean
                          }
                        }
                        popupType: string
                        beReused: boolean
                      }
                    }>
                  }
                }
              }>
            }
          }
          accessibilityText: string
          style: string
          trackingParams: string
          isFullWidth: boolean
          type: string
          buttonSize: string
          state: string
          accessibilityId: string
          tooltip: string
        }
      }>
      accessibility: {
        accessibilityData: {
          label: string
        }
      }
      flexibleItems: Array<{
        menuFlexibleItemRenderer: {
          menuItem: {
            menuServiceItemRenderer: {
              text: {
                runs: Array<{
                  text: string
                }>
              }
              icon: {
                iconType: string
              }
              serviceEndpoint: {
                clickTrackingParams: string
                commandMetadata: {
                  webCommandMetadata: {
                    ignoreNavigation: boolean
                  }
                }
                modalEndpoint: {
                  modal: {
                    modalWithTitleAndButtonRenderer: {
                      title: {
                        runs: Array<{
                          text: string
                        }>
                      }
                      content: {
                        runs: Array<{
                          text: string
                        }>
                      }
                      button: {
                        buttonRenderer: {
                          style: string
                          size: string
                          isDisabled: boolean
                          text: {
                            simpleText: string
                          }
                          navigationEndpoint: {
                            clickTrackingParams: string
                            commandMetadata: {
                              webCommandMetadata: {
                                url: string
                                webPageType: string
                                rootVe: number
                              }
                            }
                            signInEndpoint: {
                              nextEndpoint: {
                                clickTrackingParams: string
                                commandMetadata: {
                                  webCommandMetadata: {
                                    url: string
                                    webPageType: string
                                    rootVe: number
                                  }
                                }
                                watchEndpoint: {
                                  videoId: string
                                  watchEndpointSupportedOnesieConfig: {
                                    html5PlaybackOnesieConfig: {
                                      commonConfig: {
                                        url: string
                                      }
                                    }
                                  }
                                }
                              }
                              idamTag: string
                            }
                          }
                          trackingParams: string
                        }
                      }
                    }
                  }
                }
              }
              trackingParams: string
            }
          }
          topLevelButton: {
            buttonViewModel: {
              iconName: string
              title: string
              onTap: {
                serialCommand: {
                  commands: Array<{
                    logGestureCommand?: {
                      gestureType: string
                      trackingParams: string
                    }
                    innertubeCommand?: {
                      clickTrackingParams: string
                      commandMetadata: {
                        webCommandMetadata: {
                          ignoreNavigation: boolean
                        }
                      }
                      modalEndpoint: {
                        modal: {
                          modalWithTitleAndButtonRenderer: {
                            title: {
                              runs: Array<{
                                text: string
                              }>
                            }
                            content: {
                              runs: Array<{
                                text: string
                              }>
                            }
                            button: {
                              buttonRenderer: {
                                style: string
                                size: string
                                isDisabled: boolean
                                text: {
                                  simpleText: string
                                }
                                navigationEndpoint: {
                                  clickTrackingParams: string
                                  commandMetadata: {
                                    webCommandMetadata: {
                                      url: string
                                      webPageType: string
                                      rootVe: number
                                    }
                                  }
                                  signInEndpoint: {
                                    nextEndpoint: {
                                      clickTrackingParams: string
                                      commandMetadata: {
                                        webCommandMetadata: {
                                          url: string
                                          webPageType: string
                                          rootVe: number
                                        }
                                      }
                                      watchEndpoint: {
                                        videoId: string
                                        watchEndpointSupportedOnesieConfig: {
                                          html5PlaybackOnesieConfig: {
                                            commonConfig: {
                                              url: string
                                            }
                                          }
                                        }
                                      }
                                    }
                                    idamTag: string
                                  }
                                }
                                trackingParams: string
                              }
                            }
                          }
                        }
                      }
                    }
                  }>
                }
              }
              accessibilityText: string
              style: string
              trackingParams: string
              isFullWidth: boolean
              type: string
              buttonSize: string
              tooltip: string
            }
          }
        }
      }>
    }
  }
  trackingParams: string
  updatedMetadataEndpoint: {
    clickTrackingParams: string
    commandMetadata: {
      webCommandMetadata: {
        sendPost: boolean
        apiUrl: string
      }
    }
    updatedMetadataEndpoint: {
      videoId: string
      initialDelayMs: number
      params: string
    }
  }
  superTitleLink: {
    runs: Array<{
      text: string
      navigationEndpoint?: {
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
          params: string
        }
      }
      loggingDirectives?: {
        trackingParams: string
        visibility: {
          types: string
        }
        enableDisplayloggerExperiment: boolean
      }
    }>
  }
  dateText: {
    simpleText: string
  }
  relativeDateText: {
    accessibility: {
      accessibilityData: {
        label: string
      }
    }
    simpleText: string
  }
}
