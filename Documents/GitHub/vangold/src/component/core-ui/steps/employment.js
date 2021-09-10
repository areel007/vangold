import React from 'react';
import {Link} from "react-router-dom";
import "./steps.css"
import { FiPlus } from 'react-icons/fi';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import YearsSelect from "../inputs/select/years-select";
import MonthsSelect from '../inputs/select/months-select';

  const styles = {
    paper: { 
        minWidth: "850px",
        paddingTop: "20px",
    },
    Button1: {
      backgroundColor: 'rgba(69, 182, 24, 0.3)',
      borderRadius: '4px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'mulish',
      fontSize: '18px',
      textAlign: 'center',
      width: '106px',
      textTransform: 'capitalize',
      height: '39px',
      color: '#45B618',
    '&:hover': {
        backgroundColor: 'rgba(69, 182, 24, 0.3)',
      }
    },
    Button2: {
      backgroundColor: '#45B618',
      borderRadius: '4px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '18px',
      textAlign: 'center',
      fontFamily: 'mulish',
      textTransform: 'capitalize',
      width: '174px',
      height: '39px',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#45B618',
      }
    }
  };
const Employment = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const { classes } = props;
    return (
        <div className="step">
            <p className="step-title">Employment</p>
            <span className="step-subtitle">Add your work experience and boost your credibility in the process</span>
            <button className="add_edu-btn add_employ-btn" onClick={handleClickOpen}><FiPlus /> Add Employment</button>
            <Dialog classes={{ paper: classes.paper}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle disableTypography className="DialogTitle">Add Employment</DialogTitle>
                <DialogContent>
                <div className="edu__form">
                    <form action="">
                        <div className="form-input">
                            <label htmlFor="Company">Company</label>
                            <input type="text" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="Position">Position</label>
                            <input type="text" />
                        </div>
                        <div className="datePickerBox">
                            <label htmlFor="Duration of Employment">Duration of Employment</label>
                            <div className="inn__datePickerBox">
                                <MonthsSelect />
                                <YearsSelect toAdd='Year'/>
                            </div>
                        </div>
                        <div className="datePickerBox datePickerBox__TO">
                            <label htmlFor="Duration of Employment">to</label>
                            <div className="inn__datePickerBox">
                                <MonthsSelect />
                                <YearsSelect toAdd='Year'/>
                            </div>
                        </div>
                        <div className="form-input">
                            <label htmlFor="Location">Location</label>
                            <input type="text" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="Description">Description</label>
                            <textarea></textarea>
                        </div>
                        <DialogActions>
                            <div className="edu-btns">
                                <Button className={classes.Button1} onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button className={classes.Button2} onClick={handleClose} color="primary">
                                    Save and Next
                                </Button>
                            </div>
                        </DialogActions>
                    </form>
                </div>
                </DialogContent>
                
            </Dialog>
            <div className="skip_this_step">
                <Link to="#">Skip this step</Link>
            </div>
        </div>
    )
}

export default withStyles(styles)(Employment);