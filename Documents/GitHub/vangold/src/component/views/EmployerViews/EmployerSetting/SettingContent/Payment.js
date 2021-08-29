import { Button } from "@material-ui/core";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const Payment = () => {
    const [data, setData] = useState({
        cardholderName: '',
        cardNumber: '',
        expDate: '',
        cvv: ''
    });

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <Container>
            <Row>
                <Col xs={11}>
                    <h1>Payment Settings</h1>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-4">
                            <Form.Label className="text-16px">Cardholder Name</Form.Label>
                            <Form.Control required size='lg' className='form-control-emp' onChange={(e) => setData({ ...data, cardholderName: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label className="text-16px">Card Number</Form.Label>
                            <Form.Control required size='lg' className='form-control-emp' onChange={(e) => setData({ ...data, cardNumber: e.target.value })} />
                        </Form.Group>
                        <Row className="mb-4">
                            <Form.Group className="mb-4" as={Col}>
                                <Form.Label className="text-16px">Exp Date</Form.Label>
                                <Form.Control required size='lg' className='form-control-emp' onChange={(e) => setData({ ...data, expDate: e.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-4" as={Col}>
                                <Form.Label className="text-16px">CVV</Form.Label>
                                <Form.Control required size='lg' className='form-control-emp' onChange={(e) => setData({ ...data, cvv: e.target.value })} />
                            </Form.Group>
                        </Row>
                        <div className="text-center">
                            <Button type="submit" className="submit-btn">Add Card</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Payment;