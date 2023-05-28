import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

export default function Authentication() {

    const [login, setLogin] = React.useState();
    const [password, setPassword] = React.useState();
    const [loginError, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const authenticationData = {
            "login": login,
            "password": password
        };

        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(authenticationData)
        })
            .then(response => response.json())
            .then(data => data.status === 'success' ? window.location.href = '/coffees' : setError(<FormattedMessage id="authentication" />))
    }

    const handleCancel = () => {
        setLogin('');
        setPassword('');
    };

    function showLogin() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm" style={{ maxWidth: '881px', margin: '0 auto' }}>
                        <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                            <FormattedMessage id="logintitle" />
                        </p>
                        <form style={{ background: '#f9f1f1', padding: '20px', borderRadius: '5px', border: '2px solid black' }}>
                            <div className="form-group">
                                <p style={{ fontWeight: 'bold', marginLeft: '9rem', fontSize: '20px' }}>
                                    <FormattedMessage id="username" />
                                </p>
                                <input
                                    style={{ backgroundColor: '#d9d9d9', borderColor: 'transparent', width: '556px', height: '58px', marginLeft: '9rem' }}
                                    type="text"
                                    className="form-control"
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <p style={{ fontWeight: 'bold', marginLeft: '9rem', fontSize: '20px' }}>
                                    <FormattedMessage id="password" />
                                </p>
                                <input
                                    style={{ backgroundColor: '#d9d9d9', borderColor: 'transparent', width: '556px', height: '58px', marginLeft: '9rem' }} type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="row">
                                <div style={{ marginBottom: '2rem' }} className="col-sm-6">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        onClick={handleSubmit}
                                        style={{ width: '253px', backgroundColor: '#8fa98f', borderColor: 'transparent', marginLeft: '9rem', height: '53px', marginTop: '2rem', fontWeight: 'bold', fontSize: '20px' }}
                                    >
                                        <FormattedMessage id="submit" />
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={handleCancel}
                                        style={{ width: '253px', backgroundColor: '#e75d5d', borderColor: 'transparent', marginLeft: '4rem', height: '53px', marginTop: '2rem', fontWeight: 'bold', fontSize: '20px' }}
                                    >
                                        <FormattedMessage id="cancel" />
                                    </button>
                                </div>
                                <p style={{ color: '#e75d5d', textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>{loginError}</p>
                            </div>
                        </form>

                    </div>
                </div>
                <p style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <FormattedMessage id="contact"></FormattedMessage>: +57 3102105253 - info@elaromamagico.com - @elaromamagico
                </p>
            </div>
        )
    }

    // return a component for a login form
    return (
        <>
            {showLogin()}
        </>
    )
}
