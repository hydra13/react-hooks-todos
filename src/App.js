import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';

const App = props => {
    const [page, setPage] = useState('auth');

    const switchPage = pageName => {
        setPage(pageName);
    }

    return (
        <div>
            <Header 
                onLoadTodos={ switchPage.bind(null, 'todos') }
                onLoadAuth={ switchPage.bind(null, 'auth') }
            />
            <hr />
            { page !== 'auth' ? <Todo /> : <Auth /> }
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)