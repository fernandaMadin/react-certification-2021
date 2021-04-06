const GlobalReducer = (state, action) => {
  console.log('EL STATE ', state);
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload.theme };
    case 'SET_WORD':
      return { ...state, word: action.payload };
    default:
      return state;
  }
};

export default GlobalReducer;
