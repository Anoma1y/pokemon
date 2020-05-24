export const statFormat = {
    hp: {
        name: 'HP',
        color: '#c5f0d2',
    },
    attack: {
        name: 'Attack',
        color: '#efebce',
    },
    defense: {
        name: 'Defense',
        color: '#f1dfb9',
    },
    speed: {
        name: 'Speed',
        color: '#d1f1f6',
    },
    'special-defense': {
        name: 'Sp. Def',
        color: '#bed1ef',
    },
    'special-attack': {
        name: 'Sp. Atk',
        color: '#dacde8',
    },
}

export const formatTypes = {
    normal: { name: 'Normal', bgColor: '#a4acaf', color: '#ffffff' },
    fighting: { name: 'Fighting', bgColor: '#d56723', color: '#ffffff' },
    flying: { name: 'Flying', bgColor: '#3dc7ef', color: '#1c1919' },
    poison: { name: 'Poison', bgColor: '#b97fc9', color: '#ffffff' },
    ground: { name: 'Ground', bgColor: '#f7de3f', color: '#1c1919' },
    rock: { name: 'Rock', bgColor: '#a38c21', color: '#ffffff' },
    bug: { name: 'Bug', bgColor: '#729f3f', color: '#ffffff' },
    ghost: { name: 'Ghost', bgColor: '#7b62a3', color: '#ffffff' },
    steel: { name: 'Steel', bgColor: '#9eb7b8', color: '#ffffff' },
    fire: { name: 'Fire', bgColor: '#fd7d24', color: '#ffffff' },
    water: { name: 'Water', bgColor: '#4592c4', color: '#ffffff' },
    grass: { name: 'Grass', bgColor: '#9bcc50', color: '#ffffff' },
    electric: { name: 'Electric', bgColor: '#eed535', color: '#1c1919' },
    psychic: { name: 'Psychic', bgColor: '#f366b9', color: '#ffffff' },
    ice: { name: 'Ice', bgColor: '#9f9fff', color: '#ffffff' },
    dragon: { name: 'Dragon', bgColor: '#53a4cf', color: '#1c1919' },
    dark: { name: 'Dark', bgColor: '#707070', color: '#ffffff' },
    fairy: { name: 'Fairy', bgColor: '#fdb9e9', color: '#1c1919' },
    unknown: { name: 'Unknown', bgColor: '#000000', color: '#ffffff' },
    shadow: { name: 'Shadow', bgColor: '#343443', color: '#ffffff' },
}

export const INITIAL_POKEMON = {
    id: 0,
    formatId: '000',
    name: '',
    base_experience: 0,
    height: 0,
    is_default: false,
    order: 0,
    weight: 0,
    abilities: [],
    forms: [],
    game_indices: [],
    held_items: [],
    location_area_encounters: [],
    moves: [],
    species: {
        url: '',
        name: '',
    },
    sprites: {
        back_default: null,
        back_female: null,
        back_shiny: null,
        back_shiny_female: null,
        front_default: null,
        front_female: null,
        front_shiny: null,
        front_shiny_female: null,
    },
    stats: [],
    types: [],
};

export const INITIAL_ABILITY = {
    id: 0,
    name: '',
    is_main_series: false,
    generation: {
        name: '',
        url: ''
    },
    names: [],
    effect_entries: [],
    effect_changes: [],
    flavor_text_entries: [],
    pokemon: [],
}