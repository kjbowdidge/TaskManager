import axios from 'axios';
import { getToken } from '../../utils/auth';

const API_URL = 'http://localhost:5001/api/tasks';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const fetchTasks = async () => {
    const response = await apiClient.get('/');
    return response.data;
};

export const addTask = async (task) => {
    const response = await apiClient.post('/', task);
    return response.data;
};

export const updateTask = async (id) => {
    const response = await apiClient.put(`/${id}`);
    return response.data;
};

export const deleteTask = async (id) => {
    const response = await apiClient.delete(`/${id}`);
    return response.data;
};
