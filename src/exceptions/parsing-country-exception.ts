export class ParsingCountryException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ParsingCountryException';
  }
}
