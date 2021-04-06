import React from 'react';

const GlobalContext = React.createContext({
  searchWord: '',
  theme: {},
  dispatch: () => {},
});

export default GlobalContext;
