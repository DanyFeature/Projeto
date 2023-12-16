import React from 'react';
import './App.css';
import LoginForm from './LoginForm';
import logo from './Kyntech.png';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="Kyntech Logo" className="App-logo" /> {/* Using the logo */}
                <LoginForm />
            </header>
        </div>
    );
}

export default App;
