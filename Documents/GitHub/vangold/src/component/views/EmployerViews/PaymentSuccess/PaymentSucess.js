import { Col, Container, Row } from "react-bootstrap";
import { Button, Paper } from "@material-ui/core";
import tick from "../../../../assets/images/tickPay.png";
import { Link } from "react-router-dom";
import './PaymentSucess.css'

const PaymentSuccess = () => {
    return (
        <>
            <Container className="py-5">
                <Row>
                    <Col xs={10} md={12} className="mx-auto text-end">
                        <Link to="">
                            <Button>Back to Login</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <section id="payment-success" className='py-5'>
                <Container>
                    <Row>
                        <Col xs={10} lg={6} className='mx-auto text-center'>
                            <Paper elevation={3} className='p-5'>
                                <img src={tick} alt="tick" />
                                <h1>Payment Successful</h1>
                                <p className='text-16px text-muted'>Your Payment has been processed. View order to check the details.</p>
                                <Button type="submit" className="submit-btn">View Order</Button>
                            </Paper>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default PaymentSuccess;