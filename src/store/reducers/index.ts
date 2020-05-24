import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import history from '@app/helpers/history';

import app from './app';

import {AppPageState} from "../models/app";

export type AppState = {
    app: AppPageState,
}

export default (injectedReducers?: any) =>
    combineReducers({
        router: connectRouter(history),
        app,
        ...injectedReducers,
    });
