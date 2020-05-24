import { Reducer } from 'redux';
import produce, { Draft } from 'immer';
import { AppPageState } from '../models/app';
import { ActionType } from 'typesafe-actions';
import { AppTypes } from '../constants/app';
import * as actions from '../actions/app';

export type AppAction = ActionType<typeof actions>;

export const INITIAL_STATE: AppPageState = {
    limit: 20,
    offset: 0,
    pokemonList: [],
};

const reducer: Reducer<AppPageState, AppAction> = (state: AppPageState = INITIAL_STATE, action: AppAction) => {
    return produce<AppPageState>(state, (draft: Draft<AppPageState>): AppPageState => {
        switch (action.type) {
            case AppTypes.SET_LIST:
                draft.pokemonList = action.payload;
                return draft;
            case AppTypes.SET_OFFSET:
                draft.offset = action.payload;
                return draft;
            default: {
                return state
            }
        }
    })
};

export default reducer;
