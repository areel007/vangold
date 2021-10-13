import { Col, Container, Row, InputGroup, FormControl, Form } from "react-bootstrap";

const InputAmount = ({ postJobData, setPostJobData }) => {
    return (
        <>
            <Container fluid className="mt-5">
                <Row>
                    <div>
                        <Form.Label style={{ fontSize: '16px' }}>From</Form.Label>
                        <InputGroup size='lg' className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <FormControl type='number' onChange={(e) => setPostJobData({ ...postJobData, budgetFrom: e.target.value })} />
                        </InputGroup>
                    </div>
                    <Col>
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