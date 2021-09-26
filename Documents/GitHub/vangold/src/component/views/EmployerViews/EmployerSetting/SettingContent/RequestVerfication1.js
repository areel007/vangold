import { Button } from "@material-ui/core";
import { Col, Container, Row } from "react-bootstrap";
import requestImg from "../../../../../assets/images/requestveri.png";

const RequestVerfication1 = () => {

    return (
        <Container>
            <Row>
                <Col xs={12} className="text-center" >
                    <h1>Verification request submitted</h1>
                    <img src={requestImg} alt="request" className='img-fluid my-5' />
                    <p className="text-muted" style={{ fontSize: '14px' }}>Thank you for showing your interest in verifying your account. We will get back to you shortly.</p>
                    <Button className="submit-btn mt-4">Return Home</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default RequestVerfication1;