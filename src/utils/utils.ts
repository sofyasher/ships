/**
 * Return's a country name from company's name, if contained.
 * Country name should be in the end and wrapped into round brackets.
 * @param ownerInfo string, Company name
 */
export const getCountryOfOriginFromShipowner = (ownerInfo: string): string => {
  // we want to find a substring which matches to `(<anything>)`
  // and the substring should be in the of the owner info
  const nameWithCountryRegExp = new RegExp('.*[(].*[)]$');
  const countryRegExp = new RegExp('[(].*[)]$');
  let country;
  if (ownerInfo.match(nameWithCountryRegExp)) {
    /* if the owner info contains a substring like **(<anything>)** in the end,
    we can be sure that **countryRegExp.exec(ownerInfo)** will return a not empty array
    containing as the only element **(<anything>)** */
    const countryWithBrackets = countryRegExp.exec(ownerInfo)!![0];
    // now we only need to remove the first left bracket and the last right bracket
    country = countryWithBrackets
      .replace('(', '')
      .replace(new RegExp('[)]$'), '');
  } else {
    country = '';
    // here is no need to throw the exception, it's enough to log the error
    console.error(
      `Couldn't retrieve country name from owner info: ${ownerInfo}`,
    );
  }

  return country;
};
