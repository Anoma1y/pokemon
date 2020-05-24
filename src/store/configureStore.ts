import {createStore, compose, applyMiddleware} from 'redux';
import {routerMiddleware as createRouterMiddleware} from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import history from '@app/helpers/history';
import createReducer from './reducers/index';

const routerMiddleware = createRouterMiddleware(history);

const initialState = {};

let middlewares = [thunkMiddleware, routerMiddleware];
let enchancers: any[] = [];

if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({
        collapsed: true,
        duration: true,
        diff: true,
        colors: {
            title: () => '#fff',
        },
    });

    if (typeof window === 'object') {
        enchancers = [
            ...enchancers,
            // @ts-ignore
            window["__REDUX_DEVTOOLS_EXTENSION__"] && window["__REDUX_DEVTOOLS_EXTENSION__"](),
        ];
    }

    middlewares = [...middlewares, logger];
}

const store = createStore(
    createReducer(),
    initialState,
    compose(
        applyMiddleware(...middlewares),
        ...enchancers,
    ),
);

export default store;
