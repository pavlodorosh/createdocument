import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import * as actions from '../../../redux/actions/index';
import { DOCUMENT } from "../constants/StepMap";

const useStyles = makeStyles((theme) => ({
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const Buttons = ({ setActiveStepBack, activeStep, setActiveStepNext }) => {
    const classes = useStyles();
    const steps = DOCUMENT;

    const handleNext = () => {
        setActiveStepNext();
    };

    const handleBack = () => {
        setActiveStepBack();
    };

    return (
        <div>
            <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
                type="submit"
            >
                Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    activeStep: state.registration.activeStep
});

export default connect(mapStateToProps, actions)(Buttons);

