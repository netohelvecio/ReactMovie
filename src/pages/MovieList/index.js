import React, { useState, useEffect } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import api from '../../services/api';

import Header from '../../components/Header';
import { Container, Movie, Rating, Genre } from './styles';

export default function MovieList({ history }) {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function loadGenres() {
      const response = await api.get('genre/movie/list', {
        params: {
          api_key: 'd9890f102dc9fcf0b442bb23413b8fea',
          language: 'pt-BR',
        },
      });

      setGenres(response.data.genres);
    }

    loadGenres();
  }, []);

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      setLoading(true);

      if (!search) {
        toast.error('Preencha o campo!');
        setLoading(false);
        return;
      }

      const response = await api.get('search/movie', {
        params: {
          api_key: 'd9890f102dc9fcf0b442bb23413b8fea',
          language: 'pt-BR',
          query: search,
        },
      });

      if (!response.data.results.length) {
        toast.error('Nenhum filme encontrado!');
        setLoading(false);
        return;
      }

      const data = response.data.results.map(r => ({
        ...r,
        dateFormatted: format(parseISO(r.release_date), 'dd/MM/yyyy', {
          locale: pt,
        }),
        mergedGenres: r.genre_ids.map(genre => {
          for (let i = 0; i < genres.length; i++) {
            if (genre === genres[i].id) {
              return { ...genres[i] };
            }
          }
        }),
      }));

      // console.log(data);
      setMovies(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error('ERROR AO CONSULTAR API');
      console.log(error);
    }
  }

  function navigateToDetails(movie_) {
    history.push('/movie', movie_);
  }

  return (
    <>
      <Header />

      <Container>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Busque um filme por nome ou gênero"
          />
          <button type="submit">
            {loading ? (
              <AiOutlineLoading3Quarters color="#fff" size={20} />
            ) : (
              'Buscar'
            )}
          </button>
        </form>

        <ul>
          {movies.map(movie => (
            <Movie key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />

              <div>
                <header>
                  <Rating>
                    <div>
                      <span>{movie.vote_average}</span>
                    </div>
                  </Rating>

                  <span>{movie.title}</span>
                </header>

                <aside>
                  <span>{movie.dateFormatted}</span>

                  <p>{movie.overview}</p>

                  <div>
                    <Genre>
                      {movie.mergedGenres.map(genre => (
                        <li key={genre.id}>{genre.name}</li>
                      ))}
                    </Genre>

                    <button
                      type="button"
                      onClick={() => navigateToDetails(movie)}
                    >
                      <MdAdd color="#fff" size={20} />
                      Detalhes
                    </button>
                  </div>
                </aside>
              </div>
            </Movie>
          ))}
        </ul>
      </Container>
    </>
  );
}

MovieList.propTypes = {
  history: PropTypes.object.isRequired,
};
