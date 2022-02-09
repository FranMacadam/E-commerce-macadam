import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './Header.scss'

const ContactForm = () => {
    return (
        <Container className="contactFormContainer">
            <Row className='mb-5 mt-3'>
                <Col lg='8'>
                    <h1 className='display-4 mb-4'>
                        Contact Me
                    </h1>
                </Col>
            </Row>

            <Row>
                <Col lg='5' className='mb-5'>
                    <h3 className='color_sec py-4'>Get in touch</h3>
                    <address>
                        <strong>Email: developer@javascript.com</strong>
                        <br />
                        <br />
                        <p>
                            <strong>Phone: xxx xxx xxx</strong>
                        </p>
                    </address>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    <Col>
                        <form className="contact_form w-100">
                            <Row>
                                <Col lg='6' className='form-group'>
                                    <input
                                        className='form-control'
                                        id='name'
                                        name='name'
                                        placeholder='Name'
                                        type='text'
                                    />
                                </Col>
                                <Col lg='6' className='form-group'>
                                    <input
                                        className='form-control rounded-0'
                                        id='email'
                                        name='email'
                                        placeholder='Email'
                                        type='email'
                                    />
                                </Col>
                            </Row>
                            <textarea className='form-control rounded-0' id='message' name='message' placeholder='Message' rows='5'></textarea>
                            <br />
                            <Row>
                                <Col lg='12' className='form-group'>
                                    <button className='btn ac_btn' type='submit'>Send</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactForm;
