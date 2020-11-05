import React from 'react';

import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/dark-theme.css';
import './styles/styles.css';

import List from './components/List';
import Form from './components/Form';

function App( ) {
    return (
        <div className="container">
            <List />
            <Form />
        </div>
    );
}

export default App;
