import axios from 'axios';

export const KEY = '11a7956f097157d972d5ab5d6f3e047e';

export const getMovs = axios.create({
  baseURL: `https://api.themoviedb.org/3/list/1?api_key=${KEY}`,
});

export const getGens = axios.create({
  baseURL: `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=pt-BR`,
});

export const getMoviesWeek = axios.create({
  baseURL: `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`,
});

export const searchMovies = axios.create({
  baseURL: `https://api.themoviedb.org/3/search`,
});
