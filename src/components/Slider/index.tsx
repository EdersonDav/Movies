/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { HiStar } from 'react-icons/hi';
import { FaRegPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { getGens, getMoviesWeek } from 'service/api';
import { IMovies, IGenres } from 'helper/interfaces';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderWrapper, SliderTitles, CardSlider, SliderMovies } from './style';

const Slider = () => {
  const [genres, setGenres] = useState<IGenres[]>();
  const [moviesWeek, setMoviesWeek] = useState<IMovies[]>();
  const imageBaseUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';
  const imageDefault =
    'https://image.freepik.com/vetores-gratis/noite-de-filme-pode-ser-usado-para-folheto-cartaz-banner-anuncio-e-fundo-do-site_7547-46.jpg';

  useEffect(() => {
    const getMovies = async () => {
      const movies = await getMoviesWeek.get('');
      const genResponse = await getGens.get('');
      setMoviesWeek(movies.data.results);
      console.log(movies.data.results);

      setGenres(genResponse.data.genres);
    };
    getMovies();
  }, []);

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

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        arrows: true,
        breakpoint: 1340,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 895,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderWrapper>
      <SliderTitles>
        <span />
        <h1>
          <strong>LANÇAMENTOS&nbsp;</strong>DA SEMANA
        </h1>
      </SliderTitles>

      {moviesWeek && (
        <SliderMovies {...settings}>
          {moviesWeek.map(movie => (
            <CardSlider
              key={movie.id}
              imageUrl={
                movie.poster_path
                  ? `${imageBaseUrl}${movie.poster_path}`
                  : imageDefault
              }
            >
              <div>
                <Link to="/">
                  <FaRegPlayCircle color="#fff" size={64} />
                </Link>
              </div>
              <div>
                <h2>
                  {movie.title.length < 17
                    ? movie.title
                    : `${movie.title.substring(0, 13)}...`}
                </h2>
                <span>{handleGens(movie.genre_ids)}</span>
                <span>
                  <HiStar size={18} color="#fe3189" /> {movie.vote_average}
                </span>
              </div>
            </CardSlider>
          ))}
        </SliderMovies>
      )}
    </SliderWrapper>
  );
};

export default Slider;
