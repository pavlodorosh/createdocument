import React from 'react';

import { Date, SurnameInfo } from './index';
import { FIELDS_INFORMATION, DOCUMENT } from '../constants/StepMap';

export default ({ activeStep }) => {

    switch (DOCUMENT[activeStep]) {
        case FIELDS_INFORMATION.DATE_INFO: {

            return (
                <Date
                    i={DOCUMENT[activeStep]}
                />
            );
        }

        case FIELDS_INFORMATION.REGISTRATION_NUMBER: {

            return (
                <SurnameInfo
                    i={DOCUMENT[activeStep]}
                />
            );
        }

        case FIELDS_INFORMATION.NAME_INFO: {

            return (
                <SurnameInfo
                    i={DOCUMENT[activeStep]}
                />
            );
        }

        case FIELDS_INFORMATION.SURNAME_INFO: {
            debugger
            return (
                <SurnameInfo
                    i={DOCUMENT[activeStep]}
                />
            );
        }

        case FIELDS_INFORMATION.GENDER: {

            return (
                <SurnameInfo
                    i={DOCUMENT[activeStep]}
                />
            );
        }

        default:
            return (
                <div>finish</div>
            );
    }
}