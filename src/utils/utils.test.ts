import { getCountryOfOriginFromShipowner } from './utils';

describe('getCountryOfOriginFromShipowner tests', () => {
  const logSpy = jest.spyOn(global.console, 'error');

  test('COSCO (China) -> China', () => {
    const country = getCountryOfOriginFromShipowner('COSCO (China)');
    expect(logSpy).toHaveBeenCalledTimes(0);
    expect(country).toEqual('China');
  });

  test('OOCL (Hong Kong) -> Hong Kong', () => {
    const country = getCountryOfOriginFromShipowner('OOCL (Hong Kong)');
    expect(logSpy).toHaveBeenCalledTimes(0);
    expect(country).toEqual('Hong Kong');
  });

  test('OOCL (Hong Kong -> ""', () => {
    const country = getCountryOfOriginFromShipowner('OOCL (Hong Kong');
    expect(logSpy).toHaveBeenCalled();
    expect(country).toEqual('');
  });

  test('OOCL Hong Kong -> ""', () => {
    const country = getCountryOfOriginFromShipowner('OOCL Hong Kong');
    expect(logSpy).toHaveBeenCalled();
    expect(country).toEqual('');
  });

  test('OOCL () Hong Kong -> ""', () => {
    const country = getCountryOfOriginFromShipowner('OOCL () Hong Kong');
    expect(logSpy).toHaveBeenCalled();
    expect(country).toEqual('');
  });

  test('OOCL () -> ""', () => {
    const country = getCountryOfOriginFromShipowner('OOCL ()');
    expect(logSpy).toHaveBeenCalledTimes(0);
    expect(country).toEqual('');
  });

  test('OOCL  )Hong Kong( -> ""', () => {
    const country = getCountryOfOriginFromShipowner('OOCL  )Hong Kong(');
    expect(logSpy).toHaveBeenCalled();
    expect(country).toEqual('');
  });

  test('OOCL  ((Hong Kong) -> (Hong Kong', () => {
    const country = getCountryOfOriginFromShipowner('OOCL  ((Hong Kong)');
    expect(logSpy).toHaveBeenCalledTimes(0);
    expect(country).toEqual('(Hong Kong');
  });

  test('OOCL ((Hong Kong)) -> (Hong Kong)', () => {
    const country = getCountryOfOriginFromShipowner('OOCL ((Hong Kong))');
    expect(logSpy).toHaveBeenCalledTimes(0);
    expect(country).toEqual('(Hong Kong)');
  });

  test('OOCL ((Hong Kong)) (Czech Republic) -> (Hong Kong)) (Czech Republic', () => {
    const country = getCountryOfOriginFromShipowner(
      'OOCL ((Hong Kong)) (Czech Republic)',
    );
    expect(logSpy).toHaveBeenCalledTimes(0);
    expect(country).toEqual('(Hong Kong)) (Czech Republic');
  });
  test('OOCL (Myanmar (formerly Burma)) -> Myanmar (formerly Burma)', () => {
    const country = getCountryOfOriginFromShipowner(
      'OOCL (Myanmar (formerly Burma))',
    );
    expect(logSpy).toHaveBeenCalledTimes(0);
    expect(country).toEqual('Myanmar (formerly Burma)');
  });

  test('OOCL (Eswatini (fmr. "Swaziland")) -> Eswatini (fmr. "Swaziland")', () => {
    const country = getCountryOfOriginFromShipowner(
      'OOCL (Eswatini (fmr. "Swaziland"))',
    );
    expect(logSpy).toHaveBeenCalledTimes(0);
    expect(country).toEqual('Eswatini (fmr. "Swaziland")');
  });

  test('OOCL (Antigua and Barbuda) -> Antigua and Barbuda', () => {
    const country = getCountryOfOriginFromShipowner(
      'OOCL (Antigua and Barbuda)',
    );
    expect(logSpy).toHaveBeenCalledTimes(0);
    expect(country).toEqual('Antigua and Barbuda');
  });
});
