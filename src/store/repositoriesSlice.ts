// src/store/repositoriesSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../main';
import { GitHubSearchResponse, Repository } from '../App';
import axios from 'axios';


interface RepositoriesState {
    data: Repository[];
    loading: boolean;
    error: string | null;
}

const initialState: RepositoriesState = {
    data: [],
    loading: false,
    error: null,
};

const repositoriesSlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {
        fetchRepositoriesStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchRepositoriesSuccess(state, action: PayloadAction<Repository[]>) {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchRepositoriesFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchRepositoriesStart,
    fetchRepositoriesSuccess,
    fetchRepositoriesFailure,
} = repositoriesSlice.actions;

export default repositoriesSlice.reducer;

export const fetchRepositories = (query: string): AppThunk => async (dispatch: (arg0: { payload: string | Repository[] | undefined; type: "repositories/fetchRepositoriesStart" | "repositories/fetchRepositoriesSuccess" | "repositories/fetchRepositoriesFailure"; }) => void) => {
    dispatch(fetchRepositoriesStart());
    try {
        const response = await axios.get<GitHubSearchResponse>(
            `https://api.github.com/search/repositories?q=${query}`
        );
        dispatch(fetchRepositoriesSuccess(response.data.items));
    } catch (error) {
        dispatch(fetchRepositoriesFailure('Failed to fetch repositories. Please try again later.'));
    }
};
