import {AxiosInstance, AxiosPromise} from 'axios';
import AbstractApiModule from "./AbstractModule";
import { Pokemon, PokemonItem, Ability } from '@app/store/models/app';

type PokemonList = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonItem[]
}

class Poke extends AbstractApiModule {
    getList(limit = 20, offset = 0): AxiosPromise<PokemonList> {
        return this.http.get(`/pokemon?limit=${limit}&offset=${offset}`);
    }

    getSingle(nameOrId: string | number): AxiosPromise<Pokemon> {
        return this.http.get(`/pokemon/${nameOrId}`);
    }

    getAbility(nameOrId: string | number): AxiosPromise<Ability> {
        return this.http.get(`/ability/${nameOrId}`)
    }
}

export { Poke };
