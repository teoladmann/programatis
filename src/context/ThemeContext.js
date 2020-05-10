import React, { useEffect, useReducer } from 'react';

const defaultState = {
  dark: false,
  toggleDark: () => {},
};

const ThemeContext = React.createContext(defaultState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { dark: !state.dark };
    default:
      throw new Error();
  }
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { dark: false });

  const toggleDark = () => {
    const { dark } = state;
    localStorage.setItem('dark', JSON.stringify(!dark));
    dispatch({ type: 'toggle' });
  };

  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem('dark'));

    if (isDark) {
      dispatch({ type: 'toggle' });
    }
  }, []);

  return (
    <ThemeContext.Provider value={[state, toggleDark]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
