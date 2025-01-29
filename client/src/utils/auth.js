import axios from 'axios';

const API_URL = 'http://localhost:5001/api/auth/token';

export const storeToken = (token) => {
    localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const fetchToken = async () => {
    try {
        const response = await axios.post(API_URL);
        storeToken(response.data.token);
        return response.data.token;
    } catch (error) {
        console.error('Error fetching token:', error);
        return null;
    }
};
