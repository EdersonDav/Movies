import { useEffect, useState, ChangeEvent } from 'react';
import { HiStar } from 'react-icons/hi';

import { getGens, searchMovies, KEY } from 'service/api';
import { IMovies, IGenres } from 'helper/interfaces';

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
  const imageBaseUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';
  const imageDefault =
    'https://image.freepik.com/vetores-gratis/noite-de-filme-pode-ser-usado-para-folheto-cartaz-banner-anuncio-e-fundo-do-site_7547-46.jpg';
  useEffect(() => {
    const getMovies = async () => {
      const genResponse = await getGens.get('');
      setGenres(genResponse.data.genres);
    };
    getMovies();
  }, []);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '' && e.target.value.length > 2) {
      const moviesResponse = await searchMovies.get(
        `movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`,
      );
      setMoviesSearch(moviesResponse.data.results);
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
          {moviesSearch &&
            moviesSearch?.length > 0 &&
            moviesSearch.map(movie => (
              <Card
                imageUrl={
                  movie.poster_path
                    ? `${imageBaseUrl}${movie.poster_path}`
                    : imageDefault
                }
                key={movie.id}
              >
                <div />
                <div>
                  <h2>{movie.original_title}</h2>
                  <p>{handleGens(movie.genre_ids)}</p>
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
