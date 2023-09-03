import { CountryParsingException } from '../exceptions/country-parsing-exception';

const COUNTRY_NAME_IN_OWNER_INFO_REG_EXP =
  /.+\((?<countryName>([^()]|\(.+\))+)\)$/;

/**
 * Parses a company name to retrieve a country name. Returns the country name if contained.
 * Country name should be in the end and wrapped into round brackets.
 * @param ownerInfo string, Company name
 * @throws CountryParsingException When country name couldn't be retrieved
 */
export const getCountryOfOriginFromShipowner = (ownerInfo: string): string => {
  let capturingGroups =
    COUNTRY_NAME_IN_OWNER_INFO_REG_EXP.exec(ownerInfo)?.groups;
  if (!capturingGroups?.countryName) {
    throw new CountryParsingException(
      `Couldn't retrieve country name from the owner info: ${ownerInfo}`,
    );
  }

  return capturingGroups.countryName;
};
