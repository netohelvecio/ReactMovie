import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { Toast } from './styles/toastStyle';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <Toast autoClose={3000} />
    </>
  );
}

export default App;
