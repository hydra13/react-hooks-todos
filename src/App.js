import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';
import AuthContext from './auth-context';

const App = props => {
    const [page, setPage] = useState('auth');
    const [authStatus, setAuthStatus] = useState(false);

    const switchPage = pageName => {
        setPage(pageName);
    }

    const login = () => {
        setAuthStatus(true);
    }

    return (
        <div>
            <AuthContext.Provider value={{status: authStatus, login}}>
                <Header 
                    onLoadTodos={ switchPage.bind(null, 'todos') }
                    onLoadAuth={ switchPage.bind(null, 'auth') }
                />
                <hr />
                { page !== 'auth' ? <Todo /> : <Auth /> }
            </AuthContext.Provider>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)