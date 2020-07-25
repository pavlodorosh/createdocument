import { createStore } from 'redux';


import reducers from './reducers';


export default function createReduxStore() {


    const store = createStore(
        reducers,
    );

    return store;
}
