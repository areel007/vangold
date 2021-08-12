import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const ProjectTitle = ({ postJobData, setPostJobData, handleNext }) => {
    const [value, setValue] = useState('');

    const sendData =() => {
        if (!value) {
            alert('Give title please')
        } else {
            setPostJobData({ ...postJobData, projectTitle: value });
            handleNext();
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs={10} md={7} className='offset-1 ps-lg-4 mb-5'>
                        <h1 className="project-title">Give your job post a title</h1>

                        <TextField
                            id="project-tit"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            onChange={(e) => setValue(e.target.value)}
                        />


                        <p>Example titles</p>
                        <ul>
                            <li>Build a crypto app that allows users to buy, sell or trade bitcoin</li>
                            <li>Build a logistics app that allows users to send goods to their customers and loved ones</li>
                            <li>Build an e-commerce website where people can buy goods</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className='mt-5 text-center text-lg-end'>
                <Button
                    className='submit-btn'
                    onClick={sendData}
                >
                    Continue
                </Button>
            </div>
        </>
    );
}

export default ProjectTitle;