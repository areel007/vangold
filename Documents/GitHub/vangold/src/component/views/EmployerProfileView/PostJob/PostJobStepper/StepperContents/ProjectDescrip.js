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
            <Container fluid>
                <Row>
                    <Col className='ps-lg-4 mb-5'>
                        <h1 className="project-title">Give your job post a description</h1>
                        <Form id="myform" onSubmit={submitHandler}>
                            <Form.Group className="mt-5">
                                <textarea className="textarea_postjob" name="textarea" id="" rows={10} onChange={(e) => setValue(e.target.value)} required />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
            <div className='d-flex postButtons-box mt-5'>
                <Button
                    className='back-btn back-btn2'
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
            </Container>
        </>
    );
}

export default ProjectDescrip;