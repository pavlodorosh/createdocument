import React from 'react';

import Country from '../components/Country';
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

        case FIELDS_INFORMATION.SURNAME_INFO: {
            return (
                <Country />
            );
        }

        case FIELDS_INFORMATION.REGISTRATION_NUMBER: {

            return (
                <SurnameInfo />
            );
        }



        case FIELDS_INFORMATION.GENDER: {

            return (
                <SurnameInfo />
            );
        }

        default:
            return (
                <div>finish</div>
            );
    }
}
