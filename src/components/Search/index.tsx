import { useEffect, useState, ChangeEvent } from 'react';
import { HiStar } from 'react-icons/hi';

import { getGens, getMovieDefault, KEY } from 'service/api';
import { IMovies, IGenres } from 'helper/interfaces';
import { ImageBaseUrl, ImageDefault } from 'utils/images';
import handleGens from 'helper/handleGens';

import {
  SearchWrapper,
  SearchContainer,
  InputDiv,
  CardsWrapper,
  Card,
} from './style';

const Search = () => {
  const [genres, setGenres] = useState<IGenres[]>();
  const [moviesSearch, setMoviesSearch] = useState<IMovies[]>();

  useEffect(() => {
    const getMovies = async () => {
      const genResponse = await getGens.get('');
      setGenres(genResponse.data.genres);
    };
    getMovies();
  }, []);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '' && e.target.value.length > 2) {
      const moviesResponse = await getMovieDefault.get(
        `/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`,
      );
      setMoviesSearch(moviesResponse.data.results);
    } else {
      setMoviesSearch([]);
    }
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
          {moviesSearch &&
            moviesSearch?.length > 0 &&
            moviesSearch.map(movie => (
              <Card
                to={`/${movie.id}`}
                imageUrl={
                  movie.poster_path
                    ? `${ImageBaseUrl}${movie.poster_path}`
                    : ImageDefault
                }
                key={movie.id}
              >
                <div />
                <div>
                  <h2>{movie.original_title}</h2>
                  <p>{handleGens(movie.genre_ids, genres)}</p>
                  <span>
                    <HiStar color="#fe3189" /> {movie.vote_average}
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
