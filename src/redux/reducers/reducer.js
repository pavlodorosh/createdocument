import FETCH_TYPES from '../types/types';

const defaultState = {
    totalLength: 0,
};

// -------- Reducer --------

export default (state = defaultState, action) => {
    debugger
    switch (action.type) {
        case FETCH_TYPES.GET_REQUEST: {
            return {
                ...state,
            };
        }

        default: {
            return state;
        }
    }
};
