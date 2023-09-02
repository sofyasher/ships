import React, { useEffect, useState } from 'react';
import { API_URL, get } from '../shared/api';
import { Col, Container, Row } from 'react-bootstrap';
import { ShipModel, ShipsModel } from '../models/ship-model';
import ShipCard from '../ship-card/ship-card';

const ShipsList = () => {
  const [ships, setShips] = useState<ShipModel[]>([]);
  useEffect(() => {
    fetchShips(setShips);
  }, []);
  return (
    <Container fluid>
      <Row>
        {ships.map((ship) => (
          <Col key={ship.id} xs={12} md={4}>
            <ShipCard ship={ship} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const fetchShips = (setShips: any) => {
  get(API_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Unable to get ships list');
      }
    })
    .then((result: ShipsModel) => {
      setShips(result.ships);
    })
    .catch(console.log);
};

export default ShipsList;
