import { STEP_TYPES, ALL_INFORMATION_TYPES } from '../types';

export const setActiveStepBack  = () => ({
    type: STEP_TYPES.SET_ACTIVE_STEPS_BACK,
});

export const setActiveStepNext = () => ({
    type: STEP_TYPES.SET_ACTIVE_STEPS_NEXT,
});

export const setActiveStepReset = () => ({
    type: STEP_TYPES.SET_ACTIVE_STEPS_RESET,
});


export const setStateDate = (date) => ({
    type: ALL_INFORMATION_TYPES.SET_DATE,
    date
});

export const setStateGender = (gender) => ({
    type: ALL_INFORMATION_TYPES.SET_GENDER,
    gender
});

