import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { List } from './containers/List';
import { Detail } from './containers/Detail';
import { Ability } from './containers/Ability';
import { fetchPokemonList } from '@app/store/actions/app';
import { AppDispatch } from '@app/types/redux';
import { useDispatch } from 'react-redux';

const App = () => {
    const dispatch: AppDispatch = useDispatch();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        dispatch(fetchPokemonList())
            .then(() => {
                setReady(true);
            })
    }, [])

    return (
        <div className={'container'}>
            <Switch>
                <Route exact path="/"  render={() => <Redirect to="/pokemon" />}/>
                <Route path={'/pokemon/ability/:name'} component={Ability}/>
                <Route path={'/pokemon/:name'} component={Detail}/>
                <Route path={'/pokemon'} render={() => <List ready={ready}/>}/>
            </Switch>
        </div>
    )
};

export { App };
