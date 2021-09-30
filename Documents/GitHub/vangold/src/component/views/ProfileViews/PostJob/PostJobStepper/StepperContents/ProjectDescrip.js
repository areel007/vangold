import { Button } from "@material-ui/core";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const ProjectDescrip = ({ postJobData, setPostJobData, handleNext, setShowDescrip }) => {
    const [value, setValue] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setPostJobData({ ...postJobData, projectDescrip: value });
        handleNext();
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs={10} lg={8} className='offset-1 ps-lg-4 mb-5'>
                        <h1 className="project-title">Give your job post a description</h1>
                        <Form id="myform" onSubmit={submitHandler}>
                            <Form.Group className="mt-5">
                                <Form.Control required size='lg' as="textarea" rows={12} onChange={(e) => setValue(e.target.value)} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <div className='d-flex justify-content-md-between mt-5 justify-content-around'>
                <Button
                    className='back-btn'
                    onClick={() => setShowDescrip(false)}
                >
                    Back
                </Button>
                <Button
                    type="submit"
                    form="myform"
                    className='submit-btn'
                >
                    Continue
                </Button>
            </div>
        </>
    );
}

export default ProjectDescrip;