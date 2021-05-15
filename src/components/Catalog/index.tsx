import { useEffect, useState, ChangeEvent } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { HiStar } from 'react-icons/hi';
import { FaRegPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { getGens, KEY, getMovieDefault } from 'service/api';
import { IMovies, IGenres } from 'helper/interfaces';
import { imageBaseUrl, imageDefault } from 'utils/images';
import handleGens from 'helper/handleGens';

import {
  CatalogWrapper,
  CatalogButtons,
  SelectDiv,
  CatalogMoviesWrapper,
  Card,
} from './style';

const Catalog = () => {
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState<IGenres[]>();
  const [genSelected, setGenSelected] = useState('por gênero');
  const [popularity, setPopularity] = useState(true);
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [layout, setLayout] = useState('grid');

  useEffect(() => {
    const getGenrs = async () => {
      const genResponse = await getGens.get('');

      setGenres(genResponse.data.genres);
    };
    getGenrs();
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      const moviesResponse = popularity
        ? await getMovieDefault.get(
            `/movie/popular?api_key=${KEY}&language=en-US&page=${page}`,
          )
        : await getMovieDefault.get(
            `/discover/movie?api_key=${KEY}&with_genres=${genSelected}&page=${page}`,
          );
      const result: IMovies[] = moviesResponse.data.results;
      if (page > 1) {
        const newListMovies = movies;
        newListMovies.push(...result);
        setMovies(newListMovies);
      } else {
        setMovies(result);
      }
    };
    getMovies();
  }, [popularity, genSelected, page]);

  const handleLayout = (e: ChangeEvent<HTMLSelectElement>) => {
    setLayout(e.target.value.split(' ')[1]);
    if (e.target.value.split(' ')[1] === 'lista') {
      setLimit(limit / 2);
    } else {
      setLimit(limit * 2);
    }
  };

  const handleGen = (e: ChangeEvent<HTMLSelectElement>) => {
    setMovies([]);
    setPage(1);
    setLimit(layout === 'grid' ? 6 : 3);
    setGenSelected(e.target.value);
    setPopularity(false);
  };

  const handlePopulary = () => {
    setMovies([]);
    setPage(1);
    setLimit(layout === 'grid' ? 6 : 3);
    setGenSelected('por gênero');
    setPopularity(true);
  };

  return (
    <CatalogWrapper>
      <CatalogButtons popularity={popularity}>
        <div>
          <SelectDiv>
            <IoIosArrowDown size={16} color="#eaeaea" />
            {genres?.length && (
              <select
                onChange={handleGen}
                name="genres"
                id="genres"
                defaultValue={genSelected}
              >
                <option disabled value="por gênero">
                  por gênero
                </option>
                {genres.map(g => (
                  <option key={g.id} value={g.id}>
                    {g.name}
                  </option>
                ))}
              </select>
            )}
          </SelectDiv>
          <button onClick={handlePopulary} type="button">
            mais populares
          </button>
        </div>
        <SelectDiv>
          <IoIosArrowDown size={16} color="#eaeaea" />
          <select
            onChange={handleLayout}
            name="layout"
            id="layout"
            defaultValue="em grid"
          >
            <option value="em grid">em grid</option>
            <option value="em lista">em lista</option>
          </select>
        </SelectDiv>
      </CatalogButtons>

      <CatalogMoviesWrapper>
        {movies?.length &&
          movies.map((movie, index) => {
            if (index < limit) {
              return (
                <Card
                  imageUrl={
                    movie.poster_path
                      ? `${imageBaseUrl}${movie.poster_path}`
                      : imageDefault
                  }
                  direction={layout}
                  key={`${movie.id}`}
                >
                  <div>
                    <Link to={`/${movie.id}`}>
                      <FaRegPlayCircle color="#fff" size={64} />
                    </Link>
                  </div>
                  <div>
                    <h2>{movie.original_title}</h2>
                    <p>{handleGens(movie.genre_ids, genres)}</p>
                    <span>
                      <HiStar color="#fe3189" size={17.31} />{' '}
                      {movie.vote_average}
                    </span>
                    <p>
                      {movie.overview.length < 200
                        ? movie.overview
                        : `${movie.overview.substring(0, 200)}...`}
                    </p>
                  </div>
                </Card>
              );
            }
          })}
      </CatalogMoviesWrapper>

      <button
        type="button"
        onClick={() => {
          setLimit(limit + (layout === 'grid' ? 6 : 3));
          setPage(page + 1);
        }}
      >
        carregar mais
      </button>
    </CatalogWrapper>
  );
};

export default Catalog;
