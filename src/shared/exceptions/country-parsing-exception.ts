export class CountryParsingException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CountryParsingException';
    this.message = message;
  }
}
