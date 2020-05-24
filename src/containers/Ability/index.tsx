import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import Api from '@app/api';
import history from '@app/helpers/history';
import { Ability, PokemonState } from '@app/store/models/app';
import { INITIAL_ABILITY } from '@app/helpers/pokemonData';
import { AbilityInfo } from '@app/containers/Ability/components/Info';
import { NotFound } from '@app/components/NotFound';
import { Loading } from '@app/components/Loading';
import { capitalize } from '@app/helpers/common';

const Ability = () => {
    const location = useLocation<PokemonState>();
    const [ability, setAbility] = useState<Ability>(INITIAL_ABILITY);
    const [notFound, setNotFound] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const param = useParams<{ name: string }>();

    useEffect(() => {
        Api.modules.poke.getAbility(param.name)
            .then((response) => {
                setAbility(response.data);
            })
            .catch(() => {
                setNotFound(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    const goTo = (name?: string) => {
        history.push(`/pokemon/${name ? name : ''}`);
    }

    const pokemonFrom = (location.state && location.state.name && location.state.id) ? location.state : null;
    const findName = ability.names.find(name => name.language.name === 'en');
    const formatName = (findName && findName.name) || ability.name;

    useEffect(() => {
        document.title = `Ability - ${formatName}`
    }, [formatName])

    let content;

    if (notFound) {
        content = <NotFound title={'Ability not found'}/>;
    } else if (loading) {
        content = <Loading />;
    } else {
        content = (
            <AbilityInfo
                data={ability}
                formatName={formatName}
            />
        );
    }

    return (
        <div className={'ability'}>
            <div className={'header d-flex justify-content-between'}>
                {pokemonFrom && (
                    <button
                        onClick={() => goTo(pokemonFrom.name)}
                        className={'btn btn-secondary'}
                    >Back to {capitalize(pokemonFrom.name as string)}
                    </button>
                )}
                <button onClick={() => goTo()} className={'btn btn-primary'}>Go to pokemon list</button>
            </div>

            {content}
        </div>
    );
};

export { Ability };