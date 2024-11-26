# @ytracker/ytinitialdata

This package simplifies the extraction of useful metadata from the global `ytInitialData` variable, accessible on YouTube- video and channel pages.

## Install

```
npm install @ytracker/ytinitialdata
```

## Usage

You can retrieve the `ytInitialData` however you like, but a common approach is to fetch the HTML of the page (e.g., using Node's native fetch), and then use the built-in `extractFromHtml` helper function to easily access the metadata. No virtual DOMs needed!

#### Example

```ts
import { VideoParser, extractFromHtml } from '@ytracker/ytinitialdata';

const ytUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const response = await fetch(ytUrl, { method: 'GET' });
const html = await response.text();

const ytInitialData = extractFromHtml(html);
const parser = new VideoParser(ytInitialData);

parser.getViewCount(); // 1595932907
```

### Disclaimer

This package is designed to provide an easy way to retrieve publicly accessible data from YouTube in a concise format. It offers minimal formatting to the original data structures and includes a few "shortcut" methods for the most commonly requested data (e.g., VideoParser#getViewCount). While the package provides types based on the ytInitialData object, it is not comprehensive and does not aim to be.
