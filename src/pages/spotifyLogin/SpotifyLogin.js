import React from 'react';
import axios from 'axios';
import styles from './SpotifyLogin.module.css';

const SpotifyLogin = () => {
    const jwt = localStorage.getItem("accessToken");

    const handleLogin = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_HOST}/spotify/login`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });

            if (response.data.redirectUrl) {
                window.location.href = response.data.redirectUrl; // Redirect to Spotify authorization URL
            } else {
                console.error('No redirect URL found in response.');
            }
        } catch (error) {
            console.error('Failed to login to Spotify:', error);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <button onClick={handleLogin} className={styles.loginButton}>
                Login with Spotify
            </button>
        </div>
    );
};

export default SpotifyLogin;
