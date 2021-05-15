import { ReactNode } from 'react';

export interface IMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  genres: IGenres[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IProps {
  children: ReactNode;
}

export interface IGenres {
  id: number;
  name: string;
}

export interface ITrailer {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}
