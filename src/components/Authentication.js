import React from "react";

export default function Authentication() {

    const [login, setLogin] = React.useState();
    const [password, setPassword] = React.useState();

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
            .then(data => data.status === 'success' ? window.location.href = '/coffees' : alert('Error de autenticacion. Revise sus credenciales.'))
    }

    const handleCancel = () => {
        setLogin('');
        setPassword('');
    };

    function showLogin() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm" style={{ maxWidth: '400px', margin: '0 auto' }}>
                        <form style={{ background: '#f2f2f2', padding: '20px', borderRadius: '5px' }}>
                            <div className="form-group">
                                <label htmlFor="login">Login: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="login"
                                    aria-describedby="loginHelp"
                                    placeholder="Enter login"
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password: </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        onClick={handleSubmit}
                                        style={{ width: '100%' }}
                                    >
                                        Enviar
                                    </button>
                                </div>
                                <div className="col-sm-6">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={handleCancel}
                                        style={{ width: '100%' }}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
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
