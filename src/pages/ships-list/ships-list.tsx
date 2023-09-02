import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ShipModel } from '../../models/ship-model';
import ShipCard from '../../components/ship-card/ship-card';
import { Link } from 'react-router-dom';
import { fetchShips } from '../../shared/requests';

const ShipsList = () => {
  const [ships, setShips] = useState<ShipModel[]>([]);

  useEffect(() => {
    fetchShips(setShips);
  }, []);

  return (
    <Container fluid>
      <Row>
        {ships.map((ship) => (
          <Link to={'/ship/' + ship.id} state={ship}>
            <Col key={ship.id} xs={12} md={4}>
              <ShipCard ship={ship} />
            </Col>
          </Link>
        ))}
      </Row>
    </Container>
  );
};

export default ShipsList;
