import React from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemBadges = ({producto}) => {
  return (
    <Row>
      <Col xs="12" md="4">
        <Link to={`/category/${producto.category}`}>
          <h6 className="mb-0">
            <Badge pill className="bg-primary mt-1 p-1 rounded-0 text-uppercase">
              <small>{producto.category}</small>
            </Badge>
          </h6>
        </Link>
      </Col>
    </Row>
  );
};

export default ItemBadges;