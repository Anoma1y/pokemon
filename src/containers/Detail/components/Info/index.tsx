import { Pokemon } from '@app/store/models/app';
import React, { memo } from 'react';
import { formatTypes, statFormat } from '@app/helpers/pokemonData';
import { Link } from 'react-router-dom';
import history from '@app/helpers/history';
import { getFormat } from '@app/helpers/common';

interface PokemonInfoProps {
    data: Pokemon
}

const PokemonInfo = memo((props: PokemonInfoProps) => {
    const { id, name, formatId, types, stats, abilities } = props.data;

    return (
        <React.Fragment>
            <div className={'pokemon-detail'}>
                <div className={'pokemon-detail__image'}>
                    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatId}.png`}
                         alt={name}/>
                </div>
                <div className={'pokemon-detail__description'}>
                    <div className={'pokemon-detail__title'}>Types</div>

                    <div className={'mb-4 d-flex'}>
                        {types.map((type) => {
                            const format = getFormat(formatTypes, type.type.name);

                            return (
                                <div key={type.type.name} className={'pokemon-type'}
                                     style={{ backgroundColor: format.bgColor, color: format.color }}>
                                    {format.name}
                                </div>
                            );
                        })}
                    </div>

                    <div className={'pokemon-detail__title'}>Stats</div>

                    <div className={'mb-4'}>
                        {stats.map((stat) => {
                            const format = getFormat(statFormat, stat.stat.name);

                            return (
                                <div key={stat.stat.name} className={'pokemon-stat'}
                                     style={{ backgroundColor: format.color }}>
                                    <div className={'pokemon-stat__key'}>{format.name}</div>
                                    <div className={'pokemon-stat__value'}>{stat.base_stat}</div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={'pokemon-detail__title'}>Abilities</div>

                    <div className={'mb-4'}>
                        {abilities.map((ability) => (
                            <div key={ability.ability.name} className={'pokemon-ability'}>
                                <div className={'pokemon-ability__key'}>{ability.ability.name}</div>
                                <Link
                                    to={{
                                        pathname: `/pokemon/ability/${ability.ability.name}`,
                                        state: {
                                            id,
                                            name,
                                        },
                                    }}
                                    className={'pokemon-ability__value'}
                                >?</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={'pokemon-detail__more'}>
                <button className={'btn btn-primary'} onClick={() => history.replace('/pokemon')}>Explore more pokemon</button>
            </div>
        </React.Fragment>
    );
});

export {PokemonInfo}