import axios from 'axios';
import { FilmByID, Poster, ResponseData, ReviewData, Series } from '../types';
import { LoaderFunction } from 'react-router-dom';

const URL = 'https://api.kinopoisk.dev/v1.4';
const headers = {
  accept: 'application/json',
  'X-API-KEY': import.meta.env.VITE_API_KEY,
};

export const filmById: LoaderFunction<string> = async ({ params }) => {
  try {
    const resp = await axios.get(`${URL}/movie/${params.id}`, {
      headers,
    });
    const film: FilmByID = await resp.data;
    return film;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      throw new Response('Ошибка запроса', {
        statusText: error.message,
        status: error.response?.status,
      });
    }
    throw new Response('Неизвестная ошибка', {
      statusText: '',
      status: 2,
    });
  }
};

export const reviewByFilmId = async (id: number, page: number) => {
  try {
    const resp = await axios.get(`${URL}/review?page=${page}&limit=${5}&movieId=${id}`, {
      headers,
    });
    const data = await resp.data;
    return data as ReviewData;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      console.log(error.message);
      return null;
    }
    console.log('unknown error');
    return null;
  }
};

export const postersByFilmId = async (id: number) => {
  try {
    const resp = await axios.get(`${URL}/image?page=1&limit=20&movieId=${id}&type=cover`, {
      headers,
    });
    const data = await resp.data;
    return data.docs as Poster[];
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      console.log(error.message);
      return null;
    }
    console.log('unknown error');
    return null;
  }
};

export const seasonsByFilmId = async (id: number, page: number) => {
  try {
    const resp = await axios.get(`${URL}/season?page=${page}&limit=1&movieId=${id}`, {
      headers,
    });
    const data = await resp.data;
    return data as ResponseData<Series[]>;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      console.log(error.message);
      return null;
    }
    console.log('unknown error');
    return null;
  }
};
