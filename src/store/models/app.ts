export type Ability = {
    id: number;
    name: string;
    is_main_series: boolean;
    generation: {
        name: string;
        url: string
    };
    names: any[];
    effect_entries: any[];
    effect_changes: any[];
    flavor_text_entries: any[];
    pokemon: any[];
}

export type PokemonState = {
    name?: string;
    id?: number;
}

export type PokemonItem = {
    name: string;
    url: string;
}

export type PokemonItemExtend = PokemonItem & {
    id: number;
    formatId: string;
}

export type Pokemon = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: any[];
    forms: any[];
    game_indices: any[];
    held_items: any[];
    location_area_encounters: any[];
    moves: any[];
    species: PokemonItem;
    stats: any[];
    types: any[];
    sprites: {
        back_default: null | string;
        back_female: null | string;
        back_shiny: null | string;
        back_shiny_female: null | string;
        front_default: null | string;
        front_female: null | string;
        front_shiny: null | string;
        front_shiny_female: null | string;
    },
} & {
    formatId: string;
}

export type AppPageState = Readonly<{
    pokemonList: PokemonItem[];
    limit: number;
    offset: number;
}>
