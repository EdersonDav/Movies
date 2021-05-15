import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiStar } from 'react-icons/hi';

import Layout from 'components/Layout';
import { IMovies, ITrailer } from 'helper/interfaces';
import { getMovieDefault, KEY } from 'service/api';
import { ImageBaseUrl, ImageDefault } from 'utils/images';

import { MovieDetail, Trailer } from './style';

const Movie = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<IMovies>();
  const [movieTrailer, setMovieTrailer] = useState<ITrailer[]>();

  useEffect(() => {
    const getMovie = async () => {
      const moviesResponse = await getMovieDefault.get(
        `/movie/${id}?api_key=${KEY}&language=pt-BR`,
      );
      const moviesTrailerResponse = await getMovieDefault.get(
        `/movie/${id}/videos?api_key=${KEY}&language=pt-BR`,
      );
      setMovie(moviesResponse.data);
      setMovieTrailer(moviesTrailerResponse.data.results);
    };
    getMovie();
  }, [id]);
  return (
    <Layout>
      {movie && (
        <>
          <MovieDetail
            imageUrl={
              movie.poster_path
                ? `${ImageBaseUrl}${movie.poster_path}`
                : ImageDefault
            }
          >
            <div />
            <div>
              <h2>{movie.original_title}</h2>
              <div>
                <p>{movie.genres[1].name}</p>
                <span>
                  <HiStar color="#fe3189" size={17.31} /> {movie.vote_average}
                </span>
              </div>
              <h3>Sinopse</h3>
              <p>{movie.overview}</p>
            </div>
          </MovieDetail>

          <Trailer>
            <h2>Trailer</h2>
            {movieTrailer ? (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${movieTrailer[0].key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <h2>Trailer não esncontraado :(</h2>
            )}

            <Link to="/">voltar</Link>
          </Trailer>
        </>
      )}
    </Layout>
  );
};

export default Movie;
