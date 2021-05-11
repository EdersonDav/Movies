import { useEffect, useState, ChangeEvent } from 'react';
import { HiStar } from 'react-icons/hi';

import { getGens, getMovs } from 'service/api';
import { IMovies, IGenres } from 'helper/interfaces';

import {
  SearchWrapper,
  SearchContainer,
  InputDiv,
  CardsWrapper,
  Card,
} from './style';

const Search = () => {
  const [movies, setMovies] = useState<IMovies[]>();
  const [genres, setGenres] = useState<IGenres[]>();
  const [moviesSearch, setMoviesSearch] = useState<IMovies[]>();
  const imageBaseUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';
  useEffect(() => {
    const getMovies = async () => {
      const moviesResponse = await getMovs.get('');
      const genResponse = await getGens.get('');
      setMovies(moviesResponse.data.items);
      setGenres(genResponse.data.genres);
    };
    getMovies();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      setMoviesSearch(
        movies?.filter(movie =>
          movie.title.toLowerCase().includes(e.target.value.toLowerCase()),
        ),
      );
    } else {
      setMoviesSearch([]);
    }
  };

  const handleGens = (gen: number[]) => {
    const genresString: string[] = [];
    gen.forEach(g => {
      if (genres?.length) {
        genres.forEach(gState => {
          if (g === gState.id) {
            genresString.push(gState.name);
          }
        });
      }
    });
    return `${genresString[0]}, ${genresString[1]}`;
  };

  return (
    <SearchContainer>
      <SearchWrapper>
        <InputDiv>
          <input
            type="text"
            placeholder="Pesquise pelo nome do filme"
            onChange={handleChange}
          />
        </InputDiv>
        <CardsWrapper>
          {/* MAP */}
          {moviesSearch &&
            moviesSearch?.length > 0 &&
            moviesSearch.map(movie => (
              <Card
                imageUrl={`${imageBaseUrl}${movie.poster_path}`}
                key={movie.id}
              >
                <div />
                <div>
                  <h2>{movie.original_title}</h2>
                  <p>{handleGens(movie.genre_ids)}</p>
                  <span>
                    <HiStar /> {movie.vote_average}
                  </span>
                </div>
              </Card>
            ))}
        </CardsWrapper>
      </SearchWrapper>
    </SearchContainer>
  );
};

export default Search;
