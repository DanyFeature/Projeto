import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css'

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');

        try {
            // Update the URL with your Laravel backend API endpoint
            const response = await axios.post('http://localhost:8000/api/login', { email, password });
            console.log(response.data);
            // Handle success here - e.g., store user data, redirect, etc.
            // For example, you might want to save the user's token in localStorage
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error:', error.response.data);
                setErrorMessage(error.response.data.error || 'Incorrect credentials');
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error:', error.request);
                setErrorMessage('No response from server');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error:', error.message);
                setErrorMessage('Error: ' + error.message);
            }
        }
    };

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
