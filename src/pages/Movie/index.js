import React, { useState, useEffect } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import PropTypes from 'prop-types';

import api from '../../services/api';
import formatMinutesToHours from '../../utils/formatMinutesToHours';
import { formatPrice } from '../../utils/formatValue';

import Header from '../../components/Header';

import {
  MovieCard,
  MovieHeader,
  MovieInfo,
  Rating,
  LoadingContainer,
  TrailerContainer,
} from './styles';

export default function Movie({ location }) {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { state } = location;

  useEffect(() => {
    async function loadMovie() {
      setLoading(true);

      const response = await api.get(`/movie/${state.id}`, {
        params: {
          api_key: 'd9890f102dc9fcf0b442bb23413b8fea',
          language: 'pt-BR',
        },
      });

      const responseVideo = await api.get(`/movie/${state.id}/videos`, {
        params: {
          api_key: 'd9890f102dc9fcf0b442bb23413b8fea',
          language: 'pt-BR',
        },
      });

      console.log(responseVideo.data);

      const data = {
        ...response.data,
        runTimeFormatted: formatMinutesToHours(response.data.runtime),
        budgetFormatted: formatPrice(response.data.budget),
        revenueFormatted: formatPrice(response.data.revenue),
        profit: formatPrice(response.data.revenue - response.data.budget),
      };

      // console.log(response.data);
      setMovie(data);
      setGenres(response.data.genres);
      setLanguages(response.data.spoken_languages);
      setTrailers(responseVideo.data.results);
      setLoading(false);
    }

    loadMovie();
  }, []);

  return (
    <>
      <Header />

      {loading ? (
        <LoadingContainer>
          <AiOutlineLoading3Quarters color="#136ca0" size={36} />
          <span>Carregando...</span>
        </LoadingContainer>
      ) : (
        <>
          <MovieCard>
            <MovieHeader>
              <h1>{movie.title}</h1>

              <span>{state.dateFormatted}</span>
            </MovieHeader>

            <MovieInfo>
              <div>
                <h2>Sinopse</h2>

                <p>{movie.overview}</p>

                <h2>Informações</h2>

                <ul>
                  <li>
                    <span>Situação</span>
                    <strong>{movie.status}</strong>
                  </li>

                  <li>
                    <span>Idioma</span>
                    {languages.map(language => (
                      <strong key={language.name}>{language.name}</strong>
                    ))}
                  </li>

                  <li>
                    <span>Duração</span>
                    <strong>{movie.runTimeFormatted}</strong>
                  </li>

                  <li>
                    <span>Orçamento</span>
                    <strong>{movie.budgetFormatted}</strong>
                  </li>

                  <li>
                    <span>Receita</span>
                    <strong>{movie.revenueFormatted}</strong>
                  </li>

                  <li>
                    <span>Lucro</span>
                    <strong>{movie.profit}</strong>
                  </li>
                </ul>

                <div>
                  <ul>
                    {genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>

                  <Rating>
                    <div>
                      <span>{movie.vote_average}</span>
                    </div>
                  </Rating>
                </div>
              </div>

              <img
                src={`https://image.tmdb.org/t/p/w500${state.poster_path}`}
                alt={movie.title}
              />
            </MovieInfo>
          </MovieCard>

          <TrailerContainer>
            {trailers.map(trailer => (
              <li key={trailer.id}>
                <iframe
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title={trailer.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </li>
            ))}
          </TrailerContainer>
        </>
      )}
    </>
  );
}

Movie.propTypes = {
  location: PropTypes.object.isRequired,
};
