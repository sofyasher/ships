import { getCountryOfOriginFromShipowner } from './utils';
import { CountryParsingException } from '../exceptions/country-parsing-exception';

describe('getCountryOfOriginFromShipowner tests', () => {
  const testCases = [
    ['COSCO (China)', 'China'],
    ['OOCL (Hong Kong)', 'Hong Kong'],
    ['Mitsui O.S.K. Lines (Hong Kong)', 'Hong Kong'],
    ['OOCL  ((Hong Kong)', 'Hong Kong'],
    ['OOCL ((Hong Kong))', '(Hong Kong)'],
    ['OOCL ((Czechia)) (Czech Republic)', 'Czech Republic'],
    ['OOCL (Myanmar (formerly Burma))', 'Myanmar (formerly Burma)'],
    ['OOCL (Eswatini (fmr. "Swaziland"))', 'Eswatini (fmr. "Swaziland")'],
    ['OOCL (Antigua and Barbuda)', 'Antigua and Barbuda'],
    ['Maersk ((Antigua) and Barbuda)', '(Antigua) and Barbuda'],
    ['Maersk ((Antigua) and (Barbuda))', '(Antigua) and (Barbuda)'],
    ['Maersk (Antigua and (Barbuda))', 'Antigua and (Barbuda)'],
    ['CMA CGM ((Antigua) and Barbuda))', '(Antigua) and Barbuda)'],
  ];

  const testCasesWithException = [
    'OOCL (Hong Kong',
    'OOCL Hong Kong',
    'OOCL () Hong Kong',
    'OOCL ()',
    'OOCL  )Hong Kong(',
    '(Antigua and Barbuda)',
    '(Antigua and Barbuda) MSC',
    'MSC (Antigua and Barbuda) MSC',
  ];

  testCases.forEach((testCase) => {
    const input = testCase[0];
    const output = testCase[1];
    test(`${input} -> ${output}`, () => {
      const country = getCountryOfOriginFromShipowner(input);
      expect(country).toEqual(output);
    });
  });

  testCasesWithException.forEach((testCase) => {
    test(`${testCase} -> Exception`, () => {
      expect(() => {
        getCountryOfOriginFromShipowner(testCase);
      }).toThrow(CountryParsingException);
    });
  });
});
