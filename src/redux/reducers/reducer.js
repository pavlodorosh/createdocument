import STEP_TYPES from '../types';

const defaultState = {
    activeStep: 0,
};

// -------- Reducer --------

export default (state = defaultState, action) => {
    debugger
    switch (action.type) {
        case STEP_TYPES.SET_ACTIVE_STEPS_NEXT: {
            debugger
            return {
                ...state,
                activeStep: state.activeStep + 1
            };
        }

        case STEP_TYPES.SET_ACTIVE_STEPS_BACK: {
            debugger
            return {
                ...state,
                activeStep: state.activeStep - 1
            };
        }

        case STEP_TYPES.SET_ACTIVE_STEPS_RESET: {

            return {
                ...state,
                activeStep: 0
            };
        }

        default: {
            return state;
        }
    }
};
