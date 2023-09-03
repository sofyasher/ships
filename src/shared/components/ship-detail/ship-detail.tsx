import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchShips } from '../../requests';
import { ShipModel } from '../../models/ship.model';
import { Container } from 'react-bootstrap';
import ShipCard from '../ship-card/ship-card';
import './ship-detail.scss';

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
          <ShipCard ship={ship} isOnDetailedPage={true} />
        </Container>
      ) : (
        <Container
          fluid
          className='d-flex align-items-center justify-content-center vh-100'
        >
          <h3>Ship with id {id} not found</h3>
        </Container>
      )}
    </>
  );
};

export default ShipDetail;
