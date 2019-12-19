import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../_reducers';
import logger from 'redux-logger';

const reduxStore = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        logger
    )
);

export default reduxStore;