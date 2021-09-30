import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import ProjectTitle from './StepperContents/ProjectTitle';
import Skills from './StepperContents/Skills';
import Scope from './StepperContents/Scope';
import Budget from './StepperContents/Budget';
import title from "../../../../../assets/images/postJobImgs/title.png";
import activebudget from "../../../../../assets/images/postJobImgs/activebudget.png";
import activepencil from "../../../../../assets/images/postJobImgs/activepencil.png";
import target from "../../../../../assets/images/postJobImgs/target.png";


const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundColor:
        '#0000004D',
    },
  },
  completed: {
    '& $line': {
      backgroundColor:
        '#0000004D',
    },
  },
  line: {
    height: 2,
    border: 0,
    backgroundColor: '#0000004D',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#00000080',
    zIndex: 1,
    width: 49,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #0000004D',
    fontSize: '16px'
  },
  active: {
    color: '#fff',
    backgroundColor:
      '#45b618',
    border: 'transparent'
  },
  completed: {
    color: '#fff',
    backgroundColor:
      '#45b618',
    border: 'transparent'
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: title,
    2: activepencil,
    3: target,
    4: activebudget,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {<img src={icons[String(props.icon)]} alt="icons" />}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },

  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  step_label_root: {
    fontSize: '15px',
  }
}));

function getSteps() {
  return ['Project Title', 'Skills', 'Scope', 'Budget'];
}


const PostJobStepper = () => {
  const classes = useStyles();
  const [showDescrip, setShowDescrip] = useState(false);
  const [showSkills1, setShowSkills1] = useState(false);
  const [showScope1, setShowScope1] = useState(false);

  // ---------------------------------------ALL THE DATA COMES HERE FROM THE STEPPER FORM---------------------------------------
  const [postJobData, setPostJobData] = useState({
    projectTitle: '',
    selectedSkills: [],
    levelOfExpertise: '',
    projectScope: '',
    workTime: '',
    budgetSelect: '',
    budgetFrom: '',
    budgetTo: '',
    projectDescrip: ''
  });
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  console.log(postJobData);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <ProjectTitle showDescrip={showDescrip} setShowDescrip={setShowDescrip} postJobData={postJobData} setPostJobData={setPostJobData} handleNext={handleNext} handleBack={handleBack} activeStep={activeStep} />
      case 1:
        return <Skills showSkills1={showSkills1} setShowSkills1={setShowSkills1} postJobData={postJobData} setPostJobData={setPostJobData} handleNext={handleNext} handleBack={handleBack} />
      case 2:
        return <Scope showScope1={showScope1} setShowScope1={setShowScope1} postJobData={postJobData} setPostJobData={setPostJobData} handleNext={handleNext} handleBack={handleBack} />;
      default:
        return <Budget postJobData={postJobData} setPostJobData={setPostJobData} handleBack={handleBack} />;
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon} classes={{ label: classes.step_label_root }} >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {getStepContent(activeStep)}
    </>
  );
}

export default PostJobStepper;