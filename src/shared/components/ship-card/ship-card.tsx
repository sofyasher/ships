import React from 'react';
import { Card } from 'react-bootstrap';
import { ShipModel } from '../../models/ship.model';
import './ship-card.scss';
import { getCountryOfOriginFromShipowner } from '../../utils/utils';
import { CountryParsingMode } from '../../enums/country-parsing-mode.enum';
import { CountryParsingException } from '../../exceptions/country-parsing-exception';

type ShipProps = {
  ship: ShipModel;
  isOnDetailedPage?: boolean;
};

const getCountryName = (
  shipOwner: string,
  parsingMode: CountryParsingMode = CountryParsingMode.STRICT,
): string => {
  try {
    return getCountryOfOriginFromShipowner(shipOwner, parsingMode);
  } catch (e) {
    if (e instanceof CountryParsingException) {
      if (parsingMode === CountryParsingMode.STRICT) {
        return getCountryName(shipOwner, CountryParsingMode.NORMAL);
      }
      return 'Unknown';
    }
    throw e;
  }
};

const ShipCard = ({ ship, isOnDetailedPage }: ShipProps) => {
  return (
    <Card
      border='info'
      className={`ship-card ${isOnDetailedPage ? 'on-detailed-page' : ''}`}
    >
      <Card.Header>
        <strong>{ship.name}</strong>
      </Card.Header>
      <Card.Body>
        <ul className='ship-card-list'>
          <li>Country of origin: {getCountryName(ship.owner)}</li>
          {!isOnDetailedPage ?? <li>Built: {ship.built}</li>}
          {!isOnDetailedPage ?? <li>Name: {ship.name}</li>}
          {!isOnDetailedPage ?? <li>Length: {ship.lengthMeters}m</li>}
          {!isOnDetailedPage ?? <li>Beam: {ship.beamMeters}m</li>}
          <li>TEU: {ship.maxTEU}</li>
          {!isOnDetailedPage ?? <li>Owner: {ship.owner}</li>}
          {!isOnDetailedPage ?? <li>Gross Tonnage: {ship.grossTonnage}</li>}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default ShipCard;
