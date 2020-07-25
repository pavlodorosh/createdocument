import Button from "@material-ui/core/Button";
import StepContent from "@material-ui/core/StepContent";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.actionsContainer}>
            <div>
                <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div>
        </div>
    )
}
