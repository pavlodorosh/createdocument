import React, { useState, useEffect } from 'react';
import { Generator } from './components';
import { STEPS_MAP } from './constants/StepMap';

export default (props) => {
    const [page, setPage] = useState(STEPS_MAP.DATE_INFO);
debugger
    useEffect(() => {
        setPage(STEPS_MAP.DATE_INFO);
    }, []);

    switch (page) {
        case STEPS_MAP.DATE_INFO:
            return (
                <Generator
                    path={props}
                    onHandleChangeStep={() => setPage(STEPS_MAP.NAME_INFO)}
                    i={STEPS_MAP.DATE_INFO}
                />
            );

        case STEPS_MAP.NAME_INFO:
            return (
                <Generator
                    path={props}
                    onHandleChangeStep={() => setPage(STEPS_MAP.SURNAME_INFO)}
                    i={STEPS_MAP.NAME_INFO}
                />
            );

        case STEPS_MAP.SURNAME_INFO:
            return (
                <Generator
                    path={props}
                    onHandleChangeStep={() => setPage(STEPS_MAP.SURNAME_INFO)}
                    i={STEPS_MAP.SURNAME_INFO}
                />
            );

        default:
            return null;
    }
}

// onHandleChangePage={() => setPage(STEPS_MAP.GENERAL_INFO)}
