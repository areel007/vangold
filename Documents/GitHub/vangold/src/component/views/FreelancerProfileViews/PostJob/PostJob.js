import { Container, Row, Col } from "react-bootstrap";
import PostJobStepper from "./PostJobStepper/PostJobStepper";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import './PostJob.css'

const ProfilePostJob = () => {
    return (
        <div id="postjob">
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-5 d-none d-lg-block">
                        <SideMenu />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto py-3 my-3 bg-color">
                        <Row>
                            <Col xs={10} lg={12} className="mx-auto mx-sm-0">
                                <div className="profile-postjob-header">
                                    <h1>Let’s help you post your first job</h1>
                                </div>
                                <PostJobStepper />
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProfilePostJob;

