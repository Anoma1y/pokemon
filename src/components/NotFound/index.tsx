import React from 'react';
import history from '@app/helpers/history';

interface NotFoundProps {
    title?: string;
    hasBtn?: boolean
}

const NotFound = ({title = 'Not found', hasBtn}: NotFoundProps) => (
    <div className={'not-found'}>
        <h1>Not found</h1>
        {hasBtn && (
            <button
                className={'btn btn-primary'}
                onClick={() => history.replace('/pokemon')}
            >Go to pokemon list
            </button>
        )}
    </div>
);

export {NotFound};