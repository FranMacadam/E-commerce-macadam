import React, { useContext } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import Context from '../../../contexts/myContext';
import ItemInCart from '../Cart/ItemInCart'
import ItemBadges from '../Item/ItemBadges'
import ItemPrice from '../Item/ItemPrice'


const ItemDetail = ({ producto }) => {

    let { addItem, isInCart } = useContext(Context)

    const onAdd = () => {
        addItem(
            producto.id,
            producto.title,
            producto.price,
            producto.image
        )
    };

    return (
        <Container className="min-vh-85">
            <Card className="mt-3 rounded-0 border-2 border-secondary shadow">
                <Card.Body>
                    <Row>
                        <Col xs={12} sm={12} md={7} lg={5} xl={4} className="p-3">
                            <Card.Img src={producto.image} alt={producto.title} />
                        </Col>
                        <Col xs={12} sm={12} md={5} lg={7} xl={8} className="px-0 py-2">
                            <Card className="h-100 my-0 py-0" border="light">
                                <Card.Body>
                                    {producto.title}
                                    <ItemBadges producto={producto} />
                                    <Row className="mx-0 px-0 mt-3">
                                        <ItemPrice producto={producto} colGrid={12} col1Classes="ps-0" />
                                    </Row>
                                </Card.Body>
                                <Card.Footer className="bg-light border-0">
                                    <div className="fs-6 text-start fst-italic">
                                        <small>{`${producto.stock} units left!`}</small>
                                    </div>
                                    {isInCart(producto.id) ? (
                                        <ItemInCart producto={producto} />
                                    ) : (
                                        <Row>
                                            <ItemCount
                                                initial={producto.stock > 0 ? 1 : 0}
                                                stock={producto.stock}
                                                onAdd={onAdd}
                                            />
                                        </Row>
                                    )}
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ItemDetail;
