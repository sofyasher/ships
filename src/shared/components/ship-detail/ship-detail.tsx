import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchShips } from '../../requests';
import { ShipModel } from '../../models/ship.model';
import { Container } from 'react-bootstrap';
import ShipCard from '../ship-card/ship-card';

const ShipDetail = () => {
  const { id } = useParams();
  const [ships, setShips] = useState<ShipModel[]>([]);
  useEffect(() => {
    fetchShips(setShips);
  }, [id]);
  const ship = ships.find((ship) => ship.id === parseInt(id!!))!!;

  return (
    <>
      {ship ? (
        <Container fluid>
          <ShipCard ship={ship} />
        </Container>
      ) : (
        <div>Ship with id {id} not found</div>
      )}
    </>
  );
};

export default ShipDetail;
