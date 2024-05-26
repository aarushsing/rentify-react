import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import AddProperty from './components/AddProperty';
import PropertyList from './components/PropertyList';

const App = () => {
    const [token, setToken] = useState(null);

    return (
        <div>
            <h1>Rentify</h1>
            {!token ? (
                <div>
                    <h2>Register</h2>
                    <Register />
                    <h2>Login</h2>
                    <Login setToken={setToken} />
                </div>
            ) : (
                <div>
                    <h2>Add Property</h2>
                    <AddProperty token={token} />
                    <h2>Properties</h2>
                    <PropertyList token={token} />
                </div>
            )}
        </div>
    );
};

export default App;
