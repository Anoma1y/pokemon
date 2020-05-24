import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { formatPokeId, getIdFromLink } from '@app/helpers/poke';
import { PokemonItemExtend } from '@app/store/models/app';
import { NotFound } from '@app/components/NotFound';
import { Loading } from '@app/components/Loading';

interface PokemonListProps {
    data: PokemonItemExtend[];
    loading: boolean;
    hasNotFoundBtn?: boolean;
}

const PokemonList = memo((props: PokemonListProps) => {
    const { data, loading, hasNotFoundBtn = false } = props;

    if (loading) {
        return <Loading/>;
    }

    if (data.length === 0) {
        return <NotFound hasBtn={hasNotFoundBtn}/>;
    }

    return (
        <div className={'d-flex flex-wrap'}>
            {data.map((poke) => {
                const id = poke.id || getIdFromLink(poke.url);
                const formatId = formatPokeId(id);
                const imagePath = formatId.length < 4
                    ? `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatId}.png`
                    : 'https://img.icons8.com/carbon-copy/2x/question-mark.png';

                return (
                    <Link to={`/pokemon/${poke.name}`} key={poke.name} className={'pokemon-item'}>
                        <div className={'pokemon-item__image'}>
                            <img src={imagePath} alt=""/>
                        </div>
                        <div className={'pokemon-item__title'}>
                            <span>#{formatId}</span>
                            <p>{poke.name}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
});

export { PokemonList };