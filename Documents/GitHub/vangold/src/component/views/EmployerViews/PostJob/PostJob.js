import { Container, Row, Col } from "react-bootstrap";
import PostJobStepper from "./PostJobStepper/PostJobStepper";
import './PostJob.css'
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const PostJob = () => {
    return (
        <section id="postjob" className='py-5 my-5'>
            <Container>
                <Row>
                    <Col xs={10} lg={12} className="mx-auto text-end d-none d-lg-block">
                        <Link to="">
                            <Button>Back to Login</Button>
                        </Link>
                    </Col>
                    <Col xs={10} lg={12} className="mx-auto mx-sm-0">
                        <h1>Let’s help you post your first job</h1>
                    </Col>
                    <Col xs={10} lg={8}>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col xs={12} lg={8}>
                        <PostJobStepper />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default PostJob;

