import { Container, Row, Col } from "react-bootstrap";
import PostJobStepper from "./PostJobStepper/PostJobStepper";
import './PostJob.css'
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import SideMenu from "../../../core-ui/SideMenu/SideMenu"

const PostJob = ({ showSideMenu, setShowSideMenu }) => {
    return (
        <section id="postjob" className='py-5'>
            <Container fluid>
                <Row>
                    <Col xs={12} lg={2} className={`mx-auto ${!showSideMenu ? "d-none d-lg-block" : "mb-5"}`}>
                        <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
                    </Col>
                    <Col xs={12} lg={10} className='px-4 px-sm-5 pt-2'>
                        <Row>
                            <Col xs={10} lg={8} className="d-none d-lg-block">
                                <h1>Let’s help you post your first job</h1>
                            </Col>
                            <Col xs={10} lg={4} className="mx-auto text-end d-none d-lg-block">
                                <Link to="">
                                    <Button>Back to Login</Button>
                                </Link>
                            </Col>
                        </Row>
                        <PostJobStepper />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default PostJob;

