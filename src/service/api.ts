import axios from 'axios';

export const KEY = '';

export const getGens = axios.create({
  baseURL: `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=pt-BR`,
});

export const getMoviesWeek = axios.create({
  baseURL: `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`,
});

export const getMovieDefault = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});
