import { CountryParsingMode } from '../enums/country-parsing-mode.enum';
import { ParsingCountryException } from '../exceptions/parsing-country-exception';

const regExpForCountryParsingModes: Map<CountryParsingMode, RegExp> = new Map([
  [CountryParsingMode.STRICT, /.+\((?<countryName>[^)]+)\)$/],
  [CountryParsingMode.NORMAL, /.+\((?<countryName>([^()]|\(.+\))+)\)$/],
]);
/**
 * Return's a country name from company's name, if contained.
 * Country name should be in the end and wrapped into round brackets.
 * @param ownerInfo string, Company name
 * @param parsingMode CountryParsingMode, Parsing mode
 * @throws ParsingCountryException When country couldn't be retrieved
 */
export const getCountryOfOriginFromShipowner = (
  ownerInfo: string,
  parsingMode: CountryParsingMode,
): string => {
  const nameWithCountryRegExp = regExpForCountryParsingModes.get(parsingMode)!!;
  let captureGroups = nameWithCountryRegExp.exec(ownerInfo)?.groups;
  if (!captureGroups) {
    throw new ParsingCountryException(
      `Couldn't retrieve country name from owner info: ${ownerInfo}`,
    );
  }

  return captureGroups.countryName;
};
