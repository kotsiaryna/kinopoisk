import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FilmsData } from '../../types';
import { RootState } from '../store';
import axios from 'axios';

const URL = 'https://api.kinopoisk.dev/v1.4';
const headers = {
  accept: 'application/json',
  'X-API-KEY': import.meta.env.VITE_API_KEY,
};

export const fetchAllFilms = createAsyncThunk<FilmsData, {page:number, limit: number}, { rejectValue: string }>(
  'films/films',
  async ({page, limit}, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${URL}/movie?page=${page}&limit=${limit}`, {
        headers,
      });
      const data:FilmsData = await response.data;
      console.log(data)
      return data;
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
  data: FilmsData | null;
  errorMessage: string;
  loading: 'idle' | 'loading';
};

const initialState: InitialStateType = {
  data: null,
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
        state.data = action.payload;
        state.errorMessage = '';
        state.loading = 'idle';
      })
      .addCase(fetchAllFilms.rejected, (state, action) => {
        state.data = null;
        state.errorMessage = action.payload || 'unknown error';
        state.loading = 'idle';
      });
  },
});

export const selectFilmsData = (state: RootState) => state.films.data;

export default apiSlice.reducer;
