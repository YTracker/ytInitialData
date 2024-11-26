import { YTChannelMetadata, YTImageBannerViewModel, YTMetadataBadgeRenderer, YTMetadataRow } from "../types";
import { BaseParser } from "./BaseParser";

export class ChannelParser extends BaseParser {

  public getChannelMetadata() {
    const [data] =
      this.findKeyValues<YTChannelMetadata>(
        this.ytInitialData,
        'channelMetadataRenderer'
      );

    return data;
  }

  public getContentMetadataRows() {
    const [data] =
      this.findKeyValues<{ metadataRows: YTMetadataRow[] }>(
        this.ytInitialData,
        'contentMetadataViewModel'
      );

    return data.metadataRows;
  }

  public getChannelBannerSources() {
    const [data] =
      this.findKeyValues<YTImageBannerViewModel>(
        this.ytInitialData,
        'imageBannerViewModel'
      );

    return data.image.sources;
  }

  public getBadgeMetadata() {
    const [data] = this.findKeyValues<
      Array<{ metadataBadgeRenderer: YTMetadataBadgeRenderer }>
    >(this.ytInitialData, 'contentMetadataViewModel');

    if (!data) return [];

    return data.map(badge => badge.metadataBadgeRenderer);
  }

  public isVerifiedArtist() {
    const badges = this.getBadgeMetadata();
    return badges.some(
      badge => badge.style === 'BADGE_STYLE_TYPE_VERIFIED_ARTIST'
    );
  }

  public isVerified() {
    const badges = this.getBadgeMetadata();
    return badges.some(
      badge => badge.style === 'BADGE_STYLE_TYPE_VERIFIED'
    );
  }

}