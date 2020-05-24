import { Ability, PokemonState } from '@app/store/models/app';
import React, { memo } from 'react';
import { capitalize } from '@app/helpers/common';
import { formatPokeId, getIdFromLink } from '@app/helpers/poke';
import { PokemonList } from '@app/components/PokemonList';

interface AbilityInfoProps {
    data: Ability;
    formatName: string;
}

const AbilityInfo = memo((props: AbilityInfoProps) => {
    const {data: {
        effect_entries,
        pokemon,
    }, formatName} = props;

    return (
        <div className={'ability-info'}>
            <div className={'ability__title'}>
                {formatName}
            </div>
            <div className={'ability-effects'}>
                <div className={'ability__subtitle'}>Effects:</div>
                <div>
                    {effect_entries.map((effect, idx) => (
                        <div key={idx}>
                            {effect.effect}
                        </div>
                    ))}
                </div>
            </div>
            <div className={'ability-pokemons'}>
                <div className={'ability__subtitle'}>Pokemon with the <span className={'color-primary'}>{formatName}</span></div>
                <div className={'d-flex flex-wrap justify-content-center'}>
                    <PokemonList data={pokemon.map((poke) => poke.pokemon)} loading={false} />
                </div>
            </div>
        </div>
    )
})

export {AbilityInfo};