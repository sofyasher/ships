import React from 'react';
import { Card } from 'react-bootstrap';
import { ShipModel } from '../../models/ship.model';
import './ship-card.scss';
import { getCountryOfOriginFromShipowner } from '../../utils/utils';

type ShipProps = {
  ship: ShipModel;
  isClickable?: boolean;
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
          <div>
            Country of origin: {getCountryOfOriginFromShipowner(ship.owner)}
          </div>
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
