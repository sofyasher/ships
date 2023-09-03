import React from 'react';
import { Card } from 'react-bootstrap';
import { ShipModel } from '../../models/ship.model';
import './ship-card.scss';
import { getCountryOfOriginFromShipowner } from '../../utils/utils';
import { CountryParsingMode } from '../../enums/country-parsing-mode.enum';
import { ParsingCountryException } from '../../exceptions/parsing-country-exception';

type ShipProps = {
  ship: ShipModel;
  isClickable?: boolean;
};

const getCountry = (
  shipOwner: string,
  parsingMode: CountryParsingMode = CountryParsingMode.STRICT,
): string => {
  try {
    return getCountryOfOriginFromShipowner(shipOwner, parsingMode);
  } catch (e) {
    if (e instanceof ParsingCountryException) {
      if (parsingMode === CountryParsingMode.STRICT) {
        return getCountry(shipOwner, CountryParsingMode.NORMAL);
      }
      return 'Unknown';
    }
    throw e;
  }
};

const ShipCard = ({ ship, isClickable }: ShipProps) => {
  return (
    <Card
      className='ship-card'
      style={{ cursor: isClickable ? 'pointer' : 'initial' }}
    >
      <Card.Header>{ship.name}</Card.Header>
      <Card.Body>
        <Card.Text>
          <div>Country of origin: {getCountry(ship.owner)}</div>
          <div>Built: {ship.built}</div>
          <div>Name: {ship.name}</div>
          <div>Length: {ship.lengthMeters}m</div>
          <div>Beam: {ship.beamMeters}m</div>
          <div>Max TEU: {ship.maxTEU}</div>
          <div>Owner: {ship.owner}</div>
          <div>Gross Tonnage: {ship.grossTonnage}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ShipCard;
