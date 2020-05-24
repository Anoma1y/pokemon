import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import history from './helpers/history';
import store from './store/configureStore';

import './scss/app.scss';

import {App} from './App';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.querySelector("#root") as HTMLElement
);
