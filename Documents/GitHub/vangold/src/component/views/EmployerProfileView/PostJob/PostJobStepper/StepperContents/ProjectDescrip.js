import { Button } from "@material-ui/core";
import { useState } from "react";
import { Form } from "react-bootstrap";

const ProjectDescrip = ({ postJobData, setPostJobData, handleNext, setShowDescrip }) => {
    const [value, setValue] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setPostJobData({ ...postJobData, projectDescrip: value });
        handleNext();
    }

    return (
        <>
            <h1 className="project-title">Give your job post a description</h1>
            <div>
                <Form id="myform" onSubmit={submitHandler}>
                    <Form.Group className="mt-5">
                        <Form.Control required  className="form-controll" size='lg' as="textarea" rows={12} onChange={(e) => setValue(e.target.value)} />
                    </Form.Group>
                </Form>
            </div>
            <div className='d-flex justify-content-between' style={{ marginTop: "5rem" }}>
                <Button
                    className='back-btnn'
                    onClick={() => setShowDescrip(false)}
                >
                    Back
                </Button>
                <Button
                    type="submit"
                    form="myform"
                    className='submit-btnn me-3 me-md-5'
                >
                    Continue
                </Button>
            </div>
        </>
    );
}

export default ProjectDescrip;