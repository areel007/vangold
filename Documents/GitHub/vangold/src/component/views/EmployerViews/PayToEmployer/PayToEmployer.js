import { Button, FormControl, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom";
import creditCard from "../../../../assets/images/creditCard.png";
import crypto from "../../../../assets/images/crypto.png";
import paypal from "../../../../assets/images/paypal.png";
import './PayToEmployer.css'

const useStyles = makeStyles((theme) => ({
    radio: {
        position: 'absolute',
        top: 0,
        right: 0,
        '&$checked': {
            color: '#45b618'
        }
    },
    checked: {},
    checkboxLabel: {
        position: 'absolute',
        top: 19,
        right: 28,
        fontSize: '16px',
        color: "#3F3F3F",
    }
}));

const PayToEmployer = () => {
    const classes = useStyles();
    const [data, setData] = useState({
        paymentMethod: '',
        cardholderName: '',
        cardNumber: '',
        expDate: '',
        cvv: ''
    });
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        if (data.paymentMethod === '') {
            alert('Please select the payment method.')
        }
        else {
            console.log(data);
            history.push('./payment-successful')
        }
    }


    return (
        <section id="pay-to-employer" className="my-4 py-5">
            <Container>
                <Row>
                    <Col xs={10} lg={12} className="mx-auto text-end d-none d-lg-block">
                        <Link to="">
                            <Button>Back to Login</Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10} lg={12} className='mx-auto'>
                        <h1>Confirm order and pay</h1>
                        <p className="text-muted text-16px">Proceed to make payment so your order can be activated</p>
                    </Col>
                    <Col xs={10} lg={8} className='mx-auto order-2 order-lg-1 mt-5 mt-lg-0'>
                        <Form id="myform" onSubmit={submitHandler}>
                            <p className="text-18px mb-5">Select Payment Method</p>
                            <FormControl component="fieldset">
                                <RadioGroup row name="expertise" onChange={(e) => setData({ ...data, paymentMethod: e.target.value })}>
                                    <div className='custom-radio me-4 mb-lg-0 mb-4'>
                                        <img className='radio-icon' src={creditCard} alt="creditCard" />
                                        <FormControlLabel labelPlacement="bottom" classes={{ label: classes.checkboxLabel }} value="Credit Card" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Credit Card" />
                                    </div>
                                    <div className='custom-radio me-4 mb-lg-0 mb-4'>
                                        <FormControlLabel labelPlacement="bottom" classes={{ label: classes.checkboxLabel }} value="Crypto" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label={<img src={crypto} alt="paypal" />} />
                                    </div>
                                    <div className='custom-radio mb-lg-0 mb-4'>
                                        <FormControlLabel labelPlacement="bottom" classes={{ label: classes.checkboxLabel }} value="Pay Pal" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label={<img src={paypal} alt="paypal" />} />
                                    </div>
                                </RadioGroup>
                            </FormControl>
                            <p className="text-18px my-5">Payment Details</p>
                            <Form.Group className="mb-4 me-lg-5 me-0">
                                <Form.Label className="text-16px-a">Cardholder Name</Form.Label>
                                <Form.Control required size='lg' className='form-control-pay' onChange={(e) => setData({ ...data, cardholderName: e.target.value })} />
                            </Form.Group>
                            <Form.Group className="mb-4 me-lg-5 me-0">
                                <Form.Label className="text-16px-a">Card Number</Form.Label>
                                <Form.Control required size='lg' className='form-control-pay' onChange={(e) => setData({ ...data, cardNumber: e.target.value })} />
                            </Form.Group>
                            <Row className="mb-4">
                                <Form.Group className="mb-4 me-lg-5 me-0" as={Col}>
                                    <Form.Label className="text-16px-a">Exp Date</Form.Label>
                                    <Form.Control required size='lg' className='form-control-pay' onChange={(e) => setData({ ...data, expDate: e.target.value })} />
                                </Form.Group>

                                <Form.Group className="mb-4 me-lg-5 me-0" as={Col}>
                                    <Form.Label className="text-16px-a">CVV</Form.Label>
                                    <Form.Control required size='lg' className='form-control-pay' onChange={(e) => setData({ ...data, cvv: e.target.value })} />
                                </Form.Group>
                            </Row>
                        </Form>
                    </Col>
                    <Col xs={10} lg={4} className='mx-auto mt-lg-0 mt-2 order-1 order-lg-2'>
                        <Card className="p-5 card-order">
                            <h2>Order Details</h2>
                            <p className="text-18px my-4">You are paying</p>
                            <h1>₦500,000</h1>
                            <hr className="mb-5" style={{ border: "1.2px solid" }} />
                            <div className="d-flex justify-content-between mb-4">
                                <div>
                                    <p className="text-14px-a">Employer</p>
                                    <p className="text-14px-b">Jacob Kane</p>
                                </div>
                                <div>
                                    <p className="text-14px-a">Service</p>
                                    <p className="text-14px-b">Web Design</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="text-14px-a">Order Number</p>
                                    <p className="text-14px-b">FG1356HY78</p>
                                </div>
                                <div>
                                    <p className="text-14px-a">Date</p>
                                    <p className="text-14px-b">July 03, 2021</p>
                                </div>
                            </div>
                            <div className="text-center mt-5">
                                <Button type="submit" form="myform" className="submit-btn">Add Card</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default PayToEmployer;