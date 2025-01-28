import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as taskAPI from './tasksApi';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    return await taskAPI.fetchTasks();
});

export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
    return await taskAPI.addTask(task);
});

export const updateTask = createAsyncThunk('tasks/updateTask', async (id) => {
    return await taskAPI.updateTask(id);
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
    return await taskAPI.deleteTask(id);
});

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                const index = state.items.findIndex((task) => task.id === action.payload.id);
                if (index !== -1) state.items[index] = action.payload;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.items = state.items.filter((task) => task.id !== action.payload);
            });
    },
});

export default tasksSlice.reducer;
