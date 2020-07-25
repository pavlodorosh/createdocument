import FETCH_TYPES from '../types/types';

const defaultState = {
    totalLength: 0,
    perPage: 5,
    endPage: 5,
    pagesQuantity: 1,
    currentPage: 1,
    startRange: 0,
    postsData: null,
    userPutSuccess: false,
    userLoading: false,
    currentUser: '',
    userErrors: {
        name: [],
        surname: [],
        desc: [],
    },
};

// -------- Reducer --------

export default (state = defaultState, action) => {
    debugger
    switch (action.type) {
        case FETCH_TYPES.GET_REQUEST: {
            return {
                ...state,
                userLoading: true,
                postsData: action.data,
            };
        }

        default: {
            return state;
        }
    }
};
