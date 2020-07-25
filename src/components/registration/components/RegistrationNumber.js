import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    }
});

const Date = ({ i }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {i}
        </div>
    )
}

export default Date
