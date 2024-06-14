import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Film } from '../../types';
import { RootState } from '../store';
import axios from 'axios';

const URL = 'https://api.kinopoisk.dev/v1.4';
const headers = {
  accept: 'application/json',
  'X-API-KEY': import.meta.env.VITE_API_KEY,
};

export const fetchAllFilms = createAsyncThunk<Film[], void, { rejectValue: string }>(
  'films/films',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${URL}/movie`, {
        headers,
      });
      const films = await response.data;
      return films.docs;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('unknown error in request');
    }
  },
);

type InitialStateType = {
  films: Film[] | null;
  errorMessage: string;
  loading: 'idle' | 'loading';
};

const initialState: InitialStateType = {
  films: null,
  errorMessage: '',
  loading: 'idle',
};

export const apiSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(fetchAllFilms.pending, (state) => {
        state.errorMessage = '';
        state.loading = 'loading';
      })
      .addCase(fetchAllFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.errorMessage = '';
        state.loading = 'idle';
      })
      .addCase(fetchAllFilms.rejected, (state, action) => {
        state.films = [];
        state.errorMessage = action.payload || 'unknown error';
        state.loading = 'idle';
      });
  },
});

export const selectFilms = (state: RootState) => state.films.films;

export default apiSlice.reducer;
