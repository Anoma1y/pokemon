import {action} from "typesafe-actions";
import {AppTypes} from "../constants/app";
import { PokemonItem } from '@app/store/models/app';
import { Dispatch } from 'redux';
import Api from '@app/api';
import { AppState } from '@app/store/reducers';

export const setPokemonList = (data: PokemonItem[]) => action(AppTypes.SET_LIST, data);

export const setOffset = (value: number) => action(AppTypes.SET_OFFSET, value);

export function fetchPokemonList() {
    return (dispatch: Dispatch, getState: () => AppState) => new Promise((resolve, reject) => {
        const {offset, limit, pokemonList} = getState().app;

        Api.modules.poke.getList(limit, offset)
            .then((response) => {
                dispatch(setPokemonList([
                    ...pokemonList,
                    ...response.data.results
                ]));
                dispatch(setOffset(offset + limit));
                resolve();
            })
            .catch(reject)
    })
}
