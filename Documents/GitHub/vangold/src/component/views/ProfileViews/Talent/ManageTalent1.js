import { Card, Col, Container, Row } from "react-bootstrap"
import SideMenu from "../../../core-ui/SideMenu/SideMenu"
import { useState } from "react";
import './Talent.css'

const cards = [
    {
        
    }
] 

const ManageTalent1 = () => {

    return (
        <section id="talent" className="my-3 py-3">
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-5 d-none d-lg-block">
                        <SideMenu />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                        <Row>
                            <Col xs={10} md={6} className="mx-auto">

                            </Col>
                            <Col xs={10} md={6} className="mx-auto"></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ManageTalent1;