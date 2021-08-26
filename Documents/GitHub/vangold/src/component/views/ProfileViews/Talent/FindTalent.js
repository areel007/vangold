import { Row, Container, Col } from "react-bootstrap";
import SideCheckBoxes1 from "../../../core-ui/SideCheckBoxes/SideCheckBoxes1";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";

const FindTalent = () => {
    return (
        <section id="find-talent" className="my-5 py-3 bg-color">

            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-4">
                        <SideMenu />
                    </Col>
                    <Col xs={10} lg={2} className="mx-auto bg-color-w py-2">
                        <SideCheckBoxes1 />
                    </Col>
                    <Col xs={10} lg={8} className="mx-auto bg-color-w p-5">

                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default FindTalent;