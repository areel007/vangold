import { Button, Col, Row } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

const ApplicantsApplied = ({ name, position, avatar, notification }) => {
    return (
        <>
            <Row className="my-3">
                <Col xs={10} md={4} className="mx-auto">
                    <div className="d-flex">
                        <div className='me-3'><img src={avatar} alt="person" className="img-fluid" /></div>
                        <div className="align-self-center">
                            <p className="text-14px mb-0">{name}</p>
                            <p className="text-muted" >{position}</p>
                        </div>
                    </div>
                </Col>
                <Col xs={10} md={6} className="mx-auto align-self-center">
                    <Button className='btn-1'>Approve</Button>
                    {notification ? (
                        <Button className='btn-2'>Message <span className='noti'>{notification}</span></Button>
                    ) : (
                        <Button className='btn-2'>Message</Button>
                    )}
                    <AiOutlineClose className='fs-3' />
                </Col>
            </Row>
            <hr style={{ border: "1px solid #0000004D" }} />
        </>
    );
}

export default ApplicantsApplied;