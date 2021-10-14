import { Container, Row, Col } from "react-bootstrap";
import PostJobStepper from "./PostJobStepper/PostJobStepper";
import EmployerSideMenu from "../../../core-ui/EmployerSideMenu/EmployerSideMenu";
import './PostJob.css'

const EmployerProfilePostJob = ({ showSideMenu, setShowSideMenu }) => {
    return (
        <div id="postjob">
            <Container fluid>
                <Row>
                    <Col xs={12} lg={2} className={`mx-auto mt-lg-4 ${!showSideMenu ? "d-none d-lg-block" : "mb-5"}`}>
                    <EmployerSideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
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

export default EmployerProfilePostJob;

