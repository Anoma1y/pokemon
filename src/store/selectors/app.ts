import {createSelector} from 'reselect';
import { AppState } from '@app/store/reducers';
import { INITIAL_STATE } from '@app/store/reducers/app';
import { AppPageState, PokemonItemExtend } from '@app/store/models/app';
import { formatPokeId, getIdFromLink } from '@app/helpers/poke';

const selectApp = (state: AppState): AppPageState => state.app || INITIAL_STATE;

export const makePokemonList = () =>
    createSelector(
        selectApp,
        (state: AppPageState): PokemonItemExtend[] => state.pokemonList.map(poke => {
            const id = getIdFromLink(poke.url);

            return {
                ...poke,
                id,
                formatId: formatPokeId(id),
            }
        }),
    )

