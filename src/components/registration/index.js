import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StepButton, Stepper, Step, Button, Typography } from '@material-ui/core';

import Switch from './components/ManageInfo';
import { DOCUMENT } from './constants/StepMap';
import { connect } from "react-redux";
import * as actions from '../../redux/actions/index';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const Registration = ({ setActiveStepReset, activeStep }) => {
    const classes = useStyles();
    const steps = DOCUMENT;

    const handleReset = () => {
        setActiveStepReset(0);
    };

    return (
        <div className={ classes.root }>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepButton>{label}</StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <Switch activeStep={activeStep} />
                    </div>
                )}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    activeStep: state.registration.activeStep
})

export default connect(mapStateToProps, actions)(Registration);
