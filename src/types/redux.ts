import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '@app/store/reducers';
import { AnyAction } from 'redux';

export type AppDispatch = ThunkDispatch<AppState, any, AnyAction>;