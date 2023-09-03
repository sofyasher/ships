import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ShipModel } from '../../shared/models/ship.model';
import ShipCard from '../../shared/components/ship-card/ship-card';
import { useNavigate } from 'react-router-dom';
import { fetchShips } from '../../shared/requests';
import './ships-list.scss';

const ShipsList = () => {
  const [ships, setShips] = useState<ShipModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchShips(setShips);
  }, []);

  return (
    <Container fluid>
      <Row>
        {ships.map((ship) => (
          <Col
            key={ship.id}
            xs={12}
            md={4}
            onClick={() => navigate(`/ship/${ship.id}`)}
          >
            <ShipCard ship={ship} isClickable={true} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ShipsList;
