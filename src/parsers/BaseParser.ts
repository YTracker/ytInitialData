import { YTInitialData } from "../types/YTInitialData";

export class BaseParser {
  protected ytInitialData: YTInitialData;

  constructor(ytInitialData: YTInitialData) {
    this.ytInitialData = ytInitialData;
  }

  protected findKeyValues<T = any>(
    obj: object,
    targetKey: string,
    values: any[] = []
  ): T[] {
    if (Array.isArray(obj)) {
      obj.forEach((item) => {
        this.findKeyValues(item, targetKey, values);
      });
    } else if (obj !== null && typeof obj === 'object') {
      Object.entries(obj).forEach(([key, value]) => {
        if (key === targetKey) {
          values.push(value);
        }
        this.findKeyValues(value, targetKey, values);
      });
    }

    return values;
  }

}