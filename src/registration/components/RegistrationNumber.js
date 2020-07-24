import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Template1 from "../../document_templates/Template1";
import StepRender from "../../constants/StepRender";

import { DocContext } from "../../components/DocContext";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    fixed_generator: {
        position: 'fixed',
        top: '0px',
        left: '0px',
        height: '100%',
        backgroundColor: theme.palette.info.light
    },
    title: {
        textAlign: 'center',
        color: theme.palette.text.primary
    },
    next_button: {
        display: 'flex',
        marginTop: theme.spacing(1),
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}));

const Date = ({ onHandleChangeStep, path, i, onHandleChangeCount }) => {
    const classes = useStyles();

    const [state, setState] = useContext(DocContext);
    const handlerClick = () => {
        onHandleChangeCount()
        onHandleChangeStep()
    }

    return (
        <div className={classes.root}>
            {i}
            <Button
                variant='contained'
                color='primary'
                className={classes.next_button}
                endIcon={<NavigateNextIcon />}
                onClick={handlerClick}
            >
                Наступний крок
            </Button>

        </div>
    )
}

export default Date
