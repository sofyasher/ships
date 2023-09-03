import { CountryParsingMode } from '../enums/country-parsing-mode.enum';
import { getCountryOfOriginFromShipowner } from './utils';
import { CountryParsingException } from '../exceptions/country-parsing-exception';

describe('getCountryOfOriginFromShipowner tests', () => {
  test('COSCO (China) [strict] -> China', () => {
    const country = getCountryOfOriginFromShipowner(
      'COSCO (China)',
      CountryParsingMode.STRICT,
    );
    expect(country).toEqual('China');
  });

  test('COSCO (China) [normal] -> China', () => {
    const country = getCountryOfOriginFromShipowner(
      'COSCO (China)',
      CountryParsingMode.NORMAL,
    );
    expect(country).toEqual('China');
  });

  test('OOCL (Hong Kong) [strict] -> Hong Kong', () => {
    const country = getCountryOfOriginFromShipowner(
      'OOCL (Hong Kong)',
      CountryParsingMode.STRICT,
    );
    expect(country).toEqual('Hong Kong');
  });

  test('OOCL (Hong Kong) [normal] -> Hong Kong', () => {
    const country = getCountryOfOriginFromShipowner(
      'OOCL (Hong Kong)',
      CountryParsingMode.NORMAL,
    );
    expect(country).toEqual('Hong Kong');
  });

  test('Mitsui O.S.K. Lines (Hong Kong) [strict] -> Hong Kong', () => {
    const country = getCountryOfOriginFromShipowner(
      'Mitsui O.S.K. Lines (Hong Kong)',
      CountryParsingMode.STRICT,
    );
    expect(country).toEqual('Hong Kong');
  });

  test('Mitsui O.S.K. Lines (Hong Kong) [normal] -> Hong Kong', () => {
    const country = getCountryOfOriginFromShipowner(
      'Mitsui O.S.K. Lines (Hong Kong)',
      CountryParsingMode.NORMAL,
    );
    expect(country).toEqual('Hong Kong');
  });

  test('OOCL (Hong Kong [strict] -> Exception', () => {
    expect(() => {
      getCountryOfOriginFromShipowner(
        'OOCL (Hong Kong',
        CountryParsingMode.STRICT,
      );
    }).toThrow(CountryParsingException);
  });

  test('OOCL (Hong Kong [normal] -> Exception', () => {
    expect(() => {
      getCountryOfOriginFromShipowner(
        'OOCL (Hong Kong',
        CountryParsingMode.NORMAL,
      );
    }).toThrow(CountryParsingException);
  });

  test('OOCL Hong Kong [strict] -> Exception', () => {
    expect(() => {
      getCountryOfOriginFromShipowner(
        'OOCL Hong Kong',
        CountryParsingMode.STRICT,
      );
    }).toThrow(CountryParsingException);
  });

  test('OOCL Hong Kong [normal] -> Exception', () => {
    expect(() => {
      getCountryOfOriginFromShipowner(
        'OOCL Hong Kong',
        CountryParsingMode.NORMAL,
      );
    }).toThrow(CountryParsingException);
  });

  test('OOCL () Hong Kong [strict] -> Exception', () => {
    expect(() => {
      getCountryOfOriginFromShipowner(
        'OOCL () Hong Kong',
        CountryParsingMode.STRICT,
      );
    }).toThrow(CountryParsingException);
  });

  test('OOCL () Hong Kong [normal] -> Exception', () => {
    expect(() => {
      getCountryOfOriginFromShipowner(
        'OOCL () Hong Kong',
        CountryParsingMode.NORMAL,
      );
    }).toThrow(CountryParsingException);
  });

  test('OOCL () [strict] -> Exception', () => {
    expect(() => {
      getCountryOfOriginFromShipowner('OOCL ()', CountryParsingMode.STRICT);
    }).toThrow(CountryParsingException);
  });

  test('OOCL () [normal] -> Exception', () => {
    expect(() => {
      getCountryOfOriginFromShipowner('OOCL ()', CountryParsingMode.NORMAL);
    }).toThrow(CountryParsingException);
  });

  test('OOCL  )Hong Kong( [strict] -> Exception', () => {
    expect(() => {
      getCountryOfOriginFromShipowner(
        'OOCL  )Hong Kong(',
        CountryParsingMode.STRICT,
      );
    }).toThrow(CountryParsingException);
  });

  test('OOCL  )Hong Kong( [normal] -> Exception', () => {
    expect(() => {
      getCountryOfOriginFromShipowner(
        'OOCL  )Hong Kong(',
        CountryParsingMode.NORMAL,
      );
    }).toThrow(CountryParsingException);
  });

  test('OOCL  ((Hong Kong) [strict] -> Hong Kong', () => {
    const country = getCountryOfOriginFromShipowner(
      'OOCL  ((Hong Kong)',
      CountryParsingMode.STRICT,
    );
    expect(country).toEqual('Hong Kong');
  });

  test('OOCL  ((Hong Kong) [normal] -> (Hong Kong', () => {
    const country = getCountryOfOriginFromShipowner(
      'OOCL  ((Hong Kong)',
      CountryParsingMode.NORMAL,
    );
    expect(country).toEqual('Hong Kong');
  });

  test('OOCL ((Hong Kong)) [strict] -> Exception', () => {
    expect(() => {
      getCountryOfOriginFromShipowner(
        'OOCL ((Hong Kong))',
        CountryParsingMode.STRICT,
      );
    }).toThrow(CountryParsingException);
  });

  test('OOCL ((Hong Kong)) [normal] -> (Hong Kong)', () => {
    const country = getCountryOfOriginFromShipowner(
      'OOCL ((Hong Kong))',
      CountryParsingMode.NORMAL,
    );
    expect(country).toEqual('(Hong Kong)');
  });

  test('OOCL ((Hong Kong)) (Czech Republic) [strict] -> Czech Republic', () => {
    const country = getCountryOfOriginFromShipowner(
      'OOCL ((Hong Kong)) (Czech Republic)',
      CountryParsingMode.STRICT,
    );
    expect(country).toEqual('Czech Republic');
  });

  test('OOCL ((Hong Kong)) (Czech Republic) [normal] -> Czech Republic', () => {
    const country = getCountryOfOriginFromShipowner(
      'OOCL ((Hong Kong)) (Czech Republic)',
      CountryParsingMode.NORMAL,
    );
    expect(country).toEqual('Czech Republic');
  });

  test('OOCL (Myanmar (formerly Burma)) [strict] -> Exception', () => {
    expect(() => {
      getCountryOfOriginFromShipowner(
        'OOCL (Myanmar (formerly Burma))',
        CountryParsingMode.STRICT,
      );
    }).toThrow(CountryParsingException);
  });

  test('OOCL (Myanmar (formerly Burma)) [normal] -> Myanmar (formerly Burma)', () => {
    const country = getCountryOfOriginFromShipowner(
      'OOCL (Myanmar (formerly Burma))',
      CountryParsingMode.NORMAL,
    );
    expect(country).toEqual('Myanmar (formerly Burma)');
  });

  test('OOCL (Eswatini (fmr. "Swaziland")) [strict] -> Exception', () => {
    expect(() => {
      getCountryOfOriginFromShipowner(
        'OOCL (Eswatini (fmr. "Swaziland"))',
        CountryParsingMode.STRICT,
      );
    }).toThrow(CountryParsingException);
  });

  test('OOCL (Eswatini (fmr. "Swaziland")) -> Eswatini (fmr. "Swaziland")', () => {
    const country = getCountryOfOriginFromShipowner(
      'OOCL (Eswatini (fmr. "Swaziland"))',
      CountryParsingMode.NORMAL,
    );
    expect(country).toEqual('Eswatini (fmr. "Swaziland")');
  });

  test('OOCL (Antigua and Barbuda) -> Antigua and Barbuda', () => {
    const country = getCountryOfOriginFromShipowner(
      'OOCL (Antigua and Barbuda)',
      CountryParsingMode.STRICT,
    );
    expect(country).toEqual('Antigua and Barbuda');
  });

  test('(Antigua and Barbuda) [strict] -> Exception', () => {
    expect(() => {
      getCountryOfOriginFromShipowner(
        '(Antigua and Barbuda)',
        CountryParsingMode.STRICT,
      );
    }).toThrow(CountryParsingException);
  });

  test('(Antigua and Barbuda) [normal] -> Exception', () => {
    expect(() => {
      getCountryOfOriginFromShipowner(
        '(Antigua and Barbuda)',
        CountryParsingMode.NORMAL,
      );
    }).toThrow(CountryParsingException);
  });
});
