import React from 'react';
import { Col } from 'react-bootstrap';

const ItemPrice = props => {
  return (
    <Col xs={props.colGrid} className={`${props.col1Classes} fs-6`}>
      <span className="fw-bold">
          {props.producto.price}
      </span>
    </Col>
  );
};

export default ItemPrice;