import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {makePokemonList} from '@app/store/selectors/app';
import { AppDispatch } from '@app/types/redux';
import { fetchPokemonList } from '@app/store/actions/app';
import { Link } from 'react-router-dom';
import { formatPokeId } from '@app/helpers/poke';
import { debounce } from '@app/helpers/common';
import { PokemonItemExtend } from '@app/store/models/app';
import { PokemonList } from '@app/components/PokemonList';
import { Loading } from '@app/components/Loading';

interface ListProps {
    ready: boolean;
}

const List = (props: ListProps) => {
    const resRef = useRef(null);
    const [search, setSearch] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [found, setFound] = useState<PokemonItemExtend[]>([]);
    const pokemonList = useSelector(makePokemonList())
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        if (search.length > 0) {
            handleSearch(search);
        } else {
            setFound(pokemonList);
        }
    }, [pokemonList.length])

    useEffect(() => {
        document.title = 'Pokemon List';
    }, []);

    const handleAppend = () => {
        setLoading(true);
        dispatch(fetchPokemonList())
            .then(() => {
                setLoading(false);
            })
    }

    const handleSearch = (value: string) => {
        const foundItems = pokemonList.filter((poke) => {
            return poke.id.toString().includes(value) || poke.name.includes(value);
        })

        setFound(foundItems);
        setSearch(value);
    }

    const debounceSearch = debounce(handleSearch, 400);

    return (
        <div ref={resRef}>
            <header className={'header'}>
                <div className={'search'}>
                    <label htmlFor={'search'}>Name or ID</label>
                    <input
                        id={'search'}
                        type={'text'}
                        onChange={(e) => {
                            const {value} = e.target;

                            debounceSearch(value);
                        }}
                        placeholder={'Enter pokemon id or name'}
                    />
                </div>
            </header>

            <PokemonList loading={!props.ready} data={found} />

            {loading && <Loading />}

            <div>
                <button
                    className={'btn btn-secondary btn-center'}
                    onClick={handleAppend}
                    disabled={loading}
                >
                    {(!props.ready || loading) ? 'Wait!' : 'Load more Pokemon'}
                </button>
            </div>
        </div>
    );
};

export { List };