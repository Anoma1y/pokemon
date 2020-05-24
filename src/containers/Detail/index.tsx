import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { makePokemonList } from '@app/store/selectors/app';
import { formatPokeId } from '@app/helpers/poke';
import { INITIAL_POKEMON } from '@app/helpers/pokemonData';
import history from '@app/helpers/history';
import { capitalize } from '@app/helpers/common';
import { Pokemon } from '@app/store/models/app';
import { NotFound } from '@app/components/NotFound';
import { PokemonInfo } from '@app/containers/Detail/components/Info';
import { Loading } from '@app/components/Loading';
import Api from '@app/api';

const Detail = () => {
    const [pokemon, setPokemon] = useState<Pokemon>(INITIAL_POKEMON);
    const [notFound, setNotFound] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const { name: paramName } = useParams<{ name: string }>();
    const pokemonList = useSelector(makePokemonList());

    useEffect(() => {
        setLoading(true);

        Api.modules.poke.getSingle(paramName)
            .then((response) => {
                document.title = capitalize(response.data.name);

                setPokemon({
                    ...response.data,
                    formatId: formatPokeId(response.data.id),
                });
            })
            .catch(() => {
                setNotFound(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [paramName]);

    const goTo = (path: string): void => {
        if (!loading) {
            history.push(path);
        }
    };

    const { id, name, formatId } = pokemon;

    const prevId = id === 0 ? 0 : (id - 1);
    const nextId = id + 1;

    const prev = pokemonList.find(poke => poke.id === prevId);
    const next = pokemonList.find(poke => poke.id === nextId);

    let content;

    if (notFound) {
        content = <NotFound title={'Pokemon not found'}/>;
    } else if (loading) {
        content = <Loading />;
    } else {
        content = <PokemonInfo data={pokemon}/>;
    }

    return (
        <div className={'pokemon'}>

            <header className={'header pokemon-header'}>
                <div className={'d-flex'}>
                    <div
                        className={`pokemon-header__link ${prevId === 0 ? 'pokemon-header__link-disabled' : ''}`}
                        onClick={() => goTo(`/pokemon/${prevId}`)}
                    >
                        <div className="pokemon-header__item pokemon-header__item-left">
                            <span className="pokemon-header__id">#{formatPokeId(prevId)}</span>
                            <span className="pokemon-header__name">{prev ? capitalize(prev.name) : '??'}</span>
                        </div>
                    </div>

                    <div className={'vertical-divider'}/>

                    <div
                        className={'pokemon-header__link'}
                        onClick={() => goTo(`/pokemon/${nextId}`)}
                    >
                        <div className="pokemon-header__item pokemon-header__item-right">
                            <span className="pokemon-header__name">{next ? capitalize(next.name) : '??'}</span>
                            <span className="pokemon-header__id">#{formatPokeId(nextId)}</span>
                        </div>
                    </div>
                </div>

                <div className={'pokemon-header__title'}>
                    <h1>{name}</h1>
                    <span className="pokemon-detail__id">#{formatId}</span>
                </div>
            </header>

            {content}
        </div>
    );
};

export { Detail };