import STEP_TYPES from '../types';

export const setActiveStepBack  = () => ({
    type: STEP_TYPES.SET_ACTIVE_STEPS_BACK,
});

export const setActiveStepNext = () => ({
    type: STEP_TYPES.SET_ACTIVE_STEPS_NEXT,
});

export const setActiveStepReset = () => ({
    type: STEP_TYPES.SET_ACTIVE_STEPS_RESET,
});
