import { YTMultiMarkersPlayerBarRenderer, YTVideoOwnerRenderer, YTVideoPrimaryInfoRenderer } from "../types";
import { BaseParser } from "./BaseParser";

export class VideoParser extends BaseParser {

  public getPrimaryInfo() {
    const [data] = this.findKeyValues<
      YTVideoPrimaryInfoRenderer
    >(this.ytInitialData, 'videoPrimaryInfoRenderer');
    return data;
  }

  public getViewCount() {
    const info = this.getPrimaryInfo();
    return parseInt(
      info.viewCount.videoViewCountRenderer.originalViewCount
    );
  }

  public getTitle() {
    const info = this.getPrimaryInfo();
    return info.title.runs[0].text;
  }

  public getDescription() {
    const attributedDescription = this.findKeyValues<{ content: string }>(
      this.ytInitialData, 'attributedDescription'
    );
    return attributedDescription[0].content;
  }

  public getLikeCount() {
    const [likeCountIfIndifferentNumber] = this.findKeyValues<string>(
      this.ytInitialData, 'likeCountIfIndifferentNumber'
    );
    return parseInt(likeCountIfIndifferentNumber);
  }

  public getVideoOwner() {
    const [videoOwnerRenderer] = this.findKeyValues<YTVideoOwnerRenderer>(
      this.ytInitialData, 'videoOwnerRenderer'
    );
    return videoOwnerRenderer;
  }

  public getVideoChapters() {
    const [multiMarkersPlayerBarRenderer] = this.findKeyValues<
      YTMultiMarkersPlayerBarRenderer
    >(
      this.ytInitialData, 'multiMarkersPlayerBarRenderer'
    );
    return multiMarkersPlayerBarRenderer.markersMap[0].value.chapters.map(
      chapter => chapter.chapterRenderer
    );
  }

}