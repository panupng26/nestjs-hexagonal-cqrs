export class Utils {
  static parseDate(value: Date | string): Date | null {
    if (value === null || value === undefined) {
      return null;
    }
    if (value instanceof Date) {
      return new Date(value);
    }
    if (typeof value === 'string') {
      return new Date(value);
    }
    return null;
  }
}
