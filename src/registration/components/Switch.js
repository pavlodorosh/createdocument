import React, { useState, useEffect } from 'react';
import { Date, SurnameInfo, RegistrationNumber } from './components';
import { STEPS_MAP, DOCUMENT } from './constants/StepMap';

export default (props) => {
    const [page, setPage] = useState(STEPS_MAP.DATE_INFO);
    const [count, setCount] = useState(1);

    switch (page) {
        case STEPS_MAP.DATE_INFO: {

            return (
                <Date
                    path={props}
                    onHandleChangeCount={() => setCount(setStateCount => (setStateCount + 1))}
                    onHandleChangeStep={() => setPage(DOCUMENT[count])}
                    i={DOCUMENT[count]}
                />
            );
        }

        case STEPS_MAP.NAME_INFO: {

            return (
                <SurnameInfo
                    path={props}
                    onHandleChangeStep={() => setPage(DOCUMENT[count])}
                    onHandleChangeCount={() => setCount(state => (state + 1))}
                    i={DOCUMENT[count]}
                />
            );
        }

        case STEPS_MAP.REGISTRATION_NUMBER: {

            return (
                <RegistrationNumber
                    path={props}
                    onHandleChangeStep={() => setPage(DOCUMENT[count])}
                    onHandleChangeCount={() => setCount(state => (state + 1))}
                    i={DOCUMENT[count]}
                />
            );
        }

        case STEPS_MAP.SURNAME_INFO: {
            return (
                <RegistrationNumber
                    path={props}
                    onHandleChangeStep={() => setPage(DOCUMENT[count])}
                    onHandleChangeCount={() => setCount(state => (state + 1))}
                    i={DOCUMENT[count]}
                />
            );
        }

        case STEPS_MAP.gender: {

            return (
                <RegistrationNumber
                    path={props}
                    onHandleChangeStep={() => setPage(DOCUMENT[count])}
                    onHandleChangeCount={() => setCount(state => (state + 1))}
                    i={DOCUMENT[count]}
                />
            );
        }

        default:
            return (
                <div>finish</div>
            );
    }
}

// onHandleChangePage={() => setPage(STEPS_MAP.GENERAL_INFO)}
