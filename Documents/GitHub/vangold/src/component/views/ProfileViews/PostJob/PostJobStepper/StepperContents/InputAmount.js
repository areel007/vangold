import { Col, Container, Row, InputGroup, FormControl, Form } from "react-bootstrap";

const InputAmount = ({ postJobData, setPostJobData }) => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col xs={10} md={5} lg={3}>
                        <Form.Label style={{ fontSize: '16px' }}>From</Form.Label>
                        <InputGroup size='lg' className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <FormControl type='number' onChange={(e) => setPostJobData({ ...postJobData, budgetFrom: e.target.value })} />
                        </InputGroup>
                    </Col>
                    <Col xs={10} md={5} lg={3}>
                        <Form.Label style={{ fontSize: '16px' }}>To</Form.Label>
                        <InputGroup size='lg' className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <FormControl type='number' onChange={(e) => setPostJobData({ ...postJobData, budgetTo: e.target.value })} />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default InputAmount;