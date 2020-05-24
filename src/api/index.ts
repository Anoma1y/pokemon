import axios, { AxiosInstance } from 'axios';
import {Poke} from './modules/Poke';

type IModules = {
    poke: Poke,
}

class Api {
    protected http: AxiosInstance;
    public modules: IModules;

    constructor() {
        this.http = axios.create({
            baseURL: 'https://pokeapi.co/api/v2',
            timeout: 10000,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'App-Locale': 'en',
            },
        });

        this.modules = {
            poke: new Poke(this.http),
        };
    }
}

export default new Api();
