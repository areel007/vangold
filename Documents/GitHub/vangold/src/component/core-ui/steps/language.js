import React, {useState} from 'react';
import "./steps.css"
import LanguageSelect from "../inputs/select/f-language-select"
import { FiPlus } from 'react-icons/fi';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import LanguageSelectTwo from '../inputs/select/f-language-select2';
import SelectDropdown from '../select-dropdown/select-dropdown'
import {languages} from './language-option';


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

const Language = (props) => {
    //Data -> States
    const [open, setOpen] = React.useState(false);
    const [showDropdown, setShowDropdown] = useState(false)
    const [selectDropdownHeader, setSelectDropdownHeader] = useState("")
    const [languageInput, setLanguageInput] = useState("")
    const [language, setLanguage] = useState([])

    //Actions -> Methods

    const onLanguageInputChange = (event) => {
        setLanguageInput(event.target.value)
    }

    const toggleDropdown = () => {
        if (!showDropdown) {
            setShowDropdown(true)
        } else {
            setShowDropdown(false)
        }
    }

    const upDateDropdownHeader = (event) => {
        setSelectDropdownHeader(event.target.innerText)
        setShowDropdown(false)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const { classes } = props;

    const onFormSubmit = () => {
        setLanguage([
            ...language,
            {
                language: languageInput,
                proficiency: selectDropdownHeader
            }
        ])
    }

    return (
        <div className="step">
            <p className="step-title">Language</p>
            <span className="step-subtitle">What is your English proficiency level?</span>
            <SelectDropdown
                dataToDisplay={languages}
                toggleDropdown={toggleDropdown}
                showDropdown={showDropdown}
                selectDropdownHeader={selectDropdownHeader}
                upDateDropdownHeader={upDateDropdownHeader}
            />
            <p className="language-p">What other languages do you speak?</p>
            <div className="languages">
                {
                    language.map(_language => {
                        return <div className="language-and-edit">
                            <div className="language-and-proficiency">
                                <p className="language__language">{_language.language}</p>
                                <p className="language__proficiency">{_language.proficiency}</p>
                            </div>
                            <div className="edit-and-delete-icon">
                                <div className="education__edit education-history__edit">
                                    <svg
                                        width="19"
                                        height="19"
                                        viewBox="0 0 19 19"
                                        fill="none"

                                    >
                                        <path d="M0 15.2496V18.9996H3.75L14.81 7.93957L11.06 4.18957L0 15.2496ZM17.71 5.03957C18.1 4.64957 18.1 4.01957 17.71 3.62957L15.37 1.28957C14.98 0.89957 14.35 0.89957 13.96 1.28957L12.13 3.11957L15.88 6.86957L17.71 5.03957Z" fill="#808080"/>
                                    </svg>
                                </div>
                                <div className="education-history__edit">
                                    <svg
                                        width="14"
                                        height="18"
                                        viewBox="0 0 14 18"
                                        fill="none"

                                    >
                                        <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="#808080"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <button style={{width: "176px"}} className="add_edu-btn add_employ-btn" onClick={handleClickOpen}><FiPlus /> Add Languages </button>
            <Dialog classes={{ paper: classes.paper}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle disableTypography className="DialogTitle">Add Language</DialogTitle>
                <DialogContent>
                <div className="edu__form">
                    <form action="">
                        <div className="form-input">
                            <label htmlFor="Language">Language</label>
                            <input
                                type="text"
                                value={languageInput}
                                onChange={onLanguageInputChange}
                            />
                        </div>
                        <div className="form-input">
                            <label htmlFor="Proficiency">Proficiency</label>
                            <div className="languageSelectTwo">
                                <SelectDropdown
                                    selectDropdownHeader={selectDropdownHeader}
                                    upDateDropdownHeader={upDateDropdownHeader}
                                />
                            </div>
                        </div>
                        <DialogActions>
                            <div className="edu-btns">
                                <Button className={classes.Button1} onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button className={classes.Button2} onClick={ () => { handleClose(); onFormSubmit();} } color="primary">
                                    Save
                                </Button>
                            </div>
                        </DialogActions>
                    </form>
                </div>
                </DialogContent>
                
            </Dialog>
        </div>
    )
}

export default withStyles(styles)(Language);