import React from 'react';

import Header from '../../components/Header';

import { Container, Movie, Rating, Genre } from './styles';

export default function MovieList() {
  return (
    <>
      <Header />

      <Container>
        <form>
          <input type="text" placeholder="Busque um filme por nome ou gênero" />
          <button type="submit">Buscar</button>
        </form>

        <ul>
          <Movie>
            <img
              src="https://api.adorable.io/avatars/285/abott@adorable.png"
              alt=""
            />

            <div>
              <header>
                <Rating>
                  <div>
                    <span>89%</span>
                  </div>
                </Rating>

                <span>Parasita</span>
              </header>

              <aside>
                <span>18/02/2020</span>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Rerum libero repellendus corrupti dolore obcaecati dicta.
                  Consectetur maiores, provident porro recusandae facilis
                  corrupti aliquid fuga aut illo odit. Maiores, vitae quam.Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                  libero repellendus corrupti dolore obcaecati dicta.
                  Consectetur maiores, provident porro recusandae facilis
                  corrupti aliquid fuga aut illo odit. Maiores, vitae quam.Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                  libero repellendus corrupti dolore obcaecati dicta.
                  Consectetur maiores, provident porro recusandae facilis
                  corrupti aliquid fuga aut illo odit. Maiores, vitae quam.
                </p>

                <Genre>
                  <li>Aventura</li>
                  <li>Heroi</li>
                  <li>Fantasia</li>
                </Genre>
              </aside>
            </div>
          </Movie>

          <Movie>
            <img src="https://api.adorable.io/avatars/285/kaappa.png" alt="" />

            <div>
              <header>
                <Rating>
                  <div>
                    <span>89%</span>
                  </div>
                </Rating>

                <span>Parasita</span>
              </header>

              <aside>
                <span>18/02/2020</span>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Rerum libero repellendus corrupti dolore obcaecati dicta.
                  Consectetur maiores, provident porro recusandae facilis
                  corrupti aliquid fuga aut illo odit. Maiores, vitae quam.Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                  libero repellendus corrupti dolore obcaecati dicta.
                  Consectetur maiores, provident porro recusandae facilis
                  corrupti aliquid fuga aut illo odit. Maiores, vitae quam.Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                  libero repellendus corrupti dolore obcaecati dicta.
                  Consectetur maiores, provident porro recusandae facilis
                  corrupti aliquid fuga aut illo odit. Maiores, vitae quam.
                </p>

                <Genre>
                  <li>Aventura</li>
                  <li>Heroi</li>
                  <li>Fantasia</li>
                </Genre>
              </aside>
            </div>
          </Movie>
        </ul>
      </Container>
    </>
  );
}
