import { YTInitialData } from "./types";

export const extractFromHtml = (html: string) => {
  const regex = /var ytInitialData = (\{[\s\S]*?\});\s*<\/script>/;
  const match = html.match(regex);

  if (!match) {
    throw new Error(
      'Failed to parse initial data from YouTube. Has the document structure changed?'
    );
  }

  return JSON.parse(match[1]) as YTInitialData;
}