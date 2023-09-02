import React from 'react';
import { Card } from 'react-bootstrap';
import { ShipModel } from '../models/ship-model';
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
          <div>{owner}</div>
          <div>{built}</div>
          <div>{maxTEU}</div>
          <div>{beamMeters}</div>
          <div>{lengthMeters}</div>
          <div>{grossTonnage}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ShipCard;
