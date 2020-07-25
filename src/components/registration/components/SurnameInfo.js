import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    }
});

const Name = ({ i }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {i}
        </div>
    )
}

export default Name;
