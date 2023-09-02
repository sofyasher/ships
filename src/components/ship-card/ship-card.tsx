import React from 'react';
import { Card } from 'react-bootstrap';
import { ShipModel } from '../../models/ship-model';
import './ship-card.scss';

type ShipProps = {
  ship: ShipModel;
};

const ShipCard = ({ ship }: ShipProps) => {
  const { owner, maxTEU, grossTonnage, name, built, beamMeters, lengthMeters } =
    ship;
  return (
    <Card className='ship-card'>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Text>
          <div>Owner: {owner}</div>
          <div>Built: {built}</div>
          <div>Max TEU: {maxTEU}</div>
          <div>Beam (m): {beamMeters}</div>
          <div>Length (m): {lengthMeters}</div>
          <div>Gross (t): {grossTonnage}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ShipCard;
