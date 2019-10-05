import React, { useState } from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.svg';

function App() {
    const [email, setEmail] = useState('');

    async function handlerSubmit(event) {
        event.preventDefault();

        const response = await api.post('/sessions', { email });
        const { _id } = response.data;

        localStorage.setItem('aircnc_user', _id);
    }

    return (
        <div className="container">
            <img src={ logo } alt="Logo AirCnc" ></img>

            <div className="content">
                <p>
                    Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
                </p>

                <form onSubmit={handlerSubmit}>
                    <label htmlFor="email">E-MAIL *</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Seu melhor e-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <button className="btn-primary" type="submit"> Entrar </button>
                </form>
            </div>
        </div>
    );
}

export default App;
