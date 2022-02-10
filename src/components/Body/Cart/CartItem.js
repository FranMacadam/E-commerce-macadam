import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import React, { useContext } from 'react';
import Context from '../../../contexts/myContext';

function CartItem(props) {
  const {removeItem} = useContext(Context);
  return (
    <Card className="h-100 rounded-0 border-2 border-secondary shadow">
      <Card.Body className="p-1">
        <Row>
          <Col xs={4} className="px-2 pt-2 pb-0">
            <Link to={`/product/${props.key}`}>
              <div className="card-img-wrap p-2">
                <Card.Img src={props.product.image} alt={props.product.title} />
              </div>
            </Link>
          </Col>
          <Col className="px-0 pt-3">
            <Link to={`/product/${props.key}`}>
              {props.product.title}
            </Link>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="fs-5 pt-0 border-0 rounded-0 bg-secondary">
        <Row className="mt-0 px-1">
          <Col xs={6} className="text-start">
            <span className="fs-6">
              <small>{`${props.product.stock} x ${Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'Ars',
                minimumFractionDigits: 2,
              }).format(props.product.price)}`}</small>
            </span>
          </Col>
          <Col xs={6} className="text-end fs-6 fw-bold">
            {Intl.NumberFormat('en-IN', { style: 'currency', currency: 'Ars', minimumFractionDigits: 2 }).format(
              props.product.price * props.product.stock
            )}
          </Col>
        </Row>

        <Row className="mx-1 my-2 pb-2 bg-cart-card-footer shadow px-2 pt-1">
          <span className="fs-6 text-end px-0">
            <Button
              className="pb-1 pt-0 pe-1 ps-0 mt-1 me-0 border-0 rounded-pill"
              size="sm"
              variant="outline-primary"
              onClick={() => removeItem(props.product.id)}
            >
              <FaTrashAlt className="ms-1" />
            </Button>
          </span>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default CartItem;