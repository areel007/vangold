import { Button, IconButton } from "@material-ui/core";
import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const ResetPassword1 = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleShowPassword = () =>
        setShowPassword((prevShowPassword) => !prevShowPassword);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords doesnt match.')
        }
        else {
            console.log(password);
            console.log(confirmPassword);
        }
    }

    return (
        <Container>
            <Row>
                <Col xs={12} md={8} >
                    <h1>Reset Password</h1>
                    <p className="text-muted text-16px">Create a new password for your account. It must be at least 8 characters long.</p>

                    <Form onSubmit={submitHandler}>

                        <Form.Label className="text-16px">New Password</Form.Label>
                        <InputGroup className='mb-4'>
                            <Form.Control
                                size="lg"
                                required
                                type={showPassword ? 'text' : 'password'}
                                className="form-control-emp"
                                onChange={e => { setPassword(e.target.value) }}
                            />
                            <InputGroup.Text className="form-control-eye">
                                <IconButton onClick={handleShowPassword}>
                                    {!showPassword ? <AiOutlineEye style={{ fontSize: '20px' }} /> : <AiOutlineEyeInvisible style={{ fontSize: '20px' }} />}
                                </IconButton>
                            </InputGroup.Text>
                        </InputGroup>

                        <Form.Label className="text-16px">Verify New Password</Form.Label>
                        <InputGroup className='mb-5'>
                            <Form.Control
                                size="lg"
                                required
                                type={showPassword ? 'text' : 'password'}
                                className="form-control-emp"
                                onChange={e => { setConfirmPassword(e.target.value) }}
                            />
                            <InputGroup.Text className="form-control-eye">
                                <IconButton onClick={handleShowPassword}>
                                    {!showPassword ? <AiOutlineEye style={{ fontSize: '20px' }} /> : <AiOutlineEyeInvisible style={{ fontSize: '20px' }} />}
                                </IconButton>
                            </InputGroup.Text>
                        </InputGroup>
                        <div className="text-end text-lg-start">
                            <Button type="submit" className="submit-btn">Submit</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ResetPassword1;