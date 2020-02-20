import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

import { MovieCard, MovieHeader, MovieInfo, Rating } from './styles';

export default function Movie({ location }) {
  const { state } = location;

  return (
    <>
      <Header />

      <MovieCard>
        <MovieHeader>
          <h1>Thor: Ragnarok</h1>

          <span>20/02/2020</span>
        </MovieHeader>

        <MovieInfo>
          <div>
            <h2>Sinopse</h2>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              vero exercitationem commodi modi reiciendis pariatur tempora.
              Incidunt error, harum ab ex, illo, aut fugiat aperiam voluptates
              non doloribus quisquam praesentium.Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Culpa vero exercitationem commodi
              modi reiciendis pariatur tempora. Incidunt error, harum ab ex,
              illo, aut fugiat aperiam voluptates non doloribus quisquam
              praesentium.
            </p>

            <h2>Informações</h2>

            <ul>
              <li>
                <span>Situação</span>
                <strong>Lançado</strong>
              </li>

              <li>
                <span>Idioma</span>
                <strong>Lançado</strong>
              </li>

              <li>
                <span>Duração</span>
                <strong>Lançado</strong>
              </li>

              <li>
                <span>Orçamento</span>
                <strong>Lançado</strong>
              </li>

              <li>
                <span>Receita</span>
                <strong>Lançado</strong>
              </li>

              <li>
                <span>Lucro</span>
                <strong>Lançado</strong>
              </li>
            </ul>

            <div>
              <ul>
                <li>Fantasia</li>
                <li>Ação</li>
                <li>Aventura</li>
              </ul>

              <Rating>
                <div>
                  <span>8.3</span>
                </div>
              </Rating>
            </div>
          </div>

          <img src="https://i.picsum.photos/id/471/320/450.jpg" alt="" />
        </MovieInfo>
      </MovieCard>
    </>
  );
}

Movie.propTypes = {
  location: PropTypes.object.isRequired,
};
