import { ALL_INFORMATION_TYPES } from '../types';

const defaultState = {
    name: '',
    city: '',
    date: '',
};

// -------- Reducer --------

export default (state = defaultState, action) => {
    switch (action.type) {
        case ALL_INFORMATION_TYPES.SET_ACTIVE_STEPS_NEXT: {

            return {
                ...state,
                name: action.name,
                surname: action.surname
            };
        }
        case ALL_INFORMATION_TYPES.SET_DATE: {

            return {
                ...state,
                date: action.date
            };
        }
        case ALL_INFORMATION_TYPES.SET_GENDER: {

            return {
                ...state,
                date: action.gender
            };
        }

        default: {
            return state;
        }
    }
};
