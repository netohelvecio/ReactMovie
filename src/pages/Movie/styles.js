import styled, { keyframes } from 'styled-components';

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 40px;
`;

export const MovieHeader = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Abel|Lato&display=swap');

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 40px;
  background: #ddd;

  h1 {
    font: 36px 'Abel', sans-serif;
    color: #136ca0;
  }

  span {
    font-size: 22px;
    color: #888;
  }
`;

export const MovieInfo = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Abel|Lato&display=swap');

  display: flex;
  background: #eee;

  img {
    width: 380px;
  }

  > div {
    display: flex;
    flex-direction: column;
    padding: 30px;

    h2 {
      font: 30px 'Abel', sans-serif;
      color: #136ca0;
      padding: 5px 0;
      margin: 20px 0;
      border-bottom: 2px solid #0ce7f3;

      &:first-child {
        margin: 0;
        margin-bottom: 20px;
      }
    }

    p {
      font-size: 16px;
      color: #666;
      line-height: 18px;
    }

    > ul {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 15px;
      margin-bottom: 30px;

      li {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        text-align: center;

        &:first-child {
          text-align: start;
        }

        strong {
          color: #666;
          font-weight: normal;
        }

        span {
          font: 26px 'Abel', sans-serif;
          color: #136ca0;
          margin-bottom: 5px;
        }
      }
    }

    > div {
      display: flex;
      justify-content: space-between;

      ul {
        display: flex;
        margin-top: 30px;
        margin-bottom: 15px;
        height: 31px;

        li {
          margin: 0 5px;
          background: #fff;
          border: 2px solid #136ca0;
          border-radius: 20px;
          padding: 5px;
          color: #136ca0;
          font-size: 14px;

          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;

    img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 425px) {
    > div {
      > ul {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;

        li {
          &:first-child {
            text-align: center;
          }
        }
      }

      > div {
        display: flex;
        flex-direction: column;

        ul {
          display: flex;
          margin-top: 30px;
          margin-bottom: 15px;
          height: 31px;
        }
      }
    }
  }
`;

export const Rating = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Abel|Lato&display=swap');

  border-radius: 50%;
  border: 4px solid #136ca0;

  div {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #136ca0;
    border: 5px solid #0ce7f3;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font: 50px 'Abel', sans-serif;
      color: #0ce7f3;
    }
  }

  @media only screen and (max-width: 425px) {
    border-radius: 50%;
    border: 4px solid #136ca0;
    width: 68px;
    height: 68px;

    div {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #136ca0;
      border: 5px solid #0ce7f3;

      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font: 24px 'Abel', sans-serif;
        color: #0ce7f3;
      }
    }
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 60px;

  span {
    font-size: 28px;
    color: #136ca0;
    font-weight: bold;
    margin-left: 15px;
  }

  svg {
    margin: 0px;
    padding: 0px;
    animation: ${rotate} 1s linear infinite;
  }
`;

export const TrailerContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 15px;
  margin-bottom: 30px;

  iframe {
    width: 100%;
    height: 600px;
  }
`;
